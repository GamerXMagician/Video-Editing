/* ============================================
   AKSprasad PORTFOLIO - JAVASCRIPT
   Video Editing & Motion Graphics
   ============================================ */

// ============================================
// MOBILE MENU TOGGLE
// ============================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ============================================
// NAVBAR BACKGROUND ON SCROLL
// ============================================

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// ============================================
// PORTFOLIO FILTERING
// ============================================

const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));

        // Add active class to clicked button
        btn.classList.add('active');

        // Get the filter value
        const filterValue = btn.getAttribute('data-filter');

        // Filter portfolio items
        portfolioItems.forEach(item => {
            const category = item.getAttribute('data-category');

            if (filterValue === 'all' || category === filterValue) {
                item.classList.remove('hidden');
                item.style.animation = 'fadeIn 0.6s ease-out';
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// ============================================
// SMOOTH SCROLL BEHAVIOR
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
});

// ============================================
// VIDEO PLAYER INTERACTIONS
// ============================================

const playBtns = document.querySelectorAll('.play-btn');
const videoPlaceholder = document.querySelector('.video-placeholder');

playBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Video player functionality. Add your video embed or player here.');
    });
});

// Add click handler to video player placeholder
const videoPlayer = document.querySelector('.video-player');
if (videoPlayer && videoPlaceholder) {
    videoPlayer.addEventListener('click', () => {
        alert('Add your showreel video here. You can embed a YouTube video, Vimeo, or upload directly.');
    });
}

// ============================================
// CONTACT BUTTON ACTIONS
// ============================================

const contactBtns = document.querySelectorAll('[href*="mailto:"], [href*="wa.me"]');

contactBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Update these with your actual contact info
        const email = 'your-email@example.com';
        const whatsappNumber = 'your-number'; // Format: country code + number without +

        if (btn.getAttribute('href').includes('mailto:')) {
            btn.href = `mailto:${email}`;
        } else if (btn.getAttribute('href').includes('wa.me')) {
            btn.href = `https://wa.me/${whatsappNumber}`;
        }
    });
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Lazy load images when they come into view
const images = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
            observer.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// ============================================
// ACCESSIBILITY IMPROVEMENTS
// ============================================

// Add keyboard navigation for buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            btn.click();
        }
    });
});

// ============================================
// FORM & CTA TRACKING
// ============================================

// Track button clicks (for analytics integration later)
function trackEvent(eventName, eventData = {}) {
    // console.log(`Event: ${eventName}`, eventData);
    // Send to analytics service here (Google Analytics, Mixpanel, etc.)
}

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const btnText = btn.textContent.trim();
        trackEvent('button_click', { button: btnText });
    });
});

// ============================================
// DYNAMIC YEAR IN FOOTER
// ============================================

const yearElements = document.querySelectorAll('.footer');
yearElements.forEach(footer => {
    const copyrightText = footer.innerHTML;
    const currentYear = new Date().getFullYear();
    if (copyrightText.includes('2024')) {
        footer.innerHTML = copyrightText.replace('2024', currentYear.toString());
    }
});

// ============================================
// RESPONSIVE ADJUSTMENTS
// ============================================

// Adjust animation timing for mobile
if (window.innerWidth < 768) {
    document.querySelectorAll('[style*="animation-delay"]').forEach(el => {
        el.style.animationDelay = '0s';
    });
}

// ============================================
// SCROLL TO TOP ON PAGE LOAD
// ============================================

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// ============================================
// PRELOAD CRITICAL IMAGES
// ============================================

const link = document.createElement('link');
link.rel = 'preload';
link.as = 'image';

// Add performance optimizations
document.addEventListener('DOMContentLoaded', () => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        document.documentElement.style.scrollBehavior = 'auto';
    }
});

// ============================================
// MODAL FOR VIDEO PLAYBACK (Optional)
// ============================================

function createVideoModal(videoUrl) {
    const modal = document.createElement('div');
    modal.className = 'video-modal';
    modal.innerHTML = `
        <div class="video-modal-content">
            <button class="modal-close">&times;</button>
            <iframe
                src="${videoUrl}"
                width="100%"
                height="100%"
                frameborder="0"
                allowfullscreen>
            </iframe>
        </div>
    `;

    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.remove();
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });

    document.body.appendChild(modal);
}

// ============================================
// ENHANCE FORM INTERACTIVITY
// ============================================

// Add focus states to interactive elements
const interactiveElements = document.querySelectorAll('a, button, input, textarea');

interactiveElements.forEach(el => {
    el.addEventListener('focus', function() {
        this.style.outline = `2px solid var(--primary-color)`;
        this.style.outlineOffset = '2px';
    });

    el.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

console.log('Portfolio site loaded successfully!');
