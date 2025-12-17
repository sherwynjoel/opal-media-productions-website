// OPAL - Media Production & Digital Marketing
// Interactive JavaScript

// Smooth Scroll Navigation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle anchor links
            if (href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    // Smooth scroll to section
                    const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Update active nav link
                    navLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                }
            }
        });
    });
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
    
    // Hide/show navbar on scroll (optional - can be removed if not needed)
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
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
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value.trim();
            
            // Basic validation
            if (!name || !email || !service || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Form submission (you can integrate with your backend here)
            // For now, we'll just show a success message
            const formData = {
                name: name,
                email: email,
                phone: phone,
                service: service,
                message: message
            };
            
            console.log('Form submitted:', formData);
            
            // Show success message
            alert('Thank you for your message! We\'ll get back to you within 24 hours.');
            
            // Reset form
            contactForm.reset();
            
            // In a real application, you would send this data to your server:
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(formData)
            // })
            // .then(response => response.json())
            // .then(data => {
            //     alert('Thank you for your message! We\'ll get back to you within 24 hours.');
            //     contactForm.reset();
            // })
            // .catch(error => {
            //     alert('Sorry, there was an error sending your message. Please try again.');
            // });
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

