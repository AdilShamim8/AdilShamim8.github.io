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
            title: 'Bangla Diarizz',
            problem: 'Production-grade Bengali speaker diarization — no existing solution for real Bengali call center audio.',
            constraint: 'Only 4 hours of labeled Bengali data. Off-the-shelf pyannote DER: 35%.',
            approach: 'Domain adaptation on speaker embedding layer only. Knowledge distillation for inference speedup.',
            numbers: 'DER 0.19 · WER 0.37 · 3.4× real-time on CPU · 56% inference speedup',
            image: 'assets/images/project-bangla-diarizz.png',
            tags: ['PyTorch', 'pyannote', 'WeSpeaker', 'Knowledge Distillation'],
            paper: 'https://www.researchgate.net/publication/401194830_Bangla_Diarizz_Domain-Adapted_Speaker_Diarization_for_Bengali_Long-Form_Audio',
            code: 'https://github.com/AdilShamim8/Bangla-Diarizz',
            demo: null,
            featured: true,
            badge: 'Published Research'
        },
        {
            title: 'Production-Grade RAG',
            problem: 'Enterprise RAG systems fail in production: dropped context, no source attribution, and vendor lock-in to a single LLM provider.',
            constraint: 'Must handle PDF ingestion at scale, be idempotent on re-ingestion, and work across OpenAI, Gemini, and local models.',
            approach: 'PDF → recursive chunking → multi-provider embeddings → Qdrant with deterministic IDs → top-K retrieval → source-aware LLM generation. Durable workflows via Inngest ensure local-first resilience.',
            numbers: 'Multi-provider (OpenAI · Gemini · Ollama) · Idempotent re-ingestion · Grounded, auditable answers · Query routing + context window management',
            image: 'assets/images/project-rag-pipeline.png',
            tags: ['LangChain', 'Qdrant', 'FastAPI', 'Inngest', 'OpenAI', 'GenAI'],
            paper: null,
            demo: null,
            code: 'https://github.com/AdilShamim8/Production-grade-RAG',
            featured: true,
            badge: 'Production GenAI'
        },
        {
            title: 'QuantScope',
            problem: 'Quantitative stock analysis breaks when the AI provider goes down — runtime dependency on a single LLM is an unacceptable single point of failure.',
            constraint: '35+ exchanges, 6 LLM providers, 33 tests. The LLM layer must be 100% replaceable without touching business logic.',
            approach: 'Strict architectural separation: core/ (indicators, risk, data) has zero LLM dependencies. Engineered a 6-provider LLM fallback chain (OpenAI → Anthropic → Google → Ollama → Mistral → Cohere) with template-based fallback and full monitoring stack.',
            numbers: '35+ exchanges · 6 LLM providers · 33 tests · Zero vendor lock-in · Full monitoring stack',
            image: 'assets/images/project-quantscope.png',
            tags: ['Python', 'FastAPI', 'LangChain', 'Docker', 'pytest', 'Multi-LLM'],
            paper: null,
            demo: null,
            code: 'https://github.com/AdilShamim8/QuantScope',
            featured: false,
            badge: 'Production System'
        },
        {
            title: 'Production ML Pipeline',
            problem: 'Need a reproducible, versioned end-to-end ML pipeline for price prediction — not a one-off notebook.',
            constraint: 'Must demonstrate full MLOps lifecycle: data versioning, experiment tracking, hyperparameter tuning, and containerized serving.',
            approach: 'ZenML orchestration across ingest → preprocess → train → evaluate → register → serve stages. MLflow for experiment versioning and hyperparameter logging. Cross-validation and tuning in the training stage. Dockerized FastAPI inference service with structured logging and input validation.',
            numbers: 'End-to-end pipeline · MLflow tracking · Cross-validation + tuning · Dockerized FastAPI serving',
            image: 'assets/images/project-ml-pipeline.png',
            tags: ['ZenML', 'MLflow', 'XGBoost', 'Docker', 'FastAPI'],
            paper: null,
            demo: null,
            code: 'https://github.com/AdilShamim8/Prices_Predictor_System',
            featured: false,
            badge: 'MLOps'
        },
        {
            title: 'Training Data Bot',
            problem: 'Fine-tuning LLMs requires clean, structured datasets — but manual curation is slow, inconsistent, and doesn\'t scale.',
            constraint: 'Must handle heterogeneous inputs (PDF, plain text, URLs) and output clean, training-ready datasets with no manual curation step.',
            approach: 'Automated ingestion pipeline: raw documents → quality scoring → formatting → structured output ready for fine-tuning runs. Demonstrates full LLM engineering lifecycle: data ingestion → preprocessing → quality filtering → structured dataset output.',
            numbers: 'PDF · plain text · URL ingestion · Quality scoring · Fine-tuning ready output · Zero manual curation',
            image: 'assets/images/project-training-data-bot.png',
            tags: ['LLM Engineering', 'Fine-Tuning', 'PDF Ingestion', 'Quality Scoring', 'Python'],
            paper: null,
            demo: null,
            code: 'https://github.com/AdilShamim8/Training-Data-Bot',
            featured: false,
            badge: 'LLM Engineering'
        }
    ];

    grid.innerHTML = '';
    var fragment = document.createDocumentFragment();

    projects.forEach(function (project) {
        var card = document.createElement('article');
        card.className = 'project-card reveal' + (project.featured ? ' project-featured' : '');

        // Build constraint story HTML
        var storyHtml =
            '<div class="project-constraint-story">' +
                '<div class="constraint-row"><span class="constraint-label">Problem</span><span class="constraint-value">' + project.problem + '</span></div>' +
                '<div class="constraint-row"><span class="constraint-label">Constraint</span><span class="constraint-value">' + project.constraint + '</span></div>' +
                '<div class="constraint-row"><span class="constraint-label">Approach</span><span class="constraint-value">' + project.approach + '</span></div>' +
                '<div class="constraint-row constraint-numbers"><span class="constraint-label">Numbers</span><span class="constraint-value">' + project.numbers + '</span></div>' +
            '</div>';

        // Build links HTML
        var linksHtml = '';
        if (project.paper) {
            linksHtml += '<a href="' + project.paper + '" class="project-card-link" target="_blank" rel="noopener noreferrer"><i class="fas fa-file-alt"></i> Paper</a>';
        }
        if (project.demo) {
            linksHtml += '<a href="' + project.demo + '" class="project-card-link" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i> Live Demo</a>';
        }
        linksHtml += '<a href="' + project.code + '" class="project-card-link" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> Code</a>';

        var badgeHtml = project.badge
            ? '<span class="project-card-badge">' + project.badge + '</span>'
            : '';

        card.innerHTML =
            '<div class="project-card-image-wrap">' +
                '<img src="' + project.image + '" alt="' + project.title + ' — ' + project.problem.split('.')[0] + '" class="project-card-image" loading="lazy" decoding="async">' +
                badgeHtml +
            '</div>' +
            '<div class="project-card-body">' +
                '<h3 class="project-card-title">' + project.title + '</h3>' +
                storyHtml +
                '<div class="project-card-tags">' +
                    project.tags.map(function (tag) { return '<span>' + tag + '</span>'; }).join('') +
                '</div>' +
                '<div class="project-card-links">' + linksHtml + '</div>' +
            '</div>';

        var image = card.querySelector('.project-card-image');
        if (image) {
            image.addEventListener('error', function () {
                image.src = 'assets/images/Adil.jpeg';
                image.style.objectFit = 'cover';
            });
        }

        fragment.appendChild(card);
    });

    grid.appendChild(fragment);
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('.reveal, .exp-item, .skill-group, .blog-item, .cert-item, .philosophy-content'));
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
    var selector = '.hero-photo, .project-card-image';
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
