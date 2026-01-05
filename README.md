# OPAL Media Productions Website

A modern, responsive website for OPAL Media Productions featuring liquid glass design elements.

## Features

- 🎨 **Liquid Glass Navbar** - Translucent, centered navigation bar with backdrop blur
- 💎 **Liquid Glass Buttons** - Beautiful glassmorphism-style call-to-action buttons
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- 💬 **WhatsApp Integration** - Floating WhatsApp button for easy contact
- 📧 **Contact Form** - PHP-powered contact form with email submission
- ⚡ **Fast & Lightweight** - Optimized performance

## Quick Start

### Local Development

1. Navigate to the project directory:
```bash
cd opal-media-productions-website
```

2. Start a local server:
```bash
# Using Python
python -m http.server 1010

# Or using PHP (if installed)
php -S localhost:1010
```

3. Open your browser: `http://localhost:1010`

### Build for Production

Run the build script to prepare files for deployment:

```powershell
.\build.ps1
```

Or manually copy files to the `dist` folder.

## Project Structure

```
opal-media-productions-website/
├── index.html              # Main homepage
├── contact.html            # Contact page
├── styles.css              # All styles
├── script.js               # JavaScript functionality
├── contact-submit.php      # PHP contact form handler
├── images/                 # Image assets
├── dist/                   # Production build (ready for deployment)
├── build.ps1               # Build script
└── DEPLOYMENT.md           # Detailed deployment guide
```

## Deployment

The `dist` folder contains all production-ready files. See `DEPLOYMENT.md` for detailed deployment instructions.

### Quick Deploy

1. Upload all files from the `dist` folder to your web server
2. Ensure PHP is enabled (for contact form)
3. Update email in `contact-submit.php` if needed
4. Set proper file permissions

## Technologies Used

- HTML5
- CSS3 (with glassmorphism effects)
- JavaScript (Vanilla)
- PHP (for contact form)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2024 OPAL Media Productions. All rights reserved.

