/**
 * Kolkata With Sam - Central Core Javascript Engine
 * Implementation: Vanilla JS ES6 Modules/Standard Architecture
 */

document.addEventListener('DOMContentLoaded', () => {
    CoreEngine.init();
});

const CoreEngine = {
    init() {
        this.setupPreloader();
        this.setupThemeSystem();
        this.setupStickyHeader();
        this.setupMobileMenu();
        this.setupScrollAnimations();
        this.setupWidgets();
        this.setupCookieBanner();
    },

    /* ==========================================
       1. SCREEN PRELOADER LAYER
       ========================================== */
    setupPreloader() {
        const loader = document.getElementById('preloader');
        if (loader) {
            window.addEventListener('load', () => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.visibility = 'hidden';
                }, 600);
            });
        }
    },

    /* ==========================================
       2. LIGHT/DARK THEME MANAGEMENT SYSTEM
       ========================================== */
    setupThemeSystem() {
        const themeToggle = document.querySelector('.theme-toggle-btn');
        const currentTheme = localStorage.getItem('theme') || 'light';
        
        document.documentElement.setAttribute('data-theme', currentTheme);
        this.updateThemeIcon(themeToggle, currentTheme);

        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                let targetTheme = 'light';
                if (document.documentElement.getAttribute('data-theme') === 'light') {
                    targetTheme = 'dark';
                }
                document.documentElement.setAttribute('data-theme', targetTheme);
                localStorage.setItem('theme', targetTheme);
                this.updateThemeIcon(themeToggle, targetTheme);
            });
        }
    },

    updateThemeIcon(btn, theme) {
        if (!btn) return;
        if (theme === 'dark') {
            btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 5a7 7 0 0 0 0 14 7 7 0 0 0 0-14z"/></svg>`;
        } else {
            btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
        }
    },

    /* ==========================================
       3. HARDWARE ACCELERATED STICKY NAVBAR
       ========================================== */
    setupStickyHeader() {
        const header = document.querySelector('.site-header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    },

    /* ==========================================
       4. MOBILE DRAWERS & FOCUS MANAGEMENT
       ========================================== */
    setupMobileMenu() {
        const toggle = document.querySelector('.mobile-toggle');
        const menu = document.querySelector('.nav-menu');
        if (toggle && menu) {
            toggle.addEventListener('click', () => {
                menu.classList.toggle('open');
                toggle.classList.toggle('active');
            });
        }
    },

    /* ==========================================
       5. OBSERVER API FOR SCROLL ANIMATIONS
       ========================================== */
    setupScrollAnimations() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        elements.forEach(el => observer.observe(el));
    },

    /* ==========================================
       6. WIDGET LOGIC (BACK-TO-TOP & INTEGRATIONS)
       ========================================== */
    setupWidgets() {
        const backTop = document.querySelector('.btn-back-top');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backTop.classList.add('visible');
            } else {
                backTop.classList.remove('visible');
            }
        });

        if (backTop) {
            backTop.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    },

    /* ==========================================
       7. COOKIE CONSENT STATE ENGINE
       ========================================== */
    setupCookieBanner() {
        const banner = document.getElementById('cookieBanner');
        const acceptBtn = document.getElementById('acceptCookies');
        if (banner && acceptBtn) {
            if (!localStorage.getItem('cookiesAccepted')) {
                setTimeout(() => banner.classList.add('visible'), 2000);
            }
            acceptBtn.addEventListener('click', () => {
                localStorage.setItem('cookiesAccepted', 'true');
                banner.classList.remove('visible');
            });
        }
    }
};

/* Universal Modal Call Methods */
function toggleModal(modalId, action) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    if (action === 'open') {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

