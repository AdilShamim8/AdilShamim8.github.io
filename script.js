// Wait for DOM ready
document.addEventListener('DOMContentLoaded', function () {
    initNavbar();
    initThemeToggle();
    initProjects();
    initImageLightbox();
    initScrollReveal();
    initSmoothScroll();
    setCurrentYear();
});

// ===== NAVBAR =====
function initNavbar() {
    var menuToggle = document.getElementById('mobile-menu');
    var navMenu = document.getElementById('primary-menu') || document.querySelector('.nav-menu');
    var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link'));
    var navbar = document.querySelector('.navbar');

    function setMenuState(isOpen) {
        if (!menuToggle || !navMenu) return;
        menuToggle.classList.toggle('active', isOpen);
        navMenu.classList.toggle('active', isOpen);
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        navMenu.setAttribute('aria-hidden', String(!isOpen));
        document.body.classList.toggle('mobile-menu-open', isOpen);
    }

    if (menuToggle && navMenu) {
        setMenuState(false);

        menuToggle.addEventListener('click', function () {
            var isOpen = menuToggle.classList.contains('active');
            setMenuState(!isOpen);
        });

        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                setMenuState(false);
            });
        });

        document.addEventListener('click', function (event) {
            if (!menuToggle.classList.contains('active')) return;
            var target = event.target;
            if (!(target instanceof Element)) return;
            if (target.closest('.nav-right')) return;
            setMenuState(false);
        });

        window.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                setMenuState(false);
            }
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth > 768) {
                setMenuState(false);
            }
        });
    }

    if (navbar) {
        var updateNavbarState = function () {
            navbar.classList.toggle('scrolled', window.scrollY > 10);
        };
        updateNavbarState();
        window.addEventListener('scroll', updateNavbarState, { passive: true });
    }

    initActiveSectionHighlighting(navLinks);
}

function initActiveSectionHighlighting(navLinks) {
    var hashLinks = navLinks.filter(function (link) {
        var href = link.getAttribute('href') || '';
        return href.charAt(0) === '#' && href.length > 1;
    });

    if (!hashLinks.length) return;

    var sectionIds = hashLinks.map(function (link) {
        return (link.getAttribute('href') || '').slice(1);
    });

    var sections = sectionIds
        .map(function (id) { return document.getElementById(id); })
        .filter(Boolean);

    if (!sections.length) return;

    function setActiveById(id) {
        hashLinks.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
    }

    if ('IntersectionObserver' in window) {
        var visible = new Set();
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    visible.add(entry.target.id);
                } else {
                    visible.delete(entry.target.id);
                }
            });

            for (var i = 0; i < sections.length; i += 1) {
                if (visible.has(sections[i].id)) {
                    setActiveById(sections[i].id);
                    break;
                }
            }
        }, {
            root: null,
            rootMargin: '-42% 0px -42% 0px',
            threshold: 0
        });

        sections.forEach(function (section) {
            observer.observe(section);
        });
    }
}

// ===== THEME TOGGLE =====
function initThemeToggle() {
    var toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    var icon = toggle.querySelector('i');
    var saved = localStorage.getItem('theme');
    var darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        var isDark = theme === 'dark';

        if (icon) {
            icon.classList.toggle('fa-sun', isDark);
            icon.classList.toggle('fa-moon', !isDark);
        }

        toggle.setAttribute('aria-pressed', String(isDark));
        toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }

    if (saved === 'dark' || saved === 'light') {
        applyTheme(saved);
    } else {
        applyTheme(darkMediaQuery.matches ? 'dark' : 'light');
    }

    toggle.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        var next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        localStorage.setItem('theme', next);
    });

    darkMediaQuery.addEventListener('change', function (event) {
        if (!localStorage.getItem('theme')) {
            applyTheme(event.matches ? 'dark' : 'light');
        }
    });
}

// ===== PROJECTS =====
function initProjects() {
    var grid = document.querySelector('.projects-grid');
    if (!grid) return;

    var projects = [
        {
            title: 'Toolly',
            description: 'AI-powered productivity suite automating daily tasks with intelligent text processing and content generation.',
            image: 'https://i.postimg.cc/4d0vfpLB/20250613-1939-Toolly-Modern-Tech-Logo-simple-compose-01jxmr7v1neyav79wdd6fye13h.png',
            tags: ['AI', 'NLP', 'Python', 'Automation'],
            demo: 'https://www.toolly.tech/',
            code: 'https://github.com/AdilShamim8/Toolly'
        },
        {
            title: 'Prices Predictor System',
            description: 'End-to-end price-prediction pipeline with ZenML, MLflow experiment tracking, CV and hyperparameter tuning, Dockerized FastAPI inference service.',
            image: 'https://i.postimg.cc/gJpxfpx5/Price.jpg',
            tags: ['ZenML', 'MLflow', 'XGBoost', 'Docker', 'FastAPI'],
            demo: null,
            code: 'https://github.com/AdilShamim8/Prices_Predictor_System'
        },
        {
            title: 'Toolly Studio',
            description: 'Streamlit app generating professional product ads via Bria AI image-generation APIs with client-preview and batch export.',
            image: 'https://i.postimg.cc/mZ9YhHvq/20251013-1714-Ghibli-Inspired-Product-Ad-simple-compose-01k7emcvyce5zaj4jkz40q9fsz.png',
            tags: ['Streamlit', 'Bria AI', 'Python', 'Docker'],
            demo: null,
            code: 'https://github.com/AdilShamim8/Toolly-Studio'
        },
        {
            title: 'Book Recommender System',
            description: 'Hybrid recommendation system combining collaborative filtering (ALS) with content-based embeddings. +10% sales lift.',
            image: 'https://i.postimg.cc/MGyXDb27/Book.jpg',
            tags: ['ALS', 'TF-IDF', 'Flask', 'RecSys'],
            demo: 'https://adil-book-recommender.onrender.com/',
            code: 'https://github.com/AdilShamim8/Book-Recommender-System'
        },
        {
            title: 'Resume Screening',
            description: 'Automated resume parsing, embedding, and ranking pipeline (spaCy, SBERT, FAISS) served via Flask API.',
            image: 'https://i.postimg.cc/tTxx1KMP/20251013-1717-AI-Powered-Resume-Screening-simple-compose-01k7emhkcqffrrt7hwx30df76e.png',
            tags: ['spaCy', 'SBERT', 'FAISS', 'Flask'],
            demo: null,
            code: 'https://github.com/AdilShamim8/Resume-Screening'
        },
        {
            title: 'Sentiment Analysis',
            description: 'Real-time sentiment classification (positive/neutral/negative) with a clean Streamlit interface and visualization.',
            image: 'https://i.postimg.cc/jj9d6bbm/NLP.jpg',
            tags: ['NLP', 'Streamlit', 'Python'],
            demo: null,
            code: 'https://github.com/AdilShamim8/Sentiment-analysis'
        }
    ];

    grid.innerHTML = '';
    var fragment = document.createDocumentFragment();

    projects.forEach(function (project) {
        var card = document.createElement('article');
        card.className = 'project-card reveal';

        var linksHtml = '';
        if (project.demo) {
            linksHtml += '<a href="' + project.demo + '" class="project-card-link" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i> Live Demo</a>';
        }
        linksHtml += '<a href="' + project.code + '" class="project-card-link" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> Source</a>';

        card.innerHTML =
            '<img src="' + project.image + '" alt="' + project.title + '" class="project-card-image" loading="lazy" decoding="async">' +
            '<div class="project-card-body">' +
                '<h3 class="project-card-title">' + project.title + '</h3>' +
                '<p class="project-card-desc">' + project.description + '</p>' +
                '<div class="project-card-tags">' +
                    project.tags.map(function (tag) { return '<span>' + tag + '</span>'; }).join('') +
                '</div>' +
                '<div class="project-card-links">' + linksHtml + '</div>' +
            '</div>';

        var image = card.querySelector('.project-card-image');
        if (image) {
            image.addEventListener('error', function () {
                image.src = 'image/Adil.jpeg';
                image.style.objectFit = 'cover';
            });
        }

        fragment.appendChild(card);
    });

    grid.appendChild(fragment);
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('.reveal, .exp-item, .skill-group, .blog-item, .cert-item'));
    if (!elements.length) return;

    elements.forEach(function (element) {
        if (!element.classList.contains('reveal')) {
            element.classList.add('reveal');
        }
    });

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        elements.forEach(function (element) {
            element.classList.add('visible');
        });
        return;
    }

    if ('IntersectionObserver' in window) {
        var revealObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            });
        }, {
            root: null,
            threshold: 0.12,
            rootMargin: '0px 0px -30px 0px'
        });

        elements.forEach(function (element) {
            revealObserver.observe(element);
        });
        return;
    }

    function revealByScroll() {
        elements.forEach(function (element) {
            var rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 60) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', revealByScroll, { passive: true });
    revealByScroll();
}

// ===== YEAR =====
function setCurrentYear() {
    var element = document.getElementById('current-year');
    if (element) {
        element.textContent = new Date().getFullYear();
    }
}

// ===== IMAGE LIGHTBOX =====
function initImageLightbox() {
    var selector = '.hero-photo, .story-photo, .project-card-image';
    if (document.querySelector('.image-lightbox')) return;

    var overlay = document.createElement('div');
    overlay.className = 'image-lightbox';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-hidden', 'true');
    overlay.innerHTML =
        '<button class="lightbox-close" type="button" aria-label="Close expanded image">&times;</button>' +
        '<img class="lightbox-image" alt="Expanded image">';

    document.body.appendChild(overlay);

    var lightboxImage = overlay.querySelector('.lightbox-image');
    var closeButton = overlay.querySelector('.lightbox-close');
    var lastFocusedElement = null;

    function openLightbox(sourceImage) {
        lastFocusedElement = document.activeElement;
        lightboxImage.src = sourceImage.getAttribute('src') || '';
        lightboxImage.alt = sourceImage.getAttribute('alt') || 'Expanded image';
        overlay.classList.add('active');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        closeButton.focus();
    }

    function closeLightbox() {
        overlay.classList.remove('active');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (lastFocusedElement instanceof HTMLElement) {
            lastFocusedElement.focus();
        }
    }

    document.addEventListener('click', function (event) {
        var target = event.target;
        if (!(target instanceof Element)) return;
        if (target.matches(selector)) {
            openLightbox(target);
        }
    });

    document.querySelectorAll(selector).forEach(function (image) {
        image.setAttribute('tabindex', '0');
        image.setAttribute('role', 'button');
        image.setAttribute('aria-label', 'Open image in full screen');
        image.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openLightbox(image);
            }
        });
    });

    closeButton.addEventListener('click', closeLightbox);

    overlay.addEventListener('click', function (event) {
        if (event.target === overlay) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && overlay.classList.contains('active')) {
            closeLightbox();
        }
    });
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    var anchors = document.querySelectorAll('a[href^="#"]');

    anchors.forEach(function (anchor) {
        anchor.addEventListener('click', function (event) {
            var hash = anchor.getAttribute('href') || '';
            if (hash.length < 2) return;

            var target = document.getElementById(hash.slice(1));
            if (!target) return;

            event.preventDefault();
            window.scrollTo({
                top: target.getBoundingClientRect().top + window.scrollY - 80,
                behavior: 'smooth'
            });
            history.replaceState(null, '', hash);
        });
    });
}