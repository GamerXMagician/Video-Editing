# Aks Prasad Portfolio - Video Editing & Motion Graphics

A premium, modern portfolio website for video editing and motion graphics services. Built with vanilla HTML, CSS, and JavaScript for maximum performance and customization.

## Features

✨ **Premium Design**
- Cinematic dark theme with modern glassmorphism
- Smooth micro-interactions and animations
- Fully responsive and mobile-optimized
- Professional creative studio aesthetic

🎬 **Core Sections**
- Hero section with animated elements
- Showreel/video showcase
- Services showcase (6 service cards)
- Portfolio grid with filtering
- Process/workflow explanation
- Software/tools section
- About section
- Testimonials
- Pricing/quote section
- Contact with social links

⚡ **Performance**
- Lightweight (no heavy frameworks)
- Optimized animations
- Lazy loading support
- Fast loading times
- SEO-friendly structure

📱 **Responsive**
- Mobile-first design
- Tablet & desktop optimized
- Touch-friendly navigation
- Hamburger menu on mobile

♿ **Accessibility**
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Reduced motion support
- Focus states

## File Structure

```
Video Editing Portfoilo/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
└── README.md           # This file
```

## Getting Started

### 1. Local Development

Simply open `index.html` in a web browser:

```bash
# On Windows
start index.html

# On Mac
open index.html

# Or right-click and select "Open with Browser"
```

### 2. Deploy Online

#### Option A: GitHub Pages (Free)
1. Create a GitHub repository
2. Push these files to the repository
3. Go to Settings > Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io/repo-name`

#### Option B: Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Click "Deploy" and drag/drop your project folder
3. Your site will be live in seconds

#### Option C: Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy with one click

#### Option D: Traditional Web Host
1. Upload files via FTP to your web hosting
2. Point your domain to the hosting
3. Done!

## Customization Guide

### Update Your Contact Information

Edit these lines in `index.html`:

```html
<!-- Line ~725: Contact buttons -->
<a href="mailto:your-email@example.com" class="btn btn-primary">Contact Me</a>
<a href="https://wa.me/your-number" class="btn btn-secondary" target="_blank">WhatsApp Me</a>

<!-- Line ~740: Social links -->
<a href="https://instagram.com/your-handle" target="_blank" class="social-icon" title="Instagram">
<a href="https://youtube.com/@your-channel" target="_blank" class="social-icon" title="YouTube">
<a href="https://wa.me/your-number" target="_blank" class="social-icon" title="WhatsApp">
<a href="mailto:your-email@example.com" class="social-icon" title="Email">
```

### Add Your Portfolio Projects

In the Portfolio section, edit each project card (`index.html` around line 390):

```html
<div class="portfolio-item" data-category="editing">
    <div class="portfolio-image">
        <img src="your-image.jpg" alt="Project description">
        <!-- OR use a video thumbnail -->
        <video src="your-video.mp4" poster="thumbnail.jpg"></video>
    </div>
    <div class="portfolio-info">
        <h3>Your Project Title</h3>
        <p class="category">Video Editing</p>
        <p class="description">Your project description.</p>
        <div class="tools">
            <span class="tool">Premiere Pro</span>
            <span class="tool">After Effects</span>
        </div>
    </div>
</div>
```

**Category options**: `editing`, `motion`, `social`, `gaming`, `promo`

### Add Your Showreel Video

Replace the video placeholder (around line 220):

```html
<iframe
    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
    width="100%"
    height="100%"
    frameborder="0"
    allowfullscreen>
</iframe>
```

Or embed from Vimeo:
```html
<iframe
    src="https://player.vimeo.com/video/YOUR_VIDEO_ID"
    width="100%"
    height="100%"
    frameborder="0"
    allowfullscreen>
</iframe>
```

### Add Testimonials

Update testimonial cards (around line 580):

```html
<div class="testimonial-card">
    <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
    <p class="testimonial-text">
        "Real testimonial from your client here."
    </p>
    <div class="testimonial-author">
        <div class="author-name">Client Name</div>
        <div class="author-role">Company / Project Type</div>
    </div>
</div>
```

### Customize Colors

Edit the CSS variables in `styles.css` (top of the file):

```css
:root {
    --primary-color: #00d4ff;      /* Main cyan/blue */
    --primary-dark: #0099ff;        /* Darker blue */
    --accent-color: #ff3366;        /* Pink/magenta */
    --bg-dark: #0a0e27;             /* Dark background */
    --bg-darker: #050810;           /* Darker background */
    --text-light: #ffffff;          /* Light text */
    --text-muted: #b0b8d4;          /* Muted text */
}
```

**Popular color schemes:**

Purple & Pink:
```css
--primary-color: #a855f7;
--accent-color: #ec4899;
```

Green & Teal:
```css
--primary-color: #10b981;
--accent-color: #06b6d4;
```

Orange & Red:
```css
--primary-color: #f97316;
--accent-color: #ef4444;
```

### Update Text Content

Search and replace these placeholder texts:

- **"Aks Prasad"** → Your name
- **"Gamer X Magician"** → Your brand/tagline
- Hero title, subtitle, descriptions
- Service descriptions
- About section
- Process steps

### Change Fonts

In `styles.css`, update the `font-family`:

```css
body {
    font-family: 'Poppins', sans-serif;  /* Change this line */
}
```

Add the font from Google Fonts in `index.html` head:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800;900&display=swap" rel="stylesheet">
```

## Performance Tips

1. **Optimize Images**
   - Use tools like TinyPNG or ImageOptim
   - Export as WebP for better compression
   - Keep images under 200KB each

2. **Lazy Load Images**
   - Add `loading="lazy"` to img tags
   - Use the provided `data-src` pattern in script.js

3. **Minify CSS/JS** (optional)
   - Use [Minify](https://www.minifycode.com/) for production

4. **CDN Delivery** (optional)
   - Use Cloudflare for global fast delivery
   - Free tier available

## SEO Optimization

1. **Update Meta Tags** in `index.html`:
```html
<meta name="description" content="Your description here">
<meta name="keywords" content="video editing, motion graphics, youtube">
<meta property="og:title" content="Your Title">
<meta property="og:description" content="Your description">
```

2. **Add Schema Markup** (optional):
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Aks Prasad",
  "description": "Video Editing & Motion Graphics"
}
</script>
```

3. **Submit to Search Engines**
   - Google Search Console
   - Bing Webmaster Tools

## Analytics Setup

### Google Analytics

Add this before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your Google Analytics ID.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Navigation not working on mobile
- Check that `hamburger` and `navMenu` IDs exist in HTML
- Ensure `styles.css` and `script.js` are linked correctly

### Animations look choppy
- Check browser performance (Console for errors)
- Disable browser extensions
- Test in incognito/private mode

### Videos not playing
- Ensure video is properly embedded (YouTube/Vimeo)
- Check CORS policies for self-hosted videos
- Use HTTPS for embedded content

### Colors not changing
- Clear browser cache (Ctrl+Shift+Del)
- Check CSS variable syntax
- Ensure no conflicting CSS

## Maintenance

### Regular Updates

1. **Update portfolio** - Add new projects quarterly
2. **Refresh testimonials** - Keep recent client feedback
3. **Monitor performance** - Use PageSpeed Insights
4. **Check links** - Ensure all external links work
5. **Update contact info** - If you move platforms

### Backup

Keep a local backup of:
- All HTML/CSS/JS files
- Portfolio images/videos
- Contact information

## Advanced Features (Optional)

### Add Contact Form

Replace the contact buttons with a form service:

1. **Formspree** (Free): https://formspree.io
2. **Basin** (Free): https://usebasin.com
3. **Netlify Forms** (Free with Netlify)

### Add Blog Section

Create a `blog.html` page linking from navigation.

### Add Dark/Light Mode Toggle

Add this to `styles.css`:

```css
body.light-mode {
    --bg-dark: #ffffff;
    --text-light: #000000;
    /* etc */
}
```

## License

This portfolio template is yours to customize and use. 

## Support & Questions

For customization questions:
1. Check the browser console for errors (F12)
2. Verify all file links are correct
3. Test in a fresh browser/incognito mode
4. Check HTML syntax (use validator.w3.org)

---

**Made with ❤️ for creative professionals**

Good luck with your portfolio! 🎬✨
