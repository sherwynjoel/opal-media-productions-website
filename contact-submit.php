<?php
// Simple contact form handler for shared hosting (Hostinger).
// Sends form submissions to graham@opalmediaproductions.com

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function respond(int $code, array $payload): void {
    http_response_code($code);
    echo json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'Method not allowed']);
}

// Honeypot field: should be empty.
$honeypot = $_POST['website'] ?? '';
if (is_string($honeypot) && trim($honeypot) !== '') {
    respond(200, ['ok' => true]); // silently accept bots
}

// Support both form-encoded and JSON payloads.
$contentType = $_SERVER['CONTENT_TYPE'] ?? '';
$data = $_POST;
if (stripos($contentType, 'application/json') !== false) {
    $raw = file_get_contents('php://input');
    $json = json_decode($raw ?: '', true);
    if (is_array($json)) {
        $data = $json;
    }
}

function clean_text($v, int $maxLen): string {
    $s = is_string($v) ? $v : '';
    $s = trim($s);
    $s = str_replace(["\r\n", "\r"], "\n", $s);
    $s = strip_tags($s);
    if (mb_strlen($s) > $maxLen) {
        $s = mb_substr($s, 0, $maxLen);
    }
    return $s;
}

$name = clean_text($data['name'] ?? '', 120);
$email = clean_text($data['email'] ?? '', 180);
$phone = clean_text($data['phone'] ?? '', 60);
$service = clean_text($data['service'] ?? '', 80);
$message = clean_text($data['message'] ?? '', 4000);

if ($name === '' || $email === '' || $service === '' || $message === '') {
    respond(400, ['ok' => false, 'error' => 'Missing required fields']);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(400, ['ok' => false, 'error' => 'Invalid email']);
}

// Basic rate limit by IP (best-effort).
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateDir = sys_get_temp_dir() . DIRECTORY_SEPARATOR . 'opal_rate';
@mkdir($rateDir, 0700, true);
$rateFile = $rateDir . DIRECTORY_SEPARATOR . preg_replace('/[^a-zA-Z0-9_.-]/', '_', $ip) . '.txt';
$now = time();
if (is_file($rateFile)) {
    $last = (int) @file_get_contents($rateFile);
    if ($last > 0 && ($now - $last) < 20) { // 1 submit per 20s per IP
        respond(429, ['ok' => false, 'error' => 'Too many requests']);
    }
}
@file_put_contents($rateFile, (string)$now);

$to = 'graham@opalmediaproductions.com';
$subject = 'New website enquiry - OPAL Media Productions';

$bodyLines = [
    "New enquiry from the website contact form:",
    "",
    "Name: {$name}",
    "Email: {$email}",
    "Phone: " . ($phone !== '' ? $phone : '(not provided)'),
    "Service: {$service}",
    "IP: {$ip}",
    "",
    "Message:",
    $message,
    "",
    "--",
    "Sent via opalmediaproductions.com contact form",
];
// mail() expects CRLF line breaks.
$body = implode("\r\n", $bodyLines);

// Use a domain sender for better deliverability. Reply-To is the user.
$from = 'noreply@opalmediaproductions.com';
$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = 'From: OPAL Website <' . $from . '>';
$headers[] = 'Reply-To: ' . $email;
$headers[] = 'X-Mailer: PHP/' . phpversion();

$headersStr = implode("\r\n", $headers);

// Set envelope sender when possible (some hosts require this).
$params = '-f ' . escapeshellarg($from);

$ok = @mail($to, $subject, $body, $headersStr, $params);
if (!$ok) {
    respond(500, ['ok' => false, 'error' => 'Mail sending failed on server']);
}

respond(200, ['ok' => true]);


