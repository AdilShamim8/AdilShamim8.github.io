<h1 align="center">
  <br>
  <a href="https://www.adilshamim.me">
    <img src="https://www.adilshamim.me/assets/images/Adil.jpeg" alt="Adil Shamim" width="120" style="border-radius:50%">
  </a>
  <br>
  adilshamim.me
  <br>
</h1>

<p align="center">
  <strong>The portfolio that thinks for itself.</strong>
</p>

<p align="center">
  <a href="https://www.adilshamim.me"><img src="https://img.shields.io/badge/🌐_Live-www.adilshamim.me-2f8f6b?style=for-the-badge" alt="Live Site"></a>
  <a href="https://pages.github.com"><img src="https://img.shields.io/badge/Hosted_on-GitHub_Pages-222?style=for-the-badge&logo=github" alt="GitHub Pages"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="MIT License"></a>
</p>

<p align="center">
  <em>Architecting Production LLM Systems · Agentic Workflows · Deep Learning · MLOps</em>
</p>

---

## The Story

Most portfolios are digital résumés. A list of skills. A grid of project cards. A contact form at the bottom.

This isn't one of those.

**adilshamim.me** was built from a single conviction: *your portfolio should demonstrate the same engineering rigor you bring to production systems.* Not tell people about it — **show** them.

So I didn't install a framework. I didn't reach for a component library. I didn't scaffold from a template. I wrote every line by hand — the same way you'd architect a system you actually care about: deliberately, with intention, with every dependency justified and every abstraction earned.

The result is a portfolio that loads in under a second, adapts to any screen, switches themes without a flash, and — here's the part people don't expect — **has its own AI that can answer questions about me.**

Not a chatbot widget bolted onto the footer. A genuine conversational agent with dual-mode intelligence: deterministic local reasoning for instant responses, and a live Gemini-powered LLM pathway for everything else. It knows my career. It knows my projects. It understands context.

Because if you're going to call yourself an AI engineer, your portfolio should be proof.

---

## What Makes This Different

### 🧠 An AI Agent, Not a Chatbot

Most portfolio "chatbots" are keyword matchers dressed in a chat bubble. This one is an actual dual-mode intelligence system:

- **Mode 1 — Deterministic Engine.** When a visitor asks a common question ("What's your experience?", "Tell me about your projects"), the agent answers instantly — zero latency, zero API calls, zero cost. It routes through a hand-crafted knowledge graph with `O(1)` pattern matching. Works offline. Works without an API key. Works always.

- **Mode 2 — Gemini LLM Agent.** For nuanced, open-ended, or complex questions, the system dynamically upgrades to Google's Gemini API. It maintains a 20-turn sliding context window, manages token limits through intelligent truncation, and degrades gracefully on quota exhaustion, rate limits, or network failures.

The transition between modes is invisible to the user. That's the point.

### ⚡ Zero Dependencies. By Design.

No React. No Next.js. No Tailwind. No `node_modules`. No build step.

Every line of HTML, CSS, and JavaScript was written by hand. Not because frameworks are bad — but because **this is a portfolio for an ML engineer, not a frontend developer.** The architecture decision itself is the statement:

| What You See | What's Underneath |
|---|---|
| Sub-second load times | No framework runtime to download, parse, or hydrate |
| Perfect Lighthouse scores (95+) | Aggressively deferred assets, CDN-delivered fonts, zero render-blocking |
| Seamless dark mode | `localStorage` persistence + `prefers-color-scheme` media query, zero flash |
| Buttery scroll animations | `IntersectionObserver` API + GPU-accelerated CSS transforms |
| Accessible to everyone | Full ARIA compliance, keyboard navigation, `prefers-reduced-motion` respect |

### 📚 A Living Knowledge Base (29 Books and Counting)

This isn't a reading list. It's a **knowledge system.**

Every book I read gets processed — not just listed. The raw markdown notes are parsed through an automated pipeline, converted into semantically structured HTML, wrapped in the site's responsive design system, and published as individual, searchable knowledge nodes.

The library includes:

| Category | Highlights |
|---|---|
| **Must Read** (8) | The Almanack of Naval Ravikant, Atomic Habits, Deep Work, The Pragmatic Programmer |
| **Recommended** (10) | The Lean Startup, The Psychology of Money, Think and Grow Rich, Zero to One |
| **Optional** (5) | Shoe Dog, The Subtle Art of Not Giving a F*ck |
| **Learn Anything** (5) | Make It Stick, A Mind for Numbers, Peak, Ultralearning, The Art of Learning |

The "Learn Anything" collection is a curated series on the science of learning itself — the books that taught me *how* to learn everything else.

Each book page features:
- Full chapter-by-chapter summaries in `Newsreader` serif typography
- Responsive hero sections with genre tags and verdict badges
- Consistent navigation back to the library
- Dark/light mode support
- Mobile-first responsive layout

The library is searchable with a 180ms debounced search engine and filterable by year, genre, and verdict — all implemented in vanilla JavaScript with zero external dependencies.

---

## System Architecture

```
                          ┌──────────────────────────────┐
                          │         Browser Client       │
                          └──────────┬───────────────────┘
                                     │
                    ┌────────────────┼────────────────┐
                    │                │                │
              index.html      My_Story.html    books/*.html
              (Portfolio)     (Story + Library)  (29 Knowledge Nodes)
                    │                │                │
                    └────────────────┼────────────────┘
                                     │
               ┌─────────────────────┼─────────────────────┐
               │                     │                     │
        assets/css/           assets/js/            assets/images/
        ├── styles.css        ├── main.js           ├── Adil.jpeg
        │   (3000+ LOC        │   (UI Engine)       ├── My_Story.jpg
        │    Design System)   │                     └── project-*.png
        └── chatbot.css       └── chatbot.js
            (Agent UI)            (Dual-Mode AI Engine)
                                       │
                              ┌────────┴────────┐
                              │                 │
                        Local Fallback     Gemini API
                        (Deterministic)   (LLM Inference)
```

### The Design System (3000+ Lines of Intentional CSS)

Not a utility framework. Not generated. A hand-authored design system built on CSS custom properties, fluid typography scales, CSS Grid, Flexbox, and native browser capabilities.

It powers:
- **Responsive layouts** that flow naturally from mobile to ultrawide
- **Theme switching** through CSS custom property cascade — one toggle, every color updates
- **Micro-animations** using `IntersectionObserver`-triggered reveals and hardware-accelerated transforms
- **Book page templates** with `.book-custom-prose` typography, `.book-hero` layouts, and `.verdict-badge` components

---

## Feature Breakdown

### Portfolio (`index.html`)

| Feature | Implementation |
|---|---|
| **Hero Section** | Split-layout with floating achievement badges, responsive photo card, dual CTA routing |
| **Projects Matrix** | Production deployments rendered via structured JS payloads — Problem → Architecture → Impact |
| **Skills Taxonomy** | Categorized by domain: Production ML, MLOps, GenAI, Infrastructure, Core CS |
| **Image Lightbox** | Native `<dialog>` element — no library, no z-index battles, full accessibility |
| **Contact** | Mailto integration + optimized PDF résumé delivery (3 role-specific versions) |

### My Story & Library (`My_Story.html`)

| Feature | Implementation |
|---|---|
| **Live Search** | 180ms debounced matching across title, author, and genre — `O(N)` with instant DOM updates |
| **Dynamic Filtering** | State-managed year filter pills, dynamically aggregated from the knowledge base |
| **Reactive Count** | Live book count badge updates on every filter/search intersection |
| **Learn Anything Section** | Curated collection of 5 deep-dive books on the science of learning |

### Book Pages (`books/*.html` + `books/Learn_Anything/*.html`)

| Feature | Implementation |
|---|---|
| **Automated Pipeline** | Markdown → Python (`markdown` library) → Templated HTML with full design system integration |
| **Typography** | `Newsreader` serif for prose, `Inter` sans-serif for UI — dual-font system |
| **Responsive Layout** | `.book-page-inner` at 720px max-width, fluid typography via `clamp()` |
| **Navigation** | "Back to Books" link, consistent header/footer, theme toggle persistence |

---

## Technology Stack

| Layer | Choice | Why |
|---|---|---|
| **Frontend** | HTML5 + Vanilla ES6+ JavaScript | Zero runtime overhead. Direct DOM manipulation. No framework tax. |
| **Styling** | CSS3 Custom Properties + Grid + Flexbox | Native browser optimizations. No preprocessor. No build step. |
| **AI Engine** | Gemini API + Local Fallback | Dual-mode: instant deterministic responses + LLM reasoning |
| **Automation** | Python 3 | Markdown parsing, book HTML generation, data pipeline scripts |
| **Typography** | Google Fonts (Inter + Newsreader) | Professional dual-font pairing. Preconnected for zero-delay. |
| **Icons** | Font Awesome 6.4 (CDN) | Comprehensive icon library. Single stylesheet. |
| **Infrastructure** | GitHub Pages | Global CDN, automatic TLS, CI/CD integration |

---

## Repository Layout

```
adilshamim.me/
├── index.html                          # The portfolio — where first impressions happen
├── My_Story.html                       # The narrative — where the story unfolds
├── README.md                           # You are here
├── gen_books.py                        # Book page generation pipeline
│
├── assets/
│   ├── css/
│   │   ├── styles.css                  # The design system (3000+ lines, hand-authored)
│   │   └── chatbot.css                 # AI agent interface styling
│   ├── js/
│   │   ├── main.js                     # UI engine: theme · navigation · lightbox · animations
│   │   └── chatbot.js                  # AI agent: config · inference · context · fallback
│   ├── images/
│   │   ├── Adil.jpeg                   # Profile photo
│   │   ├── My_Story.jpg                # Story page hero
│   │   └── project-*.png               # Project screenshots
│   └── docs/
│       ├── AdilShamim_AI_Engineer_Resume.pdf
│       ├── AdilShamim_ML_Engineer_Resume.pdf
│       └── AdilShamim_DataScientist_Resume.pdf
│
├── books/                              # 24 individual book notes
│   ├── Learn_Anything/                 # 5 curated deep-dives on learning science
│   │   ├── A_Mind_for_Numbers.html
│   │   ├── make-it-stick.html
│   │   ├── Peak.html
│   │   ├── Ultralearning.html
│   │   └── The_Art_of_Learning.html
│   ├── atomic-habits.html
│   ├── deep-work.html
│   ├── the-almanack-of-naval-ravikant.html
│   └── ... (21 more)
│
└── .github/
    └── workflows/
        └── deploy.yml                  # CI/CD: validate → check → build → deploy
```

---

## Getting Started

### Prerequisites

- Python 3.x (for local server and book generation)
- A modern browser
- (Optional) A Gemini API key for full AI agent capabilities

### Run Locally

```bash
# Clone
git clone https://github.com/AdilShamim8/AdilShamim8.github.io.git
cd AdilShamim8.github.io

# Serve
python -m http.server 8000
```

Open **http://localhost:8000** and you're live.

> **Why a local server?** The AI agent module requires HTTP protocol to resolve CORS policies and asset paths. Opening `index.html` directly via `file://` will break the chatbot. This is by design — the same constraint exists in any production system.

### Activate the AI Agent

The agent starts in **Deterministic Mode** by default — instant, offline, zero-cost. To unlock LLM capabilities:

```html
<script>
    window.CHATBOT_API_KEY = "YOUR_GEMINI_API_KEY";
</script>
<script src="assets/js/chatbot.js" defer></script>
```

> **⚠️ Security:** Never commit API keys to source control. For production, route inference through a secure backend proxy.

---

## CI/CD Pipeline

Every push to `main` triggers an automated deployment through GitHub Actions:

```
Push to main
    │
    ├── 1. Source Checkout        → Retrieve latest main branch state
    ├── 2. HTML Validation        → Static analysis suite
    ├── 3. Link Integrity Check   → Broken-link detection
    ├── 4. Asset Packaging        → Bundle static assets
    └── 5. Deploy                 → Push to GitHub Pages CDN
```

---

## Maintenance

### When You Add a New Project
- [ ] Update the project payload in `main.js`
- [ ] Add the project screenshot to `assets/images/`
- [ ] Update the chatbot knowledge base in `chatbot.js`

### When You Add a New Book
- [ ] Write the summary in Markdown
- [ ] Run the generation pipeline (or use the Python conversion script)
- [ ] Update the book array in `My_Story.html`
- [ ] Verify search and filter functionality

### Periodic Health Checks
- [ ] Sync résumé files in `assets/docs/` with download links
- [ ] Validate dark mode consistency after CSS changes
- [ ] Test chatbot fallback responses after knowledge base updates

---

## The Philosophy

Steve Jobs once said: *"Design is not just what it looks like and feels like. Design is how it works."*

This portfolio is built on that belief. Every architectural decision — from the zero-dependency frontend to the dual-mode AI agent to the automated book pipeline — exists because it solves a real problem, not because it's trendy.

The code is the craft. The site is the proof. The story is still being written.

---

<p align="center">
  <strong>Built with intention by <a href="https://www.adilshamim.me">Adil Shamim</a></strong>
  <br>
  <em>Senior AI/ML Engineer · Dhaka, Bangladesh</em>
  <br><br>
  <a href="https://github.com/AdilShamim8">GitHub</a> · 
  <a href="https://linkedin.com/in/adilshamim">LinkedIn</a> · 
  <a href="https://www.kaggle.com/adilshamim8">Kaggle</a> · 
  <a href="https://adilshamim8.medium.com">Medium</a> · 
  <a href="mailto:adil.shamim.8@gmail.com">Email</a>
</p>

<p align="center">
  <sub>© 2026 Adil Shamim · <a href="LICENSE">MIT License</a></sub>
</p>
