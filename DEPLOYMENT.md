# OPAL Media Productions Website - Deployment Guide

## Build Status
✅ Production build ready in `/dist` folder

## Deployment Files Structure

```
dist/
├── index.html          # Main homepage
├── contact.html        # Contact page
├── styles.css          # All styles (liquid glass navbar, buttons, etc.)
├── script.js           # JavaScript functionality
├── contact-submit.php  # PHP contact form handler
└── images/             # All image assets
    ├── logo.png        # Logo (also used as favicon)
    └── ...             # Other images
```

## Deployment Options

### Option 1: Static Hosting (Netlify, Vercel, GitHub Pages)
1. Upload the entire `dist` folder contents
2. Set `index.html` as the entry point
3. Note: PHP contact form won't work on static hosts - use a form service instead

### Option 2: Traditional Web Hosting (cPanel, FTP)
1. Upload all files from `dist` folder to your web root (usually `public_html` or `www`)
2. Ensure PHP is enabled for `contact-submit.php` to work
3. Set proper file permissions (644 for files, 755 for directories)

### Option 3: VPS/Server Deployment
1. Copy `dist` folder contents to `/var/www/html` or your web server directory
2. Ensure PHP is installed and configured
3. Set up proper permissions
4. Configure web server (Apache/Nginx) to serve files

## Features Included

- ✅ Liquid glass navbar (centered, translucent)
- ✅ Liquid glass "Start Your Project" button
- ✅ Floating WhatsApp button (bottom right)
- ✅ Responsive design (mobile-friendly)
- ✅ About button visible on mobile
- ✅ Favicon (logo.png)
- ✅ Contact form with PHP handler

## Important Notes

1. **PHP Contact Form**: The `contact-submit.php` file requires PHP support. Update the email address in the file before deployment.

2. **Image Paths**: All images are referenced as `images/filename.png` - ensure the images folder is in the same directory as index.html

3. **Favicon**: The favicon is set to `images/logo.png` - ensure this path is correct

4. **HTTPS**: For production, ensure SSL/HTTPS is enabled for security

## Quick Deploy Commands

### Build (copy files to dist)
```powershell
cd "C:\Users\Sherwyn joel\OneDrive\Desktop\opal\opal-media-productions-website"
Copy-Item -Path "index.html" -Destination "dist\index.html" -Force
Copy-Item -Path "styles.css" -Destination "dist\styles.css" -Force
Copy-Item -Path "script.js" -Destination "dist\script.js" -Force
Copy-Item -Path "contact-submit.php" -Destination "dist\contact-submit.php" -Force
Copy-Item -Path "images\*" -Destination "dist\images\" -Recurse -Force
```

## Testing Before Deployment

1. Test locally: `python -m http.server 1010` in dist folder
2. Check all links work
3. Test contact form (if PHP is available)
4. Test responsive design on mobile devices
5. Verify favicon appears in browser tab

## Post-Deployment Checklist

- [ ] Test website loads correctly
- [ ] Verify favicon appears
- [ ] Test contact form submission
- [ ] Check mobile responsiveness
- [ ] Verify WhatsApp button works
- [ ] Test all navigation links
- [ ] Check images load properly
- [ ] Verify liquid glass effects display correctly

