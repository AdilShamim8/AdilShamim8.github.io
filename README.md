# AdilShamim8.github.io

[![Live Site](https://img.shields.io/badge/Live%20Site-www.adilshamim.me-2f8f6b?style=flat-square&logo=github)](https://www.adilshamim.me)
[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-222?style=flat-square&logo=github-pages)](https://pages.github.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

> **Adil Shamim — Senior AI/ML Engineer Portfolio**  
> Architecting Production LLM Systems · Agentic Workflows · Deep Learning · MLOps

**Live Environment:** [https://www.adilshamim.me](https://www.adilshamim.me)

---

## Executive Summary

A production-grade, highly optimized portfolio engineered to demonstrate advanced AI/ML capabilities, full-stack ML system design, and rigorous software engineering practices. Built with a focus on performance, edge AI integration, and zero-dependency frontend architecture.

### Core Engineering Principles:

- **Zero-Dependency Edge Architecture:** Hand-crafted HTML5, CSS3, and Vanilla ES6+ JavaScript. Eliminates framework bloat and `node_modules` vulnerabilities, ensuring sub-second Time-to-Interactive (TTI) and maximum reliability.
- **Embedded Agentic AI:** Integrates a dual-mode, edge-aware conversational agent. Operates deterministically via local fallback routing for zero-latency responses, dynamically upgrading to a Gemini-powered LLM agent with conversation history truncation and context window management.
- **Performance Optimized:** Lighthouse performance scores engineered for ≥ 95. Assets are aggressively deferred, CDN-delivered, or locally cached.
- **Semantic & Accessible Design:** Fully compliant with ARIA standards, keyboard navigation accessibility, and `prefers-reduced-motion` policies.

---

## Table of Contents

- [Executive Summary](#executive-summary)
- [System Architecture](#system-architecture)
- [Feature Engineering Breakdown](#feature-engineering-breakdown)
- [Embedded AI Agent Architecture](#embedded-ai-agent-architecture)
- [Knowledge Base & Library](#knowledge-base--library)
- [Technology Stack](#technology-stack)
- [Repository Layout](#repository-layout)
- [Local Development Environment](#local-development-environment)
- [Chatbot Initialization](#chatbot-initialization)
- [Deployment & CI/CD Pipeline](#deployment--cicd-pipeline)
- [Maintenance Checklist](#maintenance-checklist)

---

## System Architecture

```text
Browser
  │
  ├── index.html          ← Root portfolio & presentation layer
  ├── My_Story.html       ← Personal narrative + interactive knowledge base
  └── books/
        ├── [slug].html   ← 23 dynamically generated knowledge nodes
        └── ...
              │
              ├── assets/css/styles.css      ← Global design system (~2100 LOC)
              ├── assets/css/chatbot.css     ← LLM Agent UI styling
              ├── assets/js/script.js        ← Core UI interactions & DOM manipulation
              └── assets/js/chatbot.js       ← Edge AI agent engine & state management
```

All interfaces share a modular CSS design system utilizing custom properties, fluid typography scales, and native system-preference dark mode injection, ensuring zero render-blocking delays.

---

## Feature Engineering Breakdown

### Core Portfolio (`index.html`)

| Module | Technical Implementation |
|---------|----------------|
| Hero Section | Dynamic role positioning, responsive grid layout, and dual CTA routing. |
| Projects Matrix | Production deployments rendered via structured JS payloads; emphasizing Problem, Architecture, and Quantifiable Impact. |
| Skills Taxonomy | Categorised by engineering domain: Production ML, MLOps, GenAI, Infrastructure, and Core CS. |
| Contact & Networking | Mailto integration and highly optimized PDF résumé delivery. |
| UI/UX Micro-interactions | Native `dialog`-based image lightbox, scroll-reveal utilizing the `IntersectionObserver` API, and hardware-accelerated CSS transitions. |
| State Persistence | Persistent dark/light mode toggle utilizing `localStorage` and `prefers-color-scheme` media queries. |

### My Story & Knowledge Base (`My_Story.html`)

| Module | Technical Implementation |
|---------|----------------|
| Live Search Engine | 180ms debounced input matching across title, author, and genre spaces for O(N) filtering. |
| Dynamic Filtering | State-managed year filter pills dynamically aggregated from the knowledge base array. |
| Data Binding | Reactive book count badge and real-time DOM updates based on complex filter/search intersections. |

---

## Embedded AI Agent Architecture

The portfolio features a custom-built, in-page AI assistant engineered for seamless user interaction and robust failure handling.

| Component | Engineering Detail |
|---------|--------|
| Deterministic Fallback Engine | O(1) local response routing for core queries ensuring zero-latency, offline-capable operation without external API dependencies. |
| LLM Integration | Dynamically injects Google's Gemini API for dynamic reasoning, utilizing edge-side inference routing. |
| Context Window Management | Implements a sliding window protocol (last 20 turns) to manage token limits and maintain stateful conversational context. |
| Robust Error Handling | Graceful degradation with distinct states for quota exhaustion (HTTP 429), rate limits, network latency, and missing credentials. |

---

## Knowledge Base & Library

A curated repository of 23 high-impact books, processed and structured for rapid knowledge retrieval.

| Verdict | Count | Notable Entries |
|---------|-------|-------|
| 🟢 **Must Read** | 8 | The Almanack of Naval Ravikant, Atomic Habits, Deep Work, The Pragmatic Programmer |
| 🟡 **Recommended** | 10 | The Lean Startup, The Psychology of Money, Think and Grow Rich |
| ⬜ **Optional** | 5 | Shoe Dog, The Subtle Art of Not Giving a F*ck |


---

## Technology Stack

| Layer | Technology | Engineering Rationale |
|-------|-----------|-------|
| Frontend | HTML5, Vanilla JS (ES6+) | Maximum performance, zero runtime overhead, direct DOM manipulation. |
| Styling | CSS3 (Custom Properties, Grid, Flexbox) | Native browser optimizations, eliminating preprocessor build steps. |
| Generative AI | Gemini API | Advanced conversational reasoning with low-latency inference. |
| Tooling | Python 3 | Data pipelines, markdown parsing, and automated HTML generation. |
| Infrastructure | GitHub Pages | High-availability CDN, TLS enforcement, and seamless CI/CD integration. |

---

## Repository Layout

```text
.
├── index.html                              # Root portfolio page
├── My_Story.html                           # Personal story + book library
├── README.md
├── gen_books.py                            # Generates standard book HTML pages
│
├── assets/
│   ├── css/
│   │   ├── styles.css                      # Global design system (~2100 lines)
│   │   └── chatbot.css                     # Chatbot widget styles
│   ├── js/
│   │   ├── script.js                       # Navbar · theme · projects · lightbox · scroll · year
│   │   └── chatbot.js                      # AI chatbot — config · UI · Gemini API · local fallback
│   ├── images/
│   │   ├── Adil.jpeg                       # Profile photo (used site-wide)
│   │   ├── My_Story.jpg                    # Hero image for story page
│   │   ├── project-bangla-diarizz.png
│   │   ├── project-rag-pipeline.png
│   │   ├── project-quantscope.png
│   │   ├── project-ml-pipeline.png
│   │   └── project-training-data-bot.png
│   └── docs/
│       ├── AdilShamim_ML_Engineer_Resume.pdf
│       ├── AdilShamim_AI_Engineer_Resume.pdf
│       └── AdilShamim_DataScientist_Resume.pdf
│
├── books/                                  # 23 individual book notes pages
│
├── scratch/                                # Build-time Python scripts & Markdown sources
│
└── .github/                                # Optional CI workflows
    └── workflows/
        └── deploy.yml                      # CI/CD: validate → link-check → deploy to GitHub Pages
```

---

## Local Development Environment

```bash
# Clone the repository
git clone https://github.com/AdilShamim8/AdilShamim8.github.io.git
cd AdilShamim8.github.io

# Initialize local server (Python 3)
python -m http.server 8000
```

Access the environment at **http://localhost:8000**.

> **Note:** The local HTTP server is required to resolve CORS policies and `ASSET_BASE` pathing for the AI agent module. Do not execute via standard `file://` protocols.

---

## Chatbot Initialization

The agent defaults to its **Deterministic Fallback Engine** upon initialization.
To activate the LLM capabilities, inject the appropriate API key prior to script execution:

```html
<script>
    // Provision API key for GenAI inference
    window.CHATBOT_API_KEY = "YOUR_GEMINI_API_KEY";
</script>
<script src="assets/js/chatbot.js" defer></script>
```

> **Security Protocol:** Ensure API keys remain untracked in source control. For production-scale deployments, transition inference routing through a secure backend proxy to protect key exposure.

---

## Deployment & CI/CD Pipeline

The repository utilizes GitHub Actions (`.github/workflows/deploy.yml`) for automated deployment workflows.

**Pipeline Stages:**
1. **Source Checkout:** Retrieve `main` branch state.
2. **Static Analysis:** Execute HTML validation suites.
3. **Integrity Checks:** Run broken-link detection algorithms.
4. **Artifact Build:** Package static assets.
5. **Deployment:** Push to GitHub Pages infrastructure.

---

## Maintenance Checklist

### Codebase Health
- [ ] Maintain synchronicity between `assets/docs/` résumé files and routing paths.
- [ ] Verify `script.js` and `chatbot.js` project payloads align after any portfolio addition.
- [ ] Validate `prefers-color-scheme` CSS custom properties following palette updates.

### Knowledge Base Pipeline
- [ ] Confirm dynamic filter aggregations in `My_Story.html` post-book ingestion.
- [ ] Pre-commit check: Ensure masterclass node generators (`make(...)`) remain suppressed in `gen_books.py` to prevent data overwrites.

---

## License

[MIT](LICENSE) © Adil Shamim
