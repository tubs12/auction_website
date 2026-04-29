// ========================================
// Caroline Ackel Auctions - JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // Mobile Navigation Toggle
    // ========================================
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Animate hamburger
            const spans = hamburger.querySelectorAll('span');
            spans[0].classList.toggle('rotate-1');
            spans[1].classList.toggle('hide');
            spans[2].classList.toggle('rotate-2');
        });
    }
    
    // ========================================
    // Hero Carousel
    // ========================================
    const carouselSlide = document.querySelectorAll('.carousel-slide');
    const carouselDots = document.querySelector('.carousel-dots');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (carouselSlide.length > 0) {
        let currentSlide = 0;
        let slideInterval;
        
        // Create dots
        carouselSlide.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            carouselDots.appendChild(dot);
        });
        
        const dots = document.querySelectorAll('.carousel-dots .dot');
        
        function goToSlide(index) {
            carouselSlide[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');
            
            currentSlide = index;
            
            carouselSlide[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }
        
        function nextSlide() {
            const newIndex = (currentSlide + 1) % carouselSlide.length;
            goToSlide(newIndex);
        }
        
        function prevSlide() {
            const newIndex = (currentSlide - 1 + carouselSlide.length) % carouselSlide.length;
            goToSlide(newIndex);
        }
        
// Auto-advance every 8 seconds
        function startCarousel() {
            slideInterval = setInterval(nextSlide, 8000);
        }
        
        function stopCarousel() {
            clearInterval(slideInterval);
        }
        
        // Event listeners
        if (prevBtn) prevBtn.addEventListener('click', () => { stopCarousel(); prevSlide(); startCarousel(); });
        if (nextBtn) nextBtn.addEventListener('click', () => { stopCarousel(); nextSlide(); startCarousel(); });
        
        // Pause on hover
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.addEventListener('mouseenter', stopCarousel);
            heroSection.addEventListener('mouseleave', startCarousel);
        }
        
        startCarousel();
    }
    
    // ========================================
    // Smooth Scroll for Navigation Links
    // ========================================
    const navLinksItems = document.querySelectorAll('.nav-links a');
    
    navLinksItems.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });
    
    // ========================================
    // Navbar Background on Scroll
    // ========================================
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
        }
    });
    
    // ========================================
    // Active Navigation Link on Scroll
    // ========================================
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinksItems.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
    // ========================================
    // Contact Form Handling
    // ========================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());
            
            // Show success message (in production, this would send to a server)
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            this.reset();
        });
    }
    
    // ========================================
    // Gallery Lightbox (Optional Enhancement)
    // ========================================
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            // In a full implementation, this would open a lightbox
            // For now, we'll just log the click
            console.log('Gallery image clicked:', this.src);
        });
    });
    
    // ========================================
    // Scroll Animation - Fade In Elements
    // ========================================
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .testimonial-card, .gallery-grid img');
        
        elements.forEach((el, index) => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initial check
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // ========================================
    // Top Bar "Get In Touch" Button Scroll
    // ========================================
    const topBarBtn = document.querySelector('.top-bar .btn');
    
    if (topBarBtn) {
        topBarBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const contactSection = document.getElementById('contact');
            
            if (contactSection) {
                const offsetTop = contactSection.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // ========================================
    // Console Welcome Message
    // ========================================
    console.log('%c Caroline Ackel Auctions ', 'background: #8B4513; color: #fff; font-size: 20px; padding: 10px;');
    console.log('%c Professional Auctioneer Services in Dallas, TX ', 'color: #666;');
    console.log('%c License #: 18318 ', 'color: #D4AF37; font-weight: bold;');
});