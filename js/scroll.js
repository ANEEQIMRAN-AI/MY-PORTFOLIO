/* ============================================
   SCROLL ANIMATIONS MODULE
   ============================================ */

// This file handles scroll-based animations and reveals

document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initParallaxEffects();
});

/**
 * Initialize scroll reveal animations
 */
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add stagger delay for multiple elements
                const delay = index * 50;
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, delay);

                // Optional: Stop observing after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements that should be revealed
    const revealElements = document.querySelectorAll(
        '.project-card, .research-item, .skill-group, .about-bio, .about-skills'
    );

    revealElements.forEach(element => {
        element.classList.add('reveal');
        observer.observe(element);
    });
}

/**
 * Initialize parallax scroll effects
 */
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    if (parallaxElements.length === 0) return;

    window.addEventListener('scroll', () => {
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-parallax') || 0.5;
            const yPos = window.scrollY * speed;
            element.style.transform = `translateY(${yPos}px)`;
        });
    }, { passive: true });
}

/**
 * Animate counter numbers on scroll
 * @param {HTMLElement} element - Counter element
 * @param {number} target - Target number
 * @param {number} duration - Animation duration in milliseconds
 */
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

/**
 * Trigger counter animations when in view
 */
function initCounterAnimations() {
    const counters = document.querySelectorAll('[data-counter]');

    if (counters.length === 0) return;

    const observerOptions = {
        threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                const target = parseInt(entry.target.getAttribute('data-counter'));
                animateCounter(entry.target, target);
                entry.target.classList.add('counted');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

// Initialize counter animations
document.addEventListener('DOMContentLoaded', initCounterAnimations);

/**
 * Add fade-in animation to images as they load
 */
function initImageAnimations() {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });

        // If image is already cached and loaded
        if (img.complete) {
            img.classList.add('loaded');
        }
    });
}

document.addEventListener('DOMContentLoaded', initImageAnimations);

/**
 * Animate text on scroll
 */
function initTextAnimations() {
    const textElements = document.querySelectorAll('[data-animate-text]');

    if (textElements.length === 0) return;

    const observerOptions = {
        threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateText(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    textElements.forEach(element => observer.observe(element));
}

/**
 * Animate text character by character
 * @param {HTMLElement} element - Text element
 */
function animateText(element) {
    const text = element.textContent;
    element.textContent = '';

    let index = 0;
    const speed = 30; // milliseconds per character

    const interval = setInterval(() => {
        if (index < text.length) {
            element.textContent += text[index];
            index++;
        } else {
            clearInterval(interval);
        }
    }, speed);
}

document.addEventListener('DOMContentLoaded', initTextAnimations);

// Export functions for use in other modules
window.scrollAnimations = {
    animateCounter,
    animateText,
    initScrollReveal,
    initParallaxEffects,
};

/* ============================================
   NAVIGATION MODULE
   ============================================ */

// This file is loaded after main.js and provides
// additional navigation functionality

document.addEventListener('DOMContentLoaded', () => {
    initNavbarScroll();
    initMobileMenuClose();
});

/**
 * Handle navbar styling on scroll
 */
function initNavbarScroll() {
    const navbar = document.querySelector('#navbar');
    if (!navbar) return;

    const scrollThreshold = 50;
    let lastScrollY = 0;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > scrollThreshold) {
            navbar.style.borderBottomColor = 'rgba(42, 49, 66, 0.5)';
            navbar.style.backdropFilter = 'blur(15px)';
        } else {
            navbar.style.borderBottomColor = 'var(--color-border)';
            navbar.style.backdropFilter = 'blur(10px)';
        }

        lastScrollY = currentScrollY;
    }, { passive: true });
}

/**
 * Close mobile menu when clicking outside
 */
function initMobileMenuClose() {
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#navMenu');
    const navbar = document.querySelector('#navbar');

    if (!hamburger || !navMenu) return;

    document.addEventListener('click', (e) => {
        const isClickInsideNav = navbar.contains(e.target);
        const isMenuOpen = navMenu.classList.contains('active');

        if (!isClickInsideNav && isMenuOpen) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

/**
 * Scroll to section with offset for fixed navbar
 * @param {string} sectionId - ID of section to scroll to
 */
function scrollToSection(sectionId) {
    const section = document.querySelector(`#${sectionId}`);
    if (!section) return;

    const navbarHeight = 70; // Height of navbar
    const targetPosition = section.offsetTop - navbarHeight;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
    });
}

// Export for use in other modules
window.scrollToSection = scrollToSection;


/* ============================================
   ANEEQ IMRAN | AI ENGINEER PORTFOLIO
   Main JavaScript Entry Point
   ============================================ */

// Initialize all modules when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio initialized');
    
    // Initialize navigation
    initNavigation();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize smooth scrolling
    initSmoothScroll();
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function to limit function calls
 * @param {Function} func - Function to throttle
 * @param {number} limit - Limit time in milliseconds
 * @returns {Function} Throttled function
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - Element to check
 * @returns {boolean} True if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

/**
 * Add class to element with delay
 * @param {HTMLElement} element - Element to add class to
 * @param {string} className - Class name to add
 * @param {number} delay - Delay in milliseconds
 */
function addClassWithDelay(element, className, delay = 0) {
    if (delay > 0) {
        setTimeout(() => element.classList.add(className), delay);
    } else {
        element.classList.add(className);
    }
}

/**
 * Remove class from element
 * @param {HTMLElement} element - Element to remove class from
 * @param {string} className - Class name to remove
 */
function removeClass(element, className) {
    element.classList.remove(className);
}

/**
 * Toggle class on element
 * @param {HTMLElement} element - Element to toggle class on
 * @param {string} className - Class name to toggle
 */
function toggleClass(element, className) {
    element.classList.toggle(className);
}

/**
 * Get all elements matching selector
 * @param {string} selector - CSS selector
 * @returns {NodeList} Elements matching selector
 */
function selectAll(selector) {
    return document.querySelectorAll(selector);
}

/**
 * Get first element matching selector
 * @param {string} selector - CSS selector
 * @returns {HTMLElement|null} First element matching selector
 */
function select(selector) {
    return document.querySelector(selector);
}

// ============================================
// NAVIGATION INITIALIZATION
// ============================================

function initNavigation() {
    const hamburger = select('#hamburger');
    const navMenu = select('#navMenu');
    const navLinks = selectAll('.nav-link');

    if (!hamburger || !navMenu) return;

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        toggleClass(hamburger, 'active');
        toggleClass(navMenu, 'active');
    });

    // Close menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            removeClass(hamburger, 'active');
            removeClass(navMenu, 'active');
        });
    });

    // Update active nav link based on scroll position
    window.addEventListener('scroll', throttle(updateActiveNavLink, 100));
    updateActiveNavLink(); // Initial call
}

/**
 * Update active navigation link based on current scroll position
 */
function updateActiveNavLink() {
    const sections = selectAll('section');
    const navLinks = selectAll('.nav-link');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        removeClass(link, 'active');
        if (link.getAttribute('data-section') === currentSection) {
            link.classList.add('active');
        }
    });
}

// ============================================
// SCROLL ANIMATIONS INITIALIZATION
// ============================================

function initScrollAnimations() {
    const revealElements = selectAll('.reveal, .project-card, .research-item, .skill-tag');

    // Initial check for elements already in viewport
    revealElements.forEach((element, index) => {
        if (isInViewport(element)) {
            addClassWithDelay(element, 'active', index * 50);
        }
    });

    // Listen for scroll events
    window.addEventListener('scroll', throttle(() => {
        revealElements.forEach((element, index) => {
            if (!element.classList.contains('active') && isInViewport(element)) {
                addClassWithDelay(element, 'active', index * 30);
            }
        });
    }, 100));
}

// ============================================
// SMOOTH SCROLL INITIALIZATION
// ============================================

function initSmoothScroll() {
    // Smooth scroll for anchor links
    selectAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = select(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ============================================
// EXPORT FUNCTIONS FOR OTHER MODULES
// ============================================

window.portfolioUtils = {
    debounce,
    throttle,
    isInViewport,
    addClassWithDelay,
    removeClass,
    toggleClass,
    selectAll,
    select,
};

/* ============================================
   CONTACT FORM MODULE
   ============================================ */

// This file handles contact form validation and submission

document.addEventListener('DOMContentLoaded', () => {
    initContactForm();
});

/**
 * Initialize contact form
 */
function initContactForm() {
    const form = document.querySelector('#contactForm');
    if (!form) return;

    form.addEventListener('submit', handleFormSubmit);

    // Add real-time validation
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => clearFieldError(input));
    });
}

/**
 * Handle form submission
 * @param {Event} e - Submit event
 */
function handleFormSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formStatus = document.querySelector('#formStatus');

    // Validate all fields
    const isValid = validateForm(form);

    if (!isValid) {
        showFormStatus('Please fill in all fields correctly.', 'error', formStatus);
        return;
    }

    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Simulate form submission (since this is frontend-only)
    submitForm(data, form, formStatus);
}

/**
 * Validate entire form
 * @param {HTMLFormElement} form - Form element
 * @returns {boolean} True if form is valid
 */
function validateForm(form) {
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });

    return isValid;
}

/**
 * Validate individual field
 * @param {HTMLInputElement|HTMLTextAreaElement} field - Form field
 * @returns {boolean} True if field is valid
 */
function validateField(field) {
    const value = field.value.trim();
    const errorElement = document.querySelector(`#${field.id}Error`);

    if (!errorElement) return true;

    // Check if field is empty
    if (!value) {
        showFieldError(field, 'This field is required');
        return false;
    }

    // Validate email
    if (field.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, 'Please enter a valid email address');
            return false;
        }
    }

    // Validate minimum length
    if (field.name === 'message' && value.length < 10) {
        showFieldError(field, 'Message must be at least 10 characters');
        return false;
    }

    clearFieldError(field);
    return true;
}

/**
 * Show field error
 * @param {HTMLInputElement|HTMLTextAreaElement} field - Form field
 * @param {string} message - Error message
 */
function showFieldError(field, message) {
    const errorElement = document.querySelector(`#${field.id}Error`);
    if (!errorElement) return;

    field.classList.add('error');
    field.style.borderColor = 'var(--color-error)';
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

/**
 * Clear field error
 * @param {HTMLInputElement|HTMLTextAreaElement} field - Form field
 */
function clearFieldError(field) {
    const errorElement = document.querySelector(`#${field.id}Error`);
    if (!errorElement) return;

    field.classList.remove('error');
    field.style.borderColor = '';
    errorElement.textContent = '';
    errorElement.style.display = 'none';
}

/**
 * Submit form (frontend-only simulation)
 * @param {Object} data - Form data
 * @param {HTMLFormElement} form - Form element
 * @param {HTMLElement} formStatus - Status message element
 */
function submitForm(data, form, formStatus) {
    // Show loading state
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    // Simulate API call with timeout
    setTimeout(() => {
        // Show success message
        showFormStatus(
            '✓ Message received! I\'ll get back to you soon.',
            'success',
            formStatus
        );

        // Reset form
        form.reset();

        // Reset button
        submitButton.disabled = false;
        submitButton.textContent = originalText;

        // Clear success message after 5 seconds
        setTimeout(() => {
            formStatus.textContent = '';
            formStatus.className = '';
        }, 5000);

        // Log form data (for demonstration)
        console.log('Form submitted with data:', data);
    }, 1500);
}

/**
 * Show form status message
 * @param {string} message - Status message
 * @param {string} type - Message type ('success' or 'error')
 * @param {HTMLElement} element - Status element
 */
function showFormStatus(message, type, element) {
    if (!element) return;

    element.textContent = message;
    element.className = type;
    element.style.display = 'block';

    // Auto-hide error messages after 5 seconds
    if (type === 'error') {
        setTimeout(() => {
            element.textContent = '';
            element.className = '';
            element.style.display = 'none';
        }, 5000);
    }
}

/**
 * Validate email format
 * @param {string} email - Email address
 * @returns {boolean} True if email is valid
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Sanitize form input (basic XSS prevention)
 * @param {string} input - User input
 * @returns {string} Sanitized input
 */
function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

// Export functions for use in other modules
window.formUtils = {
    validateField,
    validateForm,
    isValidEmail,
    sanitizeInput,
};
