const fs = require('fs');
const path = require('path');

// Create dist directory if it doesn't exist
const distDir = path.join(__dirname, 'dist');
if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// Files to copy
const filesToCopy = [
    'index.html',
    'about.html',
    'portfolio.html',
    'contact.html',
    'styles.css',
    'script.js',
    'README.md'
];

// Images to copy
const imagesToCopy = [
    'CreativeLive Company Update.jpg',
    'Photography Pricing Guide – How Much Should Photographers Make (Updated for 2024).jpg',
    'Screenshot 2025-12-12 234332.png',
    'download.jpg',
    'download (1).jpg',
    'download (2).jpg',
    'Elite Team of Software Engineers_ Leading Edge tech in Web2 and Web3_.jpg',
    'Behind the scenes of the #21Icons Season II series.jpg',
    'Coding❤️_🔥.jpg',
    'digital marketing agency.jpg',
    '☁️.jpg'
];

// Copy files
filesToCopy.forEach(file => {
    const srcPath = path.join(__dirname, file);
    const destPath = path.join(distDir, file);
    if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`✓ Copied ${file}`);
    } else {
        console.log(`✗ File not found: ${file}`);
    }
});

// Copy images
imagesToCopy.forEach(image => {
    const srcPath = path.join(__dirname, image);
    const destPath = path.join(distDir, image);
    if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`✓ Copied ${image}`);
    } else {
        console.log(`✗ Image not found: ${image}`);
    }
});

console.log('\n✅ Build complete! All files are in the dist folder.');
console.log('📦 Ready for deployment to Hostinger.');

