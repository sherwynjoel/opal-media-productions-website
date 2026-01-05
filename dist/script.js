// OPAL - Media Production & Digital Marketing
// Interactive JavaScript

// Smooth Scroll Navigation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle anchor links
            if (href && href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    // Smooth scroll to section
                    const navbarHeight = 80;
                    const offsetTop = targetSection.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: Math.max(0, offsetTop),
                        behavior: 'smooth'
                    });
                    
                    // Update active nav link
                    navLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                } else {
                    console.warn('Target section not found:', targetId);
                }
            }
        });
    });
    
    // Also handle contact button specifically
    const contactBtn = document.querySelector('.btn-nav[href="#contact"]');
    if (contactBtn) {
        contactBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                const navbarHeight = 80;
                const offsetTop = contactSection.offsetTop - navbarHeight;
                window.scrollTo({
                    top: Math.max(0, offsetTop),
                    behavior: 'smooth'
                });
                
                // Update active nav link
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    }
});

// Generate floating glyph particles (+ / o) in the "Let's Get In Touch" section
document.addEventListener('DOMContentLoaded', function() {
    const layer = document.querySelector('.get-in-touch .floating-glyphs');
    if (!layer) return;

    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Clear any server-rendered fallback
    layer.innerHTML = '';

    const isSmall = window.matchMedia && window.matchMedia('(max-width: 768px)').matches;
    // Still render particles when reduced motion is enabled; CSS will disable animation.
    const count = isSmall ? 28 : 46;
    const glyphs = ['+', 'o'];

    for (let i = 0; i < count; i++) {
        const el = document.createElement('span');
        el.className = 'glyph';
        el.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];

        // keep particles away from the exact center title area a bit
        // by choosing x/y from bands instead of full random
        const xBands = [10, 22, 34, 66, 78, 90];
        const yBands = [12, 22, 32, 58, 70, 82];
        const x = xBands[Math.floor(Math.random() * xBands.length)] + (Math.random() * 8 - 4);
        const y = yBands[Math.floor(Math.random() * yBands.length)] + (Math.random() * 8 - 4);

        const size = 18 + Math.random() * (isSmall ? 10 : 14); // 18–28/32px
        const opacity = 0.28 + Math.random() * 0.42; // 0.28–0.7
        const dx = (Math.random() * 2 - 1) * (isSmall ? 18 : 28); // px
        const dy = (Math.random() * 2 - 1) * (isSmall ? 18 : 30); // px
        const dur = 8 + Math.random() * 10; // 8–18s
        const delay = -(Math.random() * 10); // negative start offset
        const tw = 2.4 + Math.random() * 3.6; // 2.4–6s
        const twd = -(Math.random() * 6);
        const r0 = Math.floor(Math.random() * 360);

        const color = 'rgba(255, 255, 255, 0.6)';

        el.style.left = `${x}%`;
        el.style.top = `${y}%`;
        el.style.setProperty('--size', `${size.toFixed(1)}px`);
        el.style.setProperty('--o', opacity.toFixed(2));
        el.style.setProperty('--dx', `${dx.toFixed(1)}px`);
        el.style.setProperty('--dy', `${dy.toFixed(1)}px`);
        el.style.setProperty('--dur', `${dur.toFixed(2)}s`);
        el.style.setProperty('--delay', `${delay.toFixed(2)}s`);
        el.style.setProperty('--tw', `${tw.toFixed(2)}s`);
        el.style.setProperty('--twd', `${twd.toFixed(2)}s`);
        el.style.setProperty('--r0', `${r0}deg`);
        el.style.setProperty('--c', color);

        if (prefersReducedMotion) {
            el.style.animation = 'none';
            el.style.opacity = '0.35';
        }

        layer.appendChild(el);
    }
});

// Generate floating particles and geometric shapes in the Hero section
document.addEventListener('DOMContentLoaded', function() {
    const heroParticleLayer = document.querySelector('.hero .hero-radial-gradient');
    if (!heroParticleLayer) return;

    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isSmall = window.matchMedia && window.matchMedia('(max-width: 768px)').matches;
    const particleCount = isSmall ? 20 : 35;
    const glyphs = ['+', 'o', '·', '×', '◇'];

    // Create text particles
    for (let i = 0; i < particleCount; i++) {
        const el = document.createElement('span');
        el.className = 'glyph';
        el.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];

        // Distribute particles across the hero section
        const x = 5 + Math.random() * 90;
        const y = 10 + Math.random() * 80;

        const size = 14 + Math.random() * 16;
        const opacity = 0.2 + Math.random() * 0.4;
        const dx = (Math.random() * 2 - 1) * 30;
        const dy = (Math.random() * 2 - 1) * 30;
        const dur = 10 + Math.random() * 15;
        const delay = -(Math.random() * 15);
        const tw = 3 + Math.random() * 5;
        const twd = -(Math.random() * 6);
        const r0 = Math.floor(Math.random() * 360);

        const color = 'rgba(255, 255, 255, 0.5)';

        el.style.left = `${x}%`;
        el.style.top = `${y}%`;
        el.style.setProperty('--size', `${size.toFixed(1)}px`);
        el.style.setProperty('--o', opacity.toFixed(2));
        el.style.setProperty('--dx', `${dx.toFixed(1)}px`);
        el.style.setProperty('--dy', `${dy.toFixed(1)}px`);
        el.style.setProperty('--dur', `${dur.toFixed(2)}s`);
        el.style.setProperty('--delay', `${delay.toFixed(2)}s`);
        el.style.setProperty('--tw', `${tw.toFixed(2)}s`);
        el.style.setProperty('--twd', `${twd.toFixed(2)}s`);
        el.style.setProperty('--r0', `${r0}deg`);
        el.style.setProperty('--c', color);

        if (prefersReducedMotion) {
            el.style.animation = 'none';
            el.style.opacity = '0.25';
        }

        heroParticleLayer.appendChild(el);
    }

    // Create geometric shapes (circles and squares)
    const shapeCount = isSmall ? 8 : 12;
    for (let i = 0; i < shapeCount; i++) {
        const shape = document.createElement('div');
        shape.className = 'hero-shape';

        const isCircle = Math.random() > 0.5;
        if (isCircle) {
            shape.classList.add('hero-shape-circle');
        } else {
            shape.classList.add('hero-shape-square');
        }

        const x = 5 + Math.random() * 90;
        const y = 10 + Math.random() * 80;
        const size = 20 + Math.random() * 40;
        const opacity = 0.05 + Math.random() * 0.15;
        const dur = 15 + Math.random() * 20;
        const delay = -(Math.random() * 20);

        shape.style.left = `${x}%`;
        shape.style.top = `${y}%`;
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        shape.style.opacity = opacity;
        shape.style.animationDuration = `${dur}s`;
        shape.style.animationDelay = `${delay}s`;

        if (prefersReducedMotion) {
            shape.style.animation = 'none';
            shape.style.opacity = '0.05';
        }

        heroParticleLayer.appendChild(shape);
    }

    // Create pulsing dots
    const dotCount = isSmall ? 5 : 10;
    for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('div');
        dot.className = 'hero-dot';

        const x = 10 + Math.random() * 80;
        const y = 15 + Math.random() * 70;
        const size = 3 + Math.random() * 5;
        const dur = 2 + Math.random() * 4;
        const delay = -(Math.random() * 6);

        dot.style.left = `${x}%`;
        dot.style.top = `${y}%`;
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.animationDuration = `${dur}s`;
        dot.style.animationDelay = `${delay}s`;

        if (prefersReducedMotion) {
            dot.style.animation = 'none';
            dot.style.opacity = '0.3';
        }

        heroParticleLayer.appendChild(dot);
    }
});

// Enhanced Navbar Scroll Effect with Smooth Transition
let lastScroll = 0;
let ticking = false;

function updateNavbar() {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Keep navbar centered - preserve translateX(-50%) for centering
    navbar.style.transform = 'translateX(-50%)';
    
    // Update active nav link based on scroll position
    const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const rect = section.getBoundingClientRect();
            const offsetTop = rect.top + window.pageYOffset;
            const offsetBottom = offsetTop + rect.height;
            
            if (currentScroll >= offsetTop - 100 && currentScroll < offsetBottom - 100) {
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        }
    });
    
    lastScroll = currentScroll;
    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
    }
}, { passive: true });

// Scroll Progress Indicator
function updateScrollProgress() {
    const scrollProgress = document.querySelector('.scroll-progress');
    if (!scrollProgress) return;
    
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
}

window.addEventListener('scroll', updateScrollProgress, { passive: true });
updateScrollProgress();


// Parallax Scrolling Effect for Expertise Section
let lastScrollTop = 0;
let parallaxTicking = false;

function updateParallax() {
    const expertiseSection = document.querySelector('.expertise');
    const parallaxBg = document.querySelector('.expertise-parallax-bg');
    
    if (expertiseSection && parallaxBg) {
        const rect = expertiseSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Check if section is in viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
            // Calculate how much the section has scrolled
            const sectionTop = rect.top + scrollTop;
            const currentScroll = scrollTop;
            const sectionStart = sectionTop - windowHeight;
            const sectionEnd = sectionTop + rect.height;
            
            // Calculate scroll progress (0 to 1)
            let scrollProgress = 0;
            if (currentScroll > sectionStart && currentScroll < sectionEnd) {
                scrollProgress = (currentScroll - sectionStart) / (sectionEnd - sectionStart);
            } else if (currentScroll >= sectionEnd) {
                scrollProgress = 1;
            }
            
            // Apply parallax effect - background moves at different speed
            // Negative value makes it move slower (upward as you scroll down)
            const parallaxOffset = scrollProgress * 200 - 100;
            parallaxBg.style.transform = `translateY(${parallaxOffset * 0.3}px)`;
        }
    }
    
    parallaxTicking = false;
}

window.addEventListener('scroll', function() {
    if (!parallaxTicking) {
        window.requestAnimationFrame(updateParallax);
        parallaxTicking = true;
    }
}, { passive: true });

// Initial call
updateParallax();

// Portfolio Filter
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filterValue === 'all') {
                    item.classList.remove('hidden');
                } else {
                    if (item.getAttribute('data-category') === filterValue) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                }
            });
        });
    });
});

// Enhanced Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Universal Scroll Animation Observer
const scrollAnimationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            scrollAnimationObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Apply scroll animations to elements
document.addEventListener('DOMContentLoaded', function() {
    // Hero section elements
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-cta');
    heroElements.forEach((el, index) => {
        el.classList.add('fade-in-up');
        setTimeout(() => {
            scrollAnimationObserver.observe(el);
        }, index * 100);
    });
    
    // Disable animations for section titles and feature items to ensure visibility on deployment
    // Value cards with stagger
    const valueCards = document.querySelectorAll('.value-card');
    valueCards.forEach((card, index) => {
        card.classList.add('scale-in');
        setTimeout(() => {
            scrollAnimationObserver.observe(card);
        }, index * 100);
    });
    
    // Portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach((item, index) => {
        item.classList.add('fade-in-up');
        setTimeout(() => {
            scrollAnimationObserver.observe(item);
        }, index * 50);
    });
    
    // Service content sections
    const serviceContents = document.querySelectorAll('.service-content');
    serviceContents.forEach((content, index) => {
        if (index % 2 === 0) {
            content.classList.add('slide-in-left');
        } else {
            content.classList.add('slide-in-right');
        }
        scrollAnimationObserver.observe(content);
    });
    
    // Service images
    const serviceImages = document.querySelectorAll('.service-image');
    serviceImages.forEach((image, index) => {
        if (index % 2 === 0) {
            image.classList.add('slide-in-right');
        } else {
            image.classList.add('slide-in-left');
        }
        scrollAnimationObserver.observe(image);
    });
    
    // Contact form elements
    const contactElements = document.querySelectorAll('.contact-info, .contact-form');
    contactElements.forEach((el, index) => {
        el.classList.add('fade-in-up');
        setTimeout(() => {
            scrollAnimationObserver.observe(el);
        }, index * 150);
    });
    
    // Footer elements
    const footerSections = document.querySelectorAll('.footer-section');
    footerSections.forEach((section, index) => {
        section.classList.add('fade-in');
        setTimeout(() => {
            scrollAnimationObserver.observe(section);
        }, index * 100);
    });
    
    // CTA section
    const ctaContent = document.querySelector('.cta-content');
    if (ctaContent) {
        ctaContent.classList.add('fade-in-up');
        scrollAnimationObserver.observe(ctaContent);
    }
    
    // Get in Touch section
    const getInTouchContent = document.querySelector('.get-in-touch-content');
    if (getInTouchContent) {
        getInTouchContent.classList.add('fade-in-up');
        scrollAnimationObserver.observe(getInTouchContent);
    }
});

// Contact Form Validation and Submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn ? submitBtn.textContent : '';
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending...';
            }
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value.trim();
            const honeypotEl = contactForm.querySelector('input[name="website"]');
            const website = honeypotEl ? (honeypotEl.value || '') : '';
            
            // Basic validation
            if (!name || !email || !service || !message) {
                alert('Please fill in all required fields.');
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalBtnText;
                }
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalBtnText;
                }
                return;
            }
            
            const formData = {
                name: name,
                email: email,
                phone: phone,
                service: service,
                message: message,
                website: website
            };
            
            // Send to Hostinger PHP handler (works after upload).
            // Note: this won't work on the local python server (no PHP).
            fetch(contactForm.getAttribute('action') || 'contact-submit.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            .then(async (response) => {
                const data = await response.json().catch(() => ({}));
                if (!response.ok || !data.ok) {
                    const msg = (data && data.error) ? data.error : 'Sorry, there was an error sending your message.';
                    throw new Error(msg);
                }
                alert('Thank you for your message! We\'ll get back to you within 24 hours.');
                contactForm.reset();
            })
            .catch((err) => {
                // Fallback: allow normal form submit (non-AJAX) if fetch fails
                // This will work on Hostinger even if JS fetch is blocked.
                console.warn('Contact submit failed, falling back to form post:', err);
                try {
                    contactForm.submit();
                } catch (_) {
                    alert('Sorry, there was an error sending your message. Please try again.');
                }
            })
            .finally(() => {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalBtnText;
                }
            });
        });
    }
});

// Intersection Observer for Fade-in Animations with Stagger Effect
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

// Observer for expertise cards with stagger - matches Framer Motion whileInView behavior
let expertiseObserver;
let expertiseCardsArray = [];

function initExpertiseAnimations() {
    const expertiseCards = document.querySelectorAll('.expertise-card');
    expertiseCardsArray = Array.from(expertiseCards);
    
    if (expertiseCardsArray.length === 0) return;
    
    expertiseObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animate-in')) {
                // Get the index of the card
                const index = expertiseCardsArray.indexOf(entry.target);
                
                // Framer Motion stagger: each child animates with 0.1s delay
                // Add animate-in class - CSS handles the stagger delay
                entry.target.classList.add('animate-in');
                
                // Unobserve after animation starts
                expertiseObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% visible (Framer Motion default)
        rootMargin: '0px 0px -100px 0px' // Start animation slightly before fully in view
    });
    
    // Observe all cards
    expertiseCardsArray.forEach(card => {
        expertiseObserver.observe(card);
    });
}

// Observer for other elements (without stagger)
const generalObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    // Expertise cards - with stagger effect
    const expertiseCards = document.querySelectorAll('.expertise-card');
    
    if (expertiseCards.length > 0) {
        // First, hide cards for animation (add animate-ready class)
        expertiseCards.forEach((card) => {
            card.classList.add('animate-ready');
        });
        
        // Initialize the observer
        initExpertiseAnimations();
        
        // Also manually check if cards are already visible (for initial load)
        function manuallyCheckCards() {
            expertiseCards.forEach((card) => {
                if (!card.classList.contains('animate-in')) {
                    const rect = card.getBoundingClientRect();
                    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                    const isVisible = rect.top < windowHeight && rect.bottom > 0;
                    
                    if (isVisible) {
                        // Add animate-in - CSS handles stagger delay
                        card.classList.add('animate-in');
                    }
                }
            });
        }
        
        // Check after a short delay (for cards already in viewport on load)
        setTimeout(manuallyCheckCards, 300);
        
        // Fallback: show all cards after 1.5 seconds if still hidden
        setTimeout(() => {
            expertiseCards.forEach((card) => {
                if (!card.classList.contains('animate-in')) {
                    card.classList.add('animate-in');
                }
            });
        }, 1500);
    }
    
    // Other elements - without stagger (exclude feature-item to avoid hiding Why Choose Us)
    const animateElements = document.querySelectorAll('.value-card, .portfolio-item, .service-content');
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        generalObserver.observe(element);
    });
});

// Add active class to current page in navigation
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// Achievement Counter Animation
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    const isAnimated = element.hasAttribute('data-animated');
    
    if (isAnimated) return; // Don't animate if already animated
    
    element.setAttribute('data-animated', 'true');
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// Intersection Observer for Achievement Counter
const achievementObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const numberElement = entry.target;
            const target = parseInt(numberElement.getAttribute('data-target'));
            
            if (target && !numberElement.hasAttribute('data-animated')) {
                animateCounter(numberElement, target, 2000);
            }
            
            achievementObserver.unobserve(numberElement);
        }
    });
}, {
    threshold: 0.5,
    rootMargin: '0px'
});

// Initialize Achievement Counter
document.addEventListener('DOMContentLoaded', function() {
    const achievementNumbers = document.querySelectorAll('.achievement-number .number');
    
    achievementNumbers.forEach(number => {
        achievementObserver.observe(number);
    });
});

