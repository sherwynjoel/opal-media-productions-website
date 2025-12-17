const fs = require('fs');
const path = require('path');

// Files to copy
const filesToCopy = [
    'index.html',
    'about.html',
    'contact.html',
    'portfolio.html',
    'styles.css',
    'script.js'
];

// Images to copy
const imagesToCopy = [
    'logo.png',
    'download (1).jpg',
    'download (2).jpg',
    'download.jpg',
    'Coding❤️_🔥.jpg',
    'digital marketing agency.jpg',
    '☁️.jpg',
    'Behind the scenes of the #21Icons Season II series.jpg',
    'CreativeLive Company Update.jpg',
    'Elite Team of Software Engineers_ Leading Edge tech in Web2 and Web3_.jpg',
    'Photography Pricing Guide – How Much Should Photographers Make (Updated for 2024).jpg',
    'Screenshot 2025-12-12 234332.png'
];

// Create dist directory if it doesn't exist
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

// Function to copy file
function copyFile(src, dest) {
    try {
        const destDir = path.dirname(dest);
        if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true });
        }
        fs.copyFileSync(src, dest);
        console.log(`✓ Copied ${path.basename(src)}`);
    } catch (error) {
        console.error(`✗ Error copying ${src}:`, error.message);
    }
}

// Copy files
console.log('Building project...\n');

// Copy HTML, CSS, JS files
filesToCopy.forEach(file => {
    const src = path.join(__dirname, file);
    const dest = path.join(distDir, file);
    if (fs.existsSync(src)) {
        copyFile(src, dest);
    } else {
        console.log(`⚠ File not found: ${file}`);
    }
});

// Copy images
imagesToCopy.forEach(image => {
    const src = path.join(__dirname, image);
    const dest = path.join(distDir, image);
    if (fs.existsSync(src)) {
        copyFile(src, dest);
    } else {
        console.log(`⚠ Image not found: ${image}`);
    }
});

console.log('\n✓ Build complete! Files copied to dist/ folder.');

