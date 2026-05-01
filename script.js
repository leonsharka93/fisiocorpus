        // ==================== LOADING ANIMATION ====================
        (function() {
            const loaderBar = document.getElementById('loaderBar');
            const loader = document.getElementById('loader');
            let progress = 0;

            const loadInterval = setInterval(function() {
                progress += Math.random() * 15 + 5;
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(loadInterval);
                    setTimeout(function() {
                        loader.classList.add('hidden');
                        document.body.style.overflow = 'auto';
                    }, 400);
                }
                loaderBar.style.width = progress + '%';
            }, 150);

            document.body.style.overflow = 'hidden';
        })();

        // ==================== SCROLL PROGRESS BAR ====================
        (function() {
            const progressBar = document.getElementById('scrollProgress');
            window.addEventListener('scroll', function() {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                var scrollPercent = (scrollTop / docHeight) * 100;
                progressBar.style.width = scrollPercent + '%';
            });
        })();

        // ==================== NAVBAR SCROLL EFFECT ====================
        (function() {
            var navbar = document.getElementById('navbar');
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 80) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
        })();

        // ==================== MOBILE MENU ====================
        (function() {
            var hamburger = document.getElementById('hamburger');
            var mobileMenu = document.getElementById('mobileMenu');
            var mobileLinks = document.querySelectorAll('.mobile-link');

            hamburger.addEventListener('click', function() {
                hamburger.classList.toggle('active');
                mobileMenu.classList.toggle('active');
                document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
            });

            mobileLinks.forEach(function(link) {
                link.addEventListener('click', function() {
                    hamburger.classList.remove('active');
                    mobileMenu.classList.remove('active');
                    document.body.style.overflow = 'auto';
                });
            });
        })();

        // ==================== SMOOTH SCROLL ====================
        (function() {
            var navLinks = document.querySelectorAll('a[href^="#"]');
            navLinks.forEach(function(link) {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    var targetId = this.getAttribute('href');
                    var targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        var navbarHeight = document.getElementById('navbar').offsetHeight;
                        var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                    }
                });
            });
        })();

        // ==================== SCROLL ANIMATIONS ====================
        (function() {
            var animatedElements = document.querySelectorAll('.animate-on-scroll');
            var observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                        observer.unobserve(entry.target);
                    }
                });
            }, { root: null, rootMargin: '0px 0px -80px 0px', threshold: 0.1 });

            animatedElements.forEach(function(el) { observer.observe(el); });
        })();

        // ==================== HERO PARTICLES ====================
        (function() {
            var particlesContainer = document.getElementById('heroParticles');
            for (var i = 0; i < 30; i++) {
                var particle = document.createElement('div');
                particle.classList.add('particle');
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.width = (Math.random() * 4 + 2) + 'px';
                particle.style.height = particle.style.width;
                particle.style.animationDelay = (Math.random() * 15) + 's';
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                particlesContainer.appendChild(particle);
            }
        })();

        // ==================== BACK TO TOP ====================
        (function() {
            var backToTopBtn = document.getElementById('backToTop');
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 600) {
                    backToTopBtn.classList.add('visible');
                } else {
                    backToTopBtn.classList.remove('visible');
                }
            });
            backToTopBtn.addEventListener('click', function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        })();

        // ==================== COUNTER ANIMATION ====================
        (function() {
            var counters = document.querySelectorAll('.hero-stat-number, .about-experience-number');
            var animated = false;

            function animateCounters() {
                if (animated) return;
                animated = true;
                counters.forEach(function(counter) {
                    var text = counter.textContent;
                    var match = text.match(/(\d+)/);
                    if (!match) return;
                    var target = parseInt(match[0]);
                    var suffix = text.replace(match[0], '');
                    var current = 0;
                    var increment = Math.ceil(target / 60);
                    var stepTime = 2000 / (target / increment);
                    var timer = setInterval(function() {
                        current += increment;
                        if (current >= target) { current = target; clearInterval(timer); }
                        counter.textContent = current + suffix;
                    }, stepTime);
                });
            }

            var heroSection = document.querySelector('.hero');
            var counterObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        setTimeout(animateCounters, 800);
                        counterObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });

            if (heroSection) counterObserver.observe(heroSection);
        })();