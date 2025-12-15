# Deployment Checklist for OPAL Website

## Files Ready for Deployment

### HTML Files (4)
- ✅ index.html
- ✅ about.html
- ✅ portfolio.html
- ✅ contact.html

### CSS & JavaScript (2)
- ✅ styles.css
- ✅ script.js

### Images (11)
- ✅ ☁️.jpg (What We Stand For section)
- ✅ download (1).jpg (Photography services)
- ✅ download (2).jpg (Digital Marketing services)
- ✅ Coding❤️_🔥.jpg (Web Development services)
- ✅ digital marketing agency.jpg (Branding & Design services)
- ✅ CreativeLive Company Update.jpg
- ✅ Photography Pricing Guide – How Much Should Photographers Make (Updated for 2024).jpg
- ✅ Screenshot 2025-12-12 234332.png
- ✅ download.jpg
- ✅ Elite Team of Software Engineers_ Leading Edge tech in Web2 and Web3_.jpg
- ✅ Behind the scenes of the #21Icons Season II series.jpg

### Documentation
- ✅ README.md

## Deployment Steps

1. **Upload all files from the `dist` folder** to your hosting server (Hostinger)
2. **Ensure all files are in the root directory** or maintain the same folder structure
3. **Verify image paths** - Make sure all images are accessible
4. **Test the website** after deployment:
   - Check "What We Stand For" section - central image should display
   - Verify all service images load correctly
   - Test navigation links
   - Check contact form functionality
   - Verify scroll animations work

## Important Notes

- All images are included in the dist folder
- The central image in "What We Stand For" uses URL-encoded filename: `%E2%98%81%EF%B8%8F.jpg`
- If images don't load after deployment, check:
  - File permissions on the server
  - Case sensitivity of filenames
  - URL encoding compatibility with your server

## Total Files: 18

