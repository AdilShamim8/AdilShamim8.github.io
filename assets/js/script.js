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
    var accordionContainer = document.querySelector('.projects-accordion');
    if (!accordionContainer) return;

    var projects = [
        {
            title: 'Bangla Diarizz',
            problem: 'Production-grade Bengali speaker diarization — no existing solution for real Bengali call center audio.',
            constraint: 'Only 4 hours of labeled Bengali data. Off-the-shelf pyannote DER: 35%.',
            approach: 'Domain adaptation on speaker embedding layer only. Knowledge distillation for inference speedup.',
            numbers: 'DER 0.19 · WER 0.37 · 3.4× real-time on CPU · 56% inference speedup',
            impact: [
                { number: '56%', label: 'Faster Inference' },
                { number: '0.19', label: 'DER Achieved' },
                { number: '3.4×', label: 'Real-Time CPU' }
            ],
            tags: ['PyTorch', 'pyannote', 'WeSpeaker', 'Knowledge Distillation'],
            paper: 'https://www.researchgate.net/publication/401194830_Bangla_Diarizz_Domain-Adapted_Speaker_Diarization_for_Bengali_Long-Form_Audio',
            code: 'https://github.com/AdilShamim8/Bangla-Diarizz',
            demo: null,
            badge: 'Published Research'
        },
        {
            title: 'Production-Grade RAG',
            problem: 'Enterprise RAG systems fail in production: dropped context, no source attribution, and vendor lock-in to a single LLM provider.',
            constraint: 'Must handle PDF ingestion at scale, be idempotent on re-ingestion, and work across OpenAI, Gemini, and local models.',
            approach: 'PDF → recursive chunking → multi-provider embeddings → Qdrant with deterministic IDs → top-K retrieval → source-aware LLM generation. Durable workflows via Inngest ensure local-first resilience.',
            numbers: 'Multi-provider (OpenAI · Gemini · Ollama) · Idempotent re-ingestion · Grounded, auditable answers · Query routing + context window management',
            impact: [
                { number: '3', label: 'LLM Providers' },
                { number: '0', label: 'Vendor Lock-in' },
                { number: '100%', label: 'Idempotent' }
            ],
            tags: ['LangChain', 'Qdrant', 'FastAPI', 'Inngest', 'OpenAI', 'GenAI'],
            paper: null,
            demo: null,
            code: 'https://github.com/AdilShamim8/Production-grade-RAG',
            badge: 'Production GenAI'
        },
        {
            title: 'QuantScope',
            problem: 'Quantitative stock analysis breaks when the AI provider goes down — runtime dependency on a single LLM is an unacceptable single point of failure.',
            constraint: '35+ exchanges, 6 LLM providers, 33 tests. The LLM layer must be 100% replaceable without touching business logic.',
            approach: 'Strict architectural separation: core/ (indicators, risk, data) has zero LLM dependencies. Engineered a 6-provider LLM fallback chain (OpenAI → Anthropic → Google → Ollama → Mistral → Cohere) with template-based fallback and full monitoring stack.',
            numbers: '35+ exchanges · 6 LLM providers · 33 tests · Zero vendor lock-in · Full monitoring stack',
            impact: [
                { number: '6', label: 'LLM Fallbacks' },
                { number: '35+', label: 'Exchanges' },
                { number: '33', label: 'Automated Tests' }
            ],
            tags: ['Python', 'FastAPI', 'LangChain', 'Docker', 'pytest', 'Multi-LLM'],
            paper: null,
            demo: null,
            code: 'https://github.com/AdilShamim8/QuantScope',
            badge: 'Production System'
        },
        {
            title: 'Production ML Pipeline',
            problem: 'Need a reproducible, versioned end-to-end ML pipeline for price prediction — not a one-off notebook.',
            constraint: 'Must demonstrate full MLOps lifecycle: data versioning, experiment tracking, hyperparameter tuning, and containerized serving.',
            approach: 'ZenML orchestration across ingest → preprocess → train → evaluate → register → serve stages. MLflow for experiment versioning and hyperparameter logging. Cross-validation and tuning in the training stage. Dockerized FastAPI inference service with structured logging and input validation.',
            numbers: 'End-to-end pipeline · MLflow tracking · Cross-validation + tuning · Dockerized FastAPI serving',
            impact: [
                { number: '6', label: 'Pipeline Stages' },
                { number: '10%', label: 'Sales Lift' },
                { number: '0', label: 'Manual Steps' }
            ],
            tags: ['ZenML', 'MLflow', 'XGBoost', 'Docker', 'FastAPI'],
            paper: null,
            demo: null,
            code: 'https://github.com/AdilShamim8/Prices_Predictor_System',
            badge: 'MLOps'
        },
        {
            title: 'Training Data Bot',
            problem: 'Fine-tuning LLMs requires clean, structured datasets — but manual curation is slow, inconsistent, and doesn\'t scale.',
            constraint: 'Must handle heterogeneous inputs (PDF, plain text, URLs) and output clean, training-ready datasets with no manual curation step.',
            approach: 'Automated ingestion pipeline: raw documents → quality scoring → formatting → structured output ready for fine-tuning runs. Demonstrates full LLM engineering lifecycle: data ingestion → preprocessing → quality filtering → structured dataset output.',
            numbers: 'PDF · plain text · URL ingestion · Quality scoring · Fine-tuning ready output · Zero manual curation',
            impact: [
                { number: '3', label: 'Input Formats' },
                { number: '0', label: 'Manual Curation' },
                { number: '100%', label: 'Automated' }
            ],
            tags: ['LLM Engineering', 'Fine-Tuning', 'PDF Ingestion', 'Quality Scoring', 'Python'],
            paper: null,
            demo: null,
            code: 'https://github.com/AdilShamim8/Training-Data-Bot',
            badge: 'LLM Engineering'
        },
        {
            title: 'NeuroBridge',
            problem: 'Connecting LLMs to real-world applications and APIs is brittle and lacks standardized middleware for reliable agentic actions.',
            constraint: 'Must handle unpredictable LLM outputs and reliably route them to appropriate tools/actions without human intervention.',
            approach: 'Built a middleware layer bridging LLMs with real-world applications for seamless agentic integration, standardizing tool calling and error handling.',
            numbers: 'Agentic routing · Seamless API integration · Extensible tool architecture',
            impact: [
                { number: '100%', label: 'Extensible' },
                { number: '0', label: 'Manual Routing' },
                { number: '24/7', label: 'Availability' }
            ],
            tags: ['LangGraph', 'Agentic AI', 'API Integration', 'Middleware'],
            paper: null,
            demo: null,
            code: 'https://github.com/AdilShamim8/NeuroBridge',
            badge: 'Agentic AI'
        },
        {
            title: 'Transformer Architecture (nanoGPT)',
            problem: 'Using LLMs via APIs abstracts away the fundamental architecture, limiting the ability to debug, optimize, or customize models at a low level.',
            constraint: 'Need to exactly replicate the architecture and training dynamics of a landmark model (GPT-2) from scratch.',
            approach: 'Step-by-step reproduction of nanoGPT and GPT-2. Implemented custom causal self-attention, layer normalization, weight initialization, and training loops.',
            numbers: 'GPT-2 architecture · Custom attention mechanisms · PyTorch from scratch',
            impact: [
                { number: '100%', label: 'From Scratch' },
                { number: '124M', label: 'Params' },
                { number: '1', label: 'Transformer' }
            ],
            tags: ['PyTorch', 'Transformers', 'Deep Learning', 'Custom Training'],
            paper: null,
            demo: null,
            code: 'https://github.com/AdilShamim8/GPT-2-Rebuild-nanoGPT',
            badge: 'Deep Learning'
        }
    ];

    accordionContainer.innerHTML = '';
    var fragment = document.createDocumentFragment();

    projects.forEach(function (project, index) {
        var item = document.createElement('div');
        item.className = 'accordion-item reveal';
        
        var projectNum = (index + 1).toString().padStart(2, '0');

        // Build Links
        var linksHtml = '';
        if (project.paper) {
            linksHtml += '<a href="' + project.paper + '" class="accordion-link" target="_blank" rel="noopener noreferrer"><i class="fas fa-file-alt"></i> Paper <i class="fas fa-arrow-up-right-from-square link-arrow"></i></a>';
        }
        if (project.demo) {
            linksHtml += '<a href="' + project.demo + '" class="accordion-link" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i> Live Demo <i class="fas fa-arrow-up-right-from-square link-arrow"></i></a>';
        }
        linksHtml += '<a href="' + project.code + '" class="accordion-link" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> Code <i class="fas fa-arrow-up-right-from-square link-arrow"></i></a>';

        // Build Impact Metrics
        var impactHtml = '';
        if (project.impact && project.impact.length) {
            impactHtml = '<div class="accordion-metrics">';
            project.impact.forEach(function(stat) {
                impactHtml += '<div class="metric-item"><span class="metric-number">' + stat.number + '</span><span class="metric-label">' + stat.label + '</span></div>';
            });
            impactHtml += '</div>';
        }

        var badgeHtml = project.badge ? '<span class="accordion-badge">' + project.badge + '</span>' : '';

        // Only display the first part of the problem for the header
        var headerDescription = project.problem.split('—')[0] || project.problem;

        item.innerHTML = 
            '<button class="accordion-header" aria-expanded="false">' +
                '<span class="accordion-num">' + projectNum + '</span>' +
                '<div class="accordion-title-wrap">' +
                    '<h3 class="accordion-title">' + project.title + '</h3>' +
                    badgeHtml +
                '</div>' +
                '<span class="accordion-desc-short">' + headerDescription + '</span>' +
                '<span class="accordion-icon"><i class="fas fa-chevron-down"></i></span>' +
            '</button>' +
            '<div class="accordion-body">' +
                '<div class="accordion-body-inner">' +
                    '<div class="accordion-col-left">' +
                        '<div class="accordion-section">' +
                            '<h4 class="accordion-section-title">Problem</h4>' +
                            '<p>' + project.problem + '</p>' +
                        '</div>' +
                        '<div class="accordion-section">' +
                            '<h4 class="accordion-section-title">Constraint</h4>' +
                            '<p>' + project.constraint + '</p>' +
                        '</div>' +
                        '<div class="accordion-section">' +
                            '<h4 class="accordion-section-title">Approach</h4>' +
                            '<p>' + project.approach + '</p>' +
                        '</div>' +
                        '<div class="accordion-section">' +
                            '<h4 class="accordion-section-title">Numbers</h4>' +
                            '<p>' + project.numbers + '</p>' +
                        '</div>' +
                        '<div class="accordion-tags">' +
                            project.tags.map(function(tag) { return '<span class="accordion-tag">' + tag + '</span>'; }).join('') +
                        '</div>' +
                        '<div class="accordion-links">' + linksHtml + '</div>' +
                    '</div>' +
                    '<div class="accordion-col-right">' +
                        '<h4 class="accordion-section-title">Impact</h4>' +
                        impactHtml +
                    '</div>' +
                '</div>' +
            '</div>';

        var header = item.querySelector('.accordion-header');
        header.addEventListener('click', function() {
            var isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            // Close all other accordions
            var allItems = accordionContainer.querySelectorAll('.accordion-item');
            allItems.forEach(function(otherItem) {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
                    var icon = otherItem.querySelector('.accordion-icon i');
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                }
            });

            // Toggle current accordion
            if (!isExpanded) {
                item.classList.add('active');
                this.setAttribute('aria-expanded', 'true');
                var icon = this.querySelector('.accordion-icon i');
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                item.classList.remove('active');
                this.setAttribute('aria-expanded', 'false');
                var icon = this.querySelector('.accordion-icon i');
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });

        fragment.appendChild(item);
    });

    accordionContainer.appendChild(fragment);
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('.reveal, .exp-item, .skill-group, .blog-item, .cert-item, .philosophy-content, .sj-kaggle-cta'));
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
    var selector = '.hero-photo, .project-card-image, .story-photo';
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
