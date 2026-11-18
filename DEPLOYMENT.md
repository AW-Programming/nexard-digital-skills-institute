# Deployment Guide - Nexard Digital Skills Institute Website

This guide will help you deploy the website to various hosting platforms.

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended - Free & Easy)

Vercel is the easiest way to deploy React applications.

1. **Install Vercel CLI** (optional):
```bash
npm install -g vercel
```

2. **Deploy via CLI**:
```bash
cd nexard-website
vercel
```

3. **Or deploy via GitHub**:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite and deploy automatically
   - Get a free URL like `nexard-website.vercel.app`

**Custom Domain**: You can connect `www.nexardinstitute.com` in Vercel dashboard.

---

### Option 2: Netlify (Free)

1. **Via Drag & Drop**:
   - Build the project: `npm run build`
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Get instant deployment

2. **Via Git**:
   - Push to GitHub/GitLab
   - Connect repository in Netlify
   - Build command: `npm run build`
   - Publish directory: `dist`

---

### Option 3: GitHub Pages (Free)

1. **Install gh-pages**:
```bash
npm install -D gh-pages
```

2. **Update package.json**:
```json
{
  "homepage": "https://yourusername.github.io/nexard-website",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Update vite.config.js**:
```javascript
export default defineConfig({
  base: '/nexard-website/',
  plugins: [react(), tailwindcss()],
})
```

4. **Deploy**:
```bash
npm run deploy
```

---

### Option 4: Traditional Hosting (cPanel, etc.)

1. **Build the project**:
```bash
npm run build
```

2. **Upload the `dist` folder** to your web server's public directory (usually `public_html` or `www`)

3. **Configure .htaccess** for SPA routing (if needed):
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 📊 Production Checklist

Before deploying to production:

- [ ] Build passes without errors (`npm run build`)
- [ ] All links work correctly
- [ ] Contact form is functional (or integrated with backend)
- [ ] Phone numbers are clickable (`tel:` links)
- [ ] WhatsApp links work correctly
- [ ] Social media links are correct
- [ ] Meta tags are updated with correct information
- [ ] Favicon is added
- [ ] Google Analytics (optional) is configured
- [ ] SSL certificate is enabled (HTTPS)

---

## 🔧 Environment Variables (Optional)

If you need to add API keys or other secrets:

1. Create a `.env` file in the root:
```
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=UA-XXXXXXXXX-X
```

2. Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

**Note**: All `VITE_` variables are exposed to the client. Don't store sensitive data.

---

## 📈 Performance Optimization

The website is already optimized, but you can:

1. **Enable Compression** (server-side):
   - Gzip or Brotli compression
   - Most hosting providers enable this by default

2. **Add Caching Headers**:
```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
</IfModule>
```

3. **Use a CDN**:
   - Vercel and Netlify include CDN by default
   - For traditional hosting, use Cloudflare (free)

---

## 📱 Post-Deployment Testing

After deployment, test:

1. **Mobile Responsiveness**:
   - iPhone (various sizes)
   - Android devices
   - Tablets

2. **Browser Compatibility**:
   - Chrome
   - Firefox
   - Safari
   - Edge

3. **Functionality**:
   - All navigation links
   - Contact form submission
   - Phone number clicks
   - WhatsApp integration
   - Scroll-to-top button
   - Smooth scrolling

4. **Performance**:
   - Use [Google PageSpeed Insights](https://pagespeed.web.dev/)
   - Target score: 90+

---

## 🆘 Troubleshooting

### Build Fails
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear cache: `npm cache clean --force`
- Check Node.js version (v18+)

### Routing Issues (404 on refresh)
- Configure server for SPA routing
- Add `.htaccess` for Apache
- Configure redirects in hosting platform

### Styles Not Loading
- Check base path in vite.config.js
- Ensure build completed successfully
- Clear browser cache

---

## 📞 Support

If you encounter issues:
- Check the [Vite documentation](https://vitejs.dev/)
- Check the [Tailwind CSS documentation](https://tailwindcss.com/)
- Review the hosting platform's documentation

---

**Ready to deploy?** Choose your preferred platform and follow the steps above! 🚀
