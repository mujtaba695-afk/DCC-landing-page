document.addEventListener('DOMContentLoaded', () => {
    // --- Premium Reveal Animations (Optimized for Speed) ---
    const revealOptions = {
        threshold: 0.05, // Trigger sooner
        rootMargin: '0px 0px 100px 0px' // Load ahead of viewport
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                // If it's a text reveal, animate the inner span
                const textInner = entry.target.querySelector('.reveal-text span');
                if (textInner) {
                    textInner.style.transform = 'translateY(0)';
                }
                // Unobserve after reveal to save resources
                revealObserver.unobserve(entry.target);
            }
        });
    }, revealOptions);

    // Observe various reveal types
    document.querySelectorAll('.reveal-fade, .reveal-text, .reveal-card').forEach(el => {
        revealObserver.observe(el);
    });

    // --- Parallax Effect for Hero & Images ---
    const heroBg = document.querySelector('.hero-bg');
    const propertyImages = document.querySelectorAll('.parallax-img');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        // Hero background parallax
        if (heroBg) {
            heroBg.style.transform = `translate3d(0, ${scrolled * 0.4}px, 0)`;
        }

        // Sub-images parallax
        propertyImages.forEach(img => {
            const rect = img.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const distance = window.innerHeight - rect.top;
                img.style.transform = `translate3d(0, ${distance * 0.05}px, 0)`;
            }
        });
    });

    // --- Sticky Header Logic ---
    const header = document.querySelector('.header-main');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.background = 'var(--glass-bg)';
            header.style.padding = '12px 0';
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
        } else {
            header.style.background = 'var(--glass-bg)';
            header.style.padding = '24px 0';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.02)';
        }

        // Hide/Show header on scroll direction
        if (currentScroll > lastScroll && currentScroll > 500) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScroll = currentScroll;
    });

    // --- Mobile Menu Toggle ---
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-active');
            mobileToggle.classList.toggle('active');

            // Prevent body scroll when menu is open
            if (navLinks.classList.contains('mobile-active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close menu when link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('mobile-active');
                mobileToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // --- Slide-over Form Logic ---
    const slideOver = document.getElementById('calc-slide-over');
    const overlay = document.getElementById('calc-overlay');
    const openBtns = document.querySelectorAll('.open-calc-form');
    const closeBtn = document.querySelector('.close-slide');
    const ctaSourceInput = document.getElementById('form-source-cta');

    const toggleForm = (isOpen) => {
        if (isOpen) {
            slideOver.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            slideOver.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    let shouldDownloadBrochure = false;

    openBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const source = btn.dataset.cta || 'Inquiry';
            const isDownload = btn.dataset.download === 'true';

            if (ctaSourceInput) ctaSourceInput.value = source;

            // Track if this is a brochure download request
            shouldDownloadBrochure = isDownload;

            toggleForm(true);
        });
    });

    if (closeBtn) closeBtn.addEventListener('click', () => toggleForm(false));
    if (overlay) overlay.addEventListener('click', () => toggleForm(false));

    // --- Magnetic Button Effect ---
    const magneticBtns = document.querySelectorAll('.magnetic-btn');
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });

    // --- Sticky Hub visibility ---
    const stickyHub = document.querySelector('.sticky-hub');
    const hero = document.querySelector('.hero-premium');

    if (stickyHub && hero) {
        window.addEventListener('scroll', () => {
            const heroHeight = hero.offsetHeight;
            if (window.scrollY > heroHeight - 100) {
                stickyHub.classList.add('visible');
            } else {
                stickyHub.classList.remove('visible');
            }
        });
    }

    // --- Form Validation Functions ---
    const validateEmail = (email) => {
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
        return emailRegex.test(email) && email.length > 0;
    };

    const validatePhone = (phone) => {
        // Accepts international format: +971 50 123 4567, +1 (555) 123-4567, etc.
        const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        return phoneRegex.test(phone) && phone.length > 0;
    };

    const showValidationError = (input, message) => {
        input.classList.add('input-error');
        let errorDiv = input.nextElementSibling;
        if (!errorDiv || !errorDiv.classList.contains('error-message')) {
            errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            input.parentNode.insertBefore(errorDiv, input.nextSibling);
        }
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
    };

    const clearValidationError = (input) => {
        input.classList.remove('input-error');
        const errorDiv = input.nextElementSibling;
        if (errorDiv && errorDiv.classList.contains('error-message')) {
            errorDiv.style.display = 'none';
        }
    };

    const validateForm = (form) => {
        const emailInput = form.querySelector('input[type="email"]');
        const phoneInput = form.querySelector('input[type="tel"]');
        let isValid = true;

        // Validate email
        if (emailInput && emailInput.value.trim()) {
            if (!validateEmail(emailInput.value.trim())) {
                showValidationError(emailInput, 'Please enter a valid email address (e.g., john@company.ae)');
                isValid = false;
            } else {
                clearValidationError(emailInput);
            }
        }

        // Validate phone
        if (phoneInput && phoneInput.value.trim()) {
            if (!validatePhone(phoneInput.value.trim())) {
                showValidationError(phoneInput, 'Please enter a valid phone number (e.g., +971 50 123 4567 or 050 123 4567)');
                isValid = false;
            } else {
                clearValidationError(phoneInput);
            }
        }

        return isValid;
    };

    // --- Real-time Validation on Input ---
    const addRealtimeValidation = () => {
        const emailInputs = document.querySelectorAll('input[type="email"]');
        const phoneInputs = document.querySelectorAll('input[type="tel"]');

        emailInputs.forEach(input => {
            input.addEventListener('blur', () => {
                if (input.value.trim() && !validateEmail(input.value.trim())) {
                    showValidationError(input, 'Please enter a valid email address (e.g., john@company.ae)');
                } else if (input.value.trim()) {
                    clearValidationError(input);
                }
            });

            input.addEventListener('input', () => {
                if (input.value.trim() && validateEmail(input.value.trim())) {
                    clearValidationError(input);
                }
            });
        });

        phoneInputs.forEach(input => {
            input.addEventListener('blur', () => {
                if (input.value.trim() && !validatePhone(input.value.trim())) {
                    showValidationError(input, 'Please enter a valid phone number (e.g., +971 50 123 4567 or 050 123 4567)');
                } else if (input.value.trim()) {
                    clearValidationError(input);
                }
            });

            input.addEventListener('input', () => {
                if (input.value.trim() && validatePhone(input.value.trim())) {
                    clearValidationError(input);
                }
            });
        });
    };

    addRealtimeValidation();

    // --- Dynamic Form Handling (All Forms) with Duplicate Prevention ---
    const allForms = document.querySelectorAll('form');
    allForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Validate form before submission
            if (!validateForm(form)) {
                return; // Prevent submission if validation fails
            }

            // Get email or phone from the form
            const emailInput = form.querySelector('input[type="email"]');
            const phoneInput = form.querySelector('input[type="tel"]');

            const userEmail = emailInput ? emailInput.value : null;
            const userPhone = phoneInput ? phoneInput.value : null;

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            // Premium Loading State
            submitBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Processing...';
            submitBtn.disabled = true;

            setTimeout(() => {
                // Success State
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Inquiry Received';
                submitBtn.style.backgroundColor = '#2ecc71'; // Success Green

                // Trigger brochure download if requested
                if (shouldDownloadBrochure) {
                    const link = document.createElement('a');
                    link.href = 'Dubai CommerCity.pdf';
                    link.download = 'Dubai-CommerCity-Brochure.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    shouldDownloadBrochure = false; // Reset flag
                }

                setTimeout(() => {
                    // Close form and keep button disabled permanently
                    if (slideOver && slideOver.classList.contains('active')) {
                        toggleForm(false);
                    }

                    // Reset form but keep button disabled
                    form.reset();

                    // Change button to "Already Submitted" state
                    submitBtn.innerHTML = '<i class="fas fa-check-circle"></i> Already Submitted';
                    submitBtn.style.backgroundColor = '#95a5a6'; // Gray
                    submitBtn.style.cursor = 'not-allowed';
                    // Button remains disabled permanently
                }, 3000);
            }, 1500);
        });
    });

    // --- Smooth Anchor Scrolling Offset ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                const headerOffset = 80;
                const elementPosition = targetEl.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
