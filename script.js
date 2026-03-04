// Wait for DOM ready
document.addEventListener('DOMContentLoaded', function () {
    initNavbar();
    initThemeToggle();
    initProjects();
    initImageLightbox();
    initScrollReveal();
    setCurrentYear();
});

// ===== NAVBAR =====
function initNavbar() {
    var menuToggle = document.getElementById('mobile-menu');
    var navMenu = document.querySelector('.nav-menu');
    var navLinks = document.querySelectorAll('.nav-link');
    var navbar = document.querySelector('.navbar');

    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close menu on link click
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (menuToggle) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Active section highlighting
    window.addEventListener('scroll', function () {
        var current = '';
        var sections = document.querySelectorAll('section');
        sections.forEach(function (section) {
            var top = section.offsetTop;
            if (pageYOffset >= top - 200) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') && link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });

        // Navbar border on scroll
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ===== THEME TOGGLE =====
function initThemeToggle() {
    var toggle = document.getElementById('theme-toggle');
    if (!toggle) return;
    var icon = toggle.querySelector('i');
    var saved = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (saved === 'dark' || (!saved && prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    }

    toggle.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-theme');
        if (current !== 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
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

    projects.forEach(function (p) {
        var card = document.createElement('div');
        card.className = 'project-card reveal';
        var linksHtml = '';
        if (p.demo) {
            linksHtml += '<a href="' + p.demo + '" class="project-card-link" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> Live Demo</a>';
        }
        linksHtml += '<a href="' + p.code + '" class="project-card-link" target="_blank" rel="noopener"><i class="fab fa-github"></i> Source</a>';

        card.innerHTML =
            '<img src="' + p.image + '" alt="' + p.title + '" class="project-card-image" loading="lazy">' +
            '<div class="project-card-body">' +
                '<h3 class="project-card-title">' + p.title + '</h3>' +
                '<p class="project-card-desc">' + p.description + '</p>' +
                '<div class="project-card-tags">' +
                    p.tags.map(function (t) { return '<span>' + t + '</span>'; }).join('') +
                '</div>' +
                '<div class="project-card-links">' + linksHtml + '</div>' +
            '</div>';
        grid.appendChild(card);
    });
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
    var els = document.querySelectorAll('.reveal, .exp-item, .skill-group, .blog-item');
    if (!els.length) return;

    // Add reveal class to items that don't have it
    els.forEach(function (el) {
        if (!el.classList.contains('reveal')) {
            el.classList.add('reveal');
        }
    });

    function check() {
        els.forEach(function (el) {
            var rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 60) {
                el.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', check);
    check(); // Initial check
}

// ===== YEAR =====
function setCurrentYear() {
    var el = document.getElementById('current-year');
    if (el) el.textContent = new Date().getFullYear();
}

// ===== IMAGE LIGHTBOX =====
function initImageLightbox() {
    var selector = '.hero-photo, .story-photo, .project-card-image';
    var overlay = document.createElement('div');
    overlay.className = 'image-lightbox';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.innerHTML =
        '<button class="lightbox-close" aria-label="Close image">&times;</button>' +
        '<img class="lightbox-image" alt="Expanded image">';

    document.body.appendChild(overlay);

    var lightboxImage = overlay.querySelector('.lightbox-image');
    var closeBtn = overlay.querySelector('.lightbox-close');

    function closeLightbox() {
        overlay.classList.remove('active');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    document.addEventListener('click', function (event) {
        var target = event.target;
        if (!(target instanceof Element)) return;

        if (target.matches(selector)) {
            lightboxImage.src = target.getAttribute('src') || '';
            lightboxImage.alt = target.getAttribute('alt') || 'Expanded image';
            overlay.classList.add('active');
            overlay.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
    });

    closeBtn.addEventListener('click', closeLightbox);

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

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});