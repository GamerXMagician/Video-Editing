# CUSTOMIZATION QUICK START

This file shows you exactly where to find and update key information in your portfolio.

## 1. PERSONAL INFORMATION

**File:** `index.html`

### Name & Branding
```
Line 27 (Title): <title>Aks Prasad | Video Editing & Motion Graphics</title>
Line 28 (Description): <meta name="description" content="...">
Line 46 (Logo): <span class="logo-text">Aks Prasad</span>
Line 47 (Brand): <span class="logo-subtitle">Gamer X Magician</span>
```

**TO UPDATE:**
- Replace "Aks Prasad" with your name
- Replace "Gamer X Magician" with your brand tagline
- Update the meta description

### Email & WhatsApp
```
Line 735: <a href="mailto:your-email@example.com"
Line 736: <a href="https://wa.me/your-number"
Line 757-765: Social media links
```

**TO UPDATE:**
- Change `your-email@example.com` to your actual email
- Change `your-number` to your WhatsApp number (format: country code + number, e.g., 919876543210)
- Update Instagram, YouTube, and email links

### About Section
```
Line 617-622: About content
```

**TO UPDATE:**
- Replace the placeholder "I'm Aks Prasad..." text with your actual bio

---

## 2. PORTFOLIO PROJECTS

**File:** `index.html`

**Location:** Lines 390-550 (Portfolio Grid section)

### Add/Update Project

```html
<div class="portfolio-item" data-category="editing">
    <div class="portfolio-image">
        <!-- Add your image or video here -->
        <img src="your-image.jpg" alt="Project description">
    </div>
    <div class="portfolio-info">
        <h3>Project Title</h3>
        <p class="category">Video Editing</p>
        <p class="description">Brief description of the project.</p>
        <div class="tools">
            <span class="tool">Premiere Pro</span>
            <span class="tool">After Effects</span>
        </div>
    </div>
</div>
```

**TO UPDATE:**
1. Replace `your-image.jpg` with your actual image/video file
2. Update project title
3. Choose category: `editing`, `motion`, `social`, `gaming`, or `promo`
4. Add project description
5. List tools used

**Number of projects:** You have 6 placeholder projects. Add more by copying the entire `portfolio-item` div.

---

## 3. TESTIMONIALS

**File:** `index.html`

**Location:** Lines 580-615 (Testimonials section)

### Add/Update Testimonial

```html
<div class="testimonial-card">
    <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
    <p class="testimonial-text">
        "Actual testimonial from your client."
    </p>
    <div class="testimonial-author">
        <div class="author-name">Client Name</div>
        <div class="author-role">Company / Project</div>
    </div>
</div>
```

**TO UPDATE:**
1. Change star rating (use ⭐ emoji)
2. Replace testimonial text
3. Add client name
4. Add company/project type

---

## 4. SHOWREEL VIDEO

**File:** `index.html`

**Location:** Lines 195-245 (Showreel section)

### Embed YouTube Video

Replace the placeholder with:

```html
<iframe 
    src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=0"
    width="100%" 
    height="100%" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>
```

**TO UPDATE:**
- Replace `YOUR_VIDEO_ID` with your YouTube video ID
- Find video ID: Open YouTube video → ID is in URL after `v=`

### Embed Vimeo Video

```html
<iframe 
    src="https://player.vimeo.com/video/YOUR_VIDEO_ID"
    width="100%" 
    height="100%" 
    frameborder="0" 
    allowfullscreen>
</iframe>
```

### Self-hosted Video

```html
<video width="100%" height="100%" controls poster="thumbnail.jpg">
    <source src="your-video.mp4" type="video/mp4">
</video>
```

---

## 5. COLORS & BRANDING

**File:** `styles.css`

**Location:** Lines 1-15 (CSS Variables)

```css
:root {
    --primary-color: #00d4ff;      /* Main accent color */
    --primary-dark: #0099ff;        /* Darker accent */
    --accent-color: #ff3366;        /* Secondary accent */
    --bg-dark: #0a0e27;             /* Dark background */
    --bg-darker: #050810;           /* Very dark background */
    --text-light: #ffffff;          /* Light text */
    --text-muted: #b0b8d4;          /* Muted text */
}
```

### Color Scheme Presets

**Modern Cyan (Current):**
```css
--primary-color: #00d4ff;
--accent-color: #ff3366;
```

**Purple & Pink:**
```css
--primary-color: #a855f7;
--accent-color: #ec4899;
```

**Green & Teal:**
```css
--primary-color: #10b981;
--accent-color: #06b6d4;
```

**Orange & Red:**
```css
--primary-color: #f97316;
--accent-color: #ef4444;
```

**Blue & Violet:**
```css
--primary-color: #3b82f6;
--accent-color: #8b5cf6;
```

**TO UPDATE:**
1. Copy your chosen preset
2. Replace the values in `:root`
3. Save and refresh browser

---

## 6. FONTS

**File:** `index.html` (for adding font) + `styles.css` (for changing)

### Add Custom Google Font

In `index.html`, add before `</head>` (around line 13):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;600;700;800;900&display=swap" rel="stylesheet">
```

### Change Font Family

In `styles.css`, find line 49:

```css
body {
    font-family: 'YOUR_FONT', sans-serif;
}
```

**Popular font combinations:**
- Poppins (modern, clean)
- Inter (minimal, professional)
- Playfair Display (elegant, premium)
- Space Grotesk (tech, bold)
- Outfit (contemporary, geometric)

---

## 7. SERVICES

**File:** `index.html`

**Location:** Lines 260-305 (Services section)

Current services are pre-filled. To customize:

```html
<div class="service-card">
    <div class="service-icon">🎬</div>  <!-- Change emoji -->
    <h3>Service Name</h3>
    <p>Service description goes here.</p>
</div>
```

**TO UPDATE:**
1. Change emoji to represent the service
2. Update service name
3. Update service description

---

## 8. PROCESS STEPS

**File:** `index.html`

**Location:** Lines 540-575 (Process section)

```html
<div class="process-step">
    <div class="step-number">01</div>
    <div class="step-title">DISCOVER</div>
    <div class="step-description">Description here.</div>
</div>
```

**TO UPDATE:**
1. Keep numbers (01, 02, 03, 04) or change to match your process
2. Update step titles
3. Update descriptions

---

## 9. SOCIAL MEDIA LINKS

**File:** `index.html`

**Location:** Lines 757-800 (Contact section social icons)

```html
<a href="https://instagram.com/your-handle" target="_blank" class="social-icon" title="Instagram">
<a href="https://youtube.com/@your-channel" target="_blank" class="social-icon" title="YouTube">
<a href="https://wa.me/your-number" target="_blank" class="social-icon" title="WhatsApp">
<a href="mailto:your-email@example.com" class="social-icon" title="Email">
```

**TO UPDATE:**
- Instagram: `instagram.com/your-handle`
- YouTube: `youtube.com/@your-channel`
- WhatsApp: `wa.me/country-code + number` (e.g., `wa.me/919876543210`)
- Email: `mailto:your-email@example.com`

---

## 10. QUICK UPDATES CHECKLIST

Use this checklist to track your customizations:

- [ ] Update name and branding
- [ ] Add email and WhatsApp contact
- [ ] Update social media links
- [ ] Write about section
- [ ] Add portfolio projects (at least 3)
- [ ] Add testimonials (at least 2)
- [ ] Add showreel video
- [ ] Choose color scheme
- [ ] Update hero title/subtitle
- [ ] Review all text for typos
- [ ] Test on mobile
- [ ] Test all links work

---

## 11. FILE STRUCTURE REMINDER

Your project folder should look like:

```
Video Editing Portfoilo/
├── index.html
├── styles.css
├── script.js
├── README.md
├── CUSTOMIZATION.md (this file)
└── portfolio-images/
    ├── project1.jpg
    ├── project2.jpg
    └── ...
```

**Organize your images:**
1. Create a `portfolio-images` folder
2. Save all project images there
3. Reference them as `portfolio-images/image-name.jpg` in HTML

---

## 12. COMMON ISSUES & FIXES

### Images not showing
- Check file path is correct
- Use forward slashes: `portfolio-images/image.jpg`
- Ensure image file exists in folder
- Try using absolute URL first to test

### Links not working
- Check email format: `mailto:email@example.com`
- Check WhatsApp format: `wa.me/country-code + number`
- Use `target="_blank"` to open in new tab

### Colors not changing
- Save CSS file and hard refresh (Ctrl+Shift+R)
- Clear browser cache
- Check CSS variable names are spelled correctly
- Use valid hex colors (#RRGGBB)

### Videos not playing
- Check YouTube/Vimeo video is public/shared
- Verify video ID is correct
- Test on HTTPS (YouTube requires it)
- Use official embed codes from platforms

---

## 13. NEXT STEPS

1. **Update all personal information**
2. **Add your portfolio projects**
3. **Choose your color scheme**
4. **Test on mobile**
5. **Deploy online** (see README.md for options)
6. **Share with potential clients!**

---

**Questions?** Check README.md for more details or troubleshooting.

Good luck! 🎬✨
