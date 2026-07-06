<!-- ╔══════════════════════════════════════════════════════════════════════╗ -->
<!-- ║                         adilshamim.me                              ║ -->
<!-- ║         Personal Portfolio · AI Agent · Knowledge Library           ║ -->
<!-- ╚══════════════════════════════════════════════════════════════════════╝ -->

<div align="center">

  <a href="https://www.adilshamim.me">
    <!-- <img src="https://www.adilshamim.me/assets/images/Adil.jpeg" alt="Adil Shamim" width="140" style="border-radius:50%"> -->
  </a>

  # adilshamim.me

  **The portfolio that thinks for itself.**

  [![Live Site](https://img.shields.io/badge/🌐_Live-adilshamim.me-0d9488?style=for-the-badge)](https://www.adilshamim.me)
  [![GitHub Pages](https://img.shields.io/badge/Hosted_on-GitHub_Pages-181717?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com)
  [![License](https://img.shields.io/badge/License-MIT-3b82f6?style=for-the-badge)](LICENSE)

  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](#technology-stack)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](#technology-stack)
  [![JavaScript](https://img.shields.io/badge/ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](#technology-stack)
  [![Gemini API](https://img.shields.io/badge/Gemini_API-8E75B2?style=flat-square&logo=google&logoColor=white)](#-dual-mode-ai-agent)
  [![Python](https://img.shields.io/badge/Python_3-3776AB?style=flat-square&logo=python&logoColor=white)](#technology-stack)

  <br>

  *Architecting Production LLM Systems · Agentic Workflows · Deep Learning · MLOps*

  <br>

  [**Explore the Site →**](https://www.adilshamim.me)&nbsp;&nbsp;·&nbsp;&nbsp;[**View Resume →**](https://www.adilshamim.me/assets/docs/AdilShamim_AI_Engineer_Resume.pdf)&nbsp;&nbsp;·&nbsp;&nbsp;[**Read My Story →**](https://www.adilshamim.me/My_Story.html)

</div>

<br>

---

<br>

## 📌 Table of Contents

<details>
<summary>Click to expand</summary>

- [The Story](#-the-story)
- [What Makes This Different](#-what-makes-this-different)
  - [Dual-Mode AI Agent](#-dual-mode-ai-agent)
  - [Zero Dependencies. By Design.](#-zero-dependencies-by-design)
  - [Living Knowledge Base](#-living-knowledge-base-32-books-and-counting)
- [System Architecture](#-system-architecture)
- [Feature Breakdown](#-feature-breakdown)
- [Technology Stack](#-technology-stack)
- [Repository Layout](#-repository-layout)
- [Getting Started](#-getting-started)
- [CI/CD Pipeline](#-cicd-pipeline)
- [Performance](#-performance)
- [Maintenance Guide](#-maintenance-guide)
- [About the Author](#-about-the-author)
- [License](#-license)

</details>

<br>

## 🎯 The Story

> *Most portfolios are digital résumés. A list of skills. A grid of project cards. A contact form at the bottom.*
>
> *This isn't one of those.*

**adilshamim.me** was built from a single conviction: *your portfolio should demonstrate the same engineering rigor you bring to production systems.* Not tell people about it — **show** them.

I didn't install a framework. I didn't reach for a component library. I didn't scaffold from a template. I wrote every line by hand — the same way you'd architect a system you actually care about: **deliberately, with intention, with every dependency justified and every abstraction earned.**

The result:

- ⚡ Loads in **under a second**
- 📱 Adapts to **any screen**
- 🌗 Switches themes **without a flash**
- 🤖 Has its own **AI agent** that can answer questions about me

Not a chatbot widget bolted onto the footer. A genuine conversational agent with dual-mode intelligence: deterministic local reasoning for instant responses, and a live Gemini-powered LLM pathway for everything else. It knows my career. It knows my projects. It understands context.

**Because if you're going to call yourself an AI engineer, your portfolio should be proof.**

<br>

---

<br>

## ✨ What Makes This Different

### 🧠 Dual-Mode AI Agent

Most portfolio "chatbots" are keyword matchers dressed in a chat bubble. This one is an **actual dual-mode intelligence system**:

```
┌─────────────────────────────────────────────────────────────────┐
│                      User Query                                 │
└──────────────────────┬──────────────────────────────────────────┘
                       │
                       ▼
              ┌────────────────┐
              │  Intent Router  │
              └───┬────────┬───┘
                  │        │
         Common   │        │   Complex/Open-ended
                  ▼        ▼
     ┌────────────────┐  ┌──────────────────────┐
     │   MODE 1       │  │   MODE 2             │
     │   Deterministic│  │   Gemini LLM         │
     │   Engine       │  │   Agent              │
     │                │  │                      │
     │  • O(1) lookup │  │  • 20-turn context   │
     │  • Zero cost   │  │  • Token management  │
     │  • Offline     │  │  • Graceful fallback │
     │  • Instant     │  │  • Rate-limit aware  │
     └────────┬───────┘  └──────────┬───────────┘
              │                     │
              └──────────┬──────────┘
                         ▼
                ┌────────────────┐
                │   Response     │
                │   (Seamless)   │
                └────────────────┘
```

| Mode | How It Works | When It Fires |
|:-----|:-------------|:--------------|
| **Deterministic** | Hand-crafted knowledge graph with `O(1)` pattern matching. Zero latency, zero API calls, zero cost. Works offline. | Common questions: *"What's your experience?"*, *"Tell me about your projects"* |
| **Gemini LLM** | Google's Gemini API with 20-turn sliding context window, intelligent token truncation, and graceful degradation on quota/rate limits/network failures. | Nuanced, open-ended, or complex queries |

> **The transition between modes is invisible to the user. That's the point.**

<br>

### ⚡ Zero Dependencies. By Design.

No React. No Next.js. No Tailwind. No `node_modules`. No build step.

Every line of HTML, CSS, and JavaScript was written by hand. Not because frameworks are bad — but because **this is a portfolio for an ML engineer, not a frontend developer.** The architecture decision itself is the statement:

| What You See | What's Underneath |
|:-------------|:------------------|
| Sub-second load times | No framework runtime to download, parse, or hydrate |
| Perfect Lighthouse scores (95+) | Aggressively deferred assets, CDN-delivered fonts, zero render-blocking |
| Seamless dark mode | `localStorage` persistence + `prefers-color-scheme` media query, zero flash |
| Buttery scroll animations | `IntersectionObserver` API + GPU-accelerated CSS transforms |
| Accessible to everyone | Full ARIA compliance, keyboard navigation, `prefers-reduced-motion` respect |

<br>

### 📚 Living Knowledge Base (32 Books and Counting)

This isn't a reading list. It's a **knowledge system.**

Every book I read gets processed — not just listed. The raw markdown notes are parsed through an automated pipeline, converted into semantically structured HTML, wrapped in the site's responsive design system, and published as individual, searchable knowledge nodes.

<details>
<summary><b>📖 Full Library Catalog</b></summary>

<br>

| Category | Count | Highlights |
|:---------|:-----:|:-----------|
| **Must Read** | 8 | The Almanack of Naval Ravikant, Atomic Habits, Deep Work, The Pragmatic Programmer |
| **Recommended** | 10 | The Lean Startup, The Psychology of Money, Think and Grow Rich, Zero to One |
| **Optional** | 5 | Shoe Dog, The Subtle Art of Not Giving a F*ck |
| **Learn Anything** | 5 | Make It Stick, A Mind for Numbers, Peak, Ultralearning, The Art of Learning |
| **Biography** | 4 | Steve Jobs, Elon Musk (2 editions) |

</details>

Each book page features:
- 📝 Full chapter-by-chapter summaries in `Newsreader` serif typography
- 🎨 Responsive hero sections with genre tags and verdict badges
- 🔗 Consistent navigation back to the library
- 🌗 Dark/light mode support
- 📱 Mobile-first responsive layout

The library is searchable with a **180ms debounced search engine** and filterable by year, genre, and verdict — all in vanilla JavaScript with zero external dependencies.

<br>

---

<br>

## 🏗️ System Architecture

```
                           ┌──────────────────────────────────┐
                           │          Browser Client           │
                           └──────────────┬───────────────────┘
                                          │
                     ┌────────────────────┼────────────────────┐
                     │                    │                    │
              index.html          My_Story.html         books/*.html
              (Portfolio)        (Story + Library)    (32 Knowledge Nodes)
                     │                    │                    │
                     └────────────────────┼────────────────────┘
                                          │
                ┌─────────────────────────┼──────────────────────────┐
                │                         │                          │
         assets/css/               assets/js/                assets/images/
         ├── styles.css            ├── script.js             ├── Adil.jpeg
         │   (3,139 LOC            │   (UI Engine)           ├── My_Story.jpeg
         │    Design System)       │                         └── project-*.png
         └── chatbot.css           └── chatbot.js
             (Agent UI)                (Dual-Mode AI Engine)
                                            │
                                   ┌────────┴────────┐
                                   │                 │
                            Local Fallback      Gemini API
                            (Deterministic)    (LLM Inference)
```

### The Design System (3,139 Lines of Intentional CSS)

Not a utility framework. Not generated. A **hand-authored design system** built on:

| Foundation | Purpose |
|:-----------|:--------|
| CSS Custom Properties | Theme switching through cascade — one toggle, every color updates |
| CSS Grid + Flexbox | Responsive layouts that flow naturally from mobile to ultrawide |
| `clamp()` Fluid Typography | Scales smoothly across all viewport sizes |
| `IntersectionObserver` | Trigger animations only when elements enter the viewport |
| Hardware-accelerated Transforms | 60fps animations on all devices |

<br>

---

<br>

## 🔥 Feature Breakdown

### Portfolio (`index.html`)

| Feature | Implementation |
|:--------|:---------------|
| **Hero Section** | Split-layout with floating achievement badges, responsive photo card, dual CTA routing |
| **Philosophy Grid** | Three-column numbered philosophy cards with reveal animations |
| **Projects Accordion** | Production deployments rendered via structured JS payloads — Problem → Architecture → Impact |
| **AI Curriculum Table** | 5 numbered production AI projects (101–105) with tags and GitHub links |
| **Skills Taxonomy** | Categorized by domain: Production ML, MLOps, GenAI, Infrastructure, Data & Search, Domain Specialization |
| **Writing Section** | Medium blog feed with 4 featured articles |
| **Career Timeline** | Vertical timeline with dot-and-line connectors, badges, and reveal animations |
| **Research Card** | Published paper with metadata, abstract, tags, and preprint link |
| **Image Lightbox** | Native `<dialog>` element — no library, no z-index battles, full accessibility |
| **Contact Split** | Two-column layout with email, WhatsApp, LinkedIn cards |

### My Story & Library (`My_Story.html`)

| Feature | Implementation |
|:--------|:---------------|
| **Live Search** | 180ms debounced matching across title, author, and genre — `O(N)` with instant DOM updates |
| **Dynamic Filtering** | State-managed year filter pills, dynamically aggregated from the knowledge base |
| **Reactive Count** | Live book count badge updates on every filter/search intersection |
| **Learn Anything Section** | Curated collection of 5 deep-dive books on the science of learning |

### Book Pages (`books/*.html`)

| Feature | Implementation |
|:--------|:---------------|
| **Typography** | `Newsreader` serif for prose, `Inter` sans-serif for UI — dual-font system |
| **Responsive Layout** | `.book-page-inner` at 720px max-width, fluid typography via `clamp()` |
| **Navigation** | "Back to Books" link, consistent header/footer, theme toggle persistence |

### AI Agent (`assets/js/chatbot.js`)

| Feature | Implementation |
|:--------|:---------------|
| **Dual-Mode Engine** | Deterministic fallback + Gemini LLM with seamless transition |
| **Context Management** | 20-turn sliding window with intelligent token truncation |
| **Graceful Degradation** | Quota exhaustion → rate limit → network failure → local fallback |
| **Knowledge Base** | Hand-crafted graph covering career, projects, skills, education |

<br>

---

<br>

## 🛠️ Technology Stack

| Layer | Choice | Why |
|:------|:-------|:----|
| **Frontend** | HTML5 + Vanilla ES6+ | Zero runtime overhead. Direct DOM manipulation. No framework tax. |
| **Styling** | CSS3 Custom Properties + Grid + Flexbox | Native browser optimizations. No preprocessor. No build step. 3,139 LOC. |
| **AI Engine** | Gemini API + Local Fallback | Dual-mode: instant deterministic responses + LLM reasoning |
| **Typography** | Google Fonts (`Inter` + `Newsreader`) | Professional dual-font pairing. Preconnected for zero-delay. |
| **Icons** | Font Awesome 6.4 (CDN) | Comprehensive icon library. Single stylesheet. |
| **Hosting** | GitHub Pages + Custom Domain | Global CDN, automatic TLS, CI/CD integration |
| **SEO** | JSON-LD, Open Graph, Twitter Cards | Structured data for rich search results and social sharing |

<br>

---

<br>

## 📂 Repository Layout

```
adilshamim.me/
│
├── 📄 index.html                           # Portfolio — where first impressions happen
├── 📄 My_Story.html                        # Narrative — story & book library
├── 📄 README.md                            # ← You are here
├── 📄 License                              # MIT License
├── 📄 robots.txt                           # Search engine directives
├── 📄 sitemap.xml                          # XML sitemap for crawlers
│
├── 📁 assets/
│   ├── 📁 css/
│   │   ├── styles.css                      # Design system (3,139 lines, hand-authored)
│   │   └── chatbot.css                     # AI agent interface styling
│   ├── 📁 js/
│   │   ├── script.js                       # UI engine: theme · navigation · lightbox · animations
│   │   └── chatbot.js                      # AI agent: config · inference · context · fallback
│   ├── 📁 images/
│   │   ├── Adil.jpeg                       # Profile photo
│   │   ├── My_Story.jpeg                   # Story page hero
│   │   └── project-*.png                   # Project screenshots (5 images)
│   └── 📁 docs/
│       ├── AdilShamim_AI_Engineer_Resume.pdf
│       ├── AdilShamim_ML_Engineer_Resume.pdf
│       └── AdilShamim_DataScientist_Resume.pdf
│
├── 📁 books/                               # 27 individual book notes
│   ├── 📁 Learn_Anything/                  # 5 curated deep-dives on learning science
│   │   ├── A_Mind_for_Numbers.html
│   │   ├── make-it-stick.html
│   │   ├── Peak.html
│   │   ├── Ultralearning.html
│   │   └── The_Art_of_Learning.html
│   ├── atomic-habits.html
│   ├── deep-work.html
│   ├── the-almanack-of-naval-ravikant.html
│   ├── sapiens.html
│   ├── thinking-fast-and-slow.html
│   └── ... (22 more)
│
└── 📁 Notes/
    └── Notes.html                          # Personal notes page
```

> **53 files** · **~6.3 MB total** · Zero `node_modules`

<br>

---

<br>

## 🚀 Getting Started

### Prerequisites

| Requirement | Purpose |
|:------------|:--------|
| Python 3.x | Local development server |
| Modern browser | Chrome, Firefox, Safari, Edge |
| *(Optional)* Gemini API key | Full AI agent LLM capabilities |

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/AdilShamim8/AdilShamim8.github.io.git
cd AdilShamim8.github.io

# 2. Start the development server
python -m http.server 8000

# 3. Open in browser
# → http://localhost:8000
```

> [!NOTE]
> **Why a local server?** The AI agent module requires HTTP protocol to resolve CORS policies and asset paths. Opening `index.html` directly via `file://` will break the chatbot. This is by design — the same constraint exists in any production system.

### Activate the AI Agent

The agent starts in **Deterministic Mode** by default — instant, offline, zero-cost. To unlock LLM capabilities:

```html
<script>
    window.CHATBOT_API_KEY = "YOUR_GEMINI_API_KEY";
</script>
<script src="assets/js/chatbot.js" defer></script>
```

> [!WARNING]
> **Security:** Never commit API keys to source control. For production, route inference through a secure backend proxy.

<br>

---

<br>

## ⚙️ CI/CD Pipeline

Every push to `main` triggers an automated deployment through GitHub Actions:

```
Push to main
    │
    ├── 1. 📥 Source Checkout        → Retrieve latest main branch state
    ├── 2. ✅ HTML Validation        → Static analysis suite
    ├── 3. 🔗 Link Integrity Check   → Broken-link detection
    ├── 4. 📦 Asset Packaging        → Bundle static assets
    └── 5. 🚀 Deploy                 → Push to GitHub Pages CDN
```

<br>

---

<br>

## 📊 Performance

| Metric | Score |
|:-------|:------|
| **Lighthouse Performance** | 95+ |
| **First Contentful Paint** | < 1s |
| **Total Bundle Size** | ~6.3 MB (including all images & PDFs) |
| **External Dependencies** | 2 (Google Fonts CDN + Font Awesome CDN) |
| **JavaScript Frameworks** | 0 |
| **Build Tools** | 0 |

<br>

---

<br>

## 🔧 Maintenance Guide

<details>
<summary><b>📋 When You Add a New Project</b></summary>

- [ ] Update the project payload in `script.js`
- [ ] Add the project screenshot to `assets/images/`
- [ ] Update the chatbot knowledge base in `chatbot.js`
- [ ] Add noscript fallback entry in `index.html`

</details>

<details>
<summary><b>📖 When You Add a New Book</b></summary>

- [ ] Write the summary in Markdown
- [ ] Convert to HTML (manually or via pipeline)
- [ ] Update the book array in `My_Story.html`
- [ ] Verify search and filter functionality

</details>

<details>
<summary><b>🔍 Periodic Health Checks</b></summary>

- [ ] Sync résumé files in `assets/docs/` with download links
- [ ] Validate dark mode consistency after CSS changes
- [ ] Test chatbot fallback responses after knowledge base updates
- [ ] Update `sitemap.xml` with new pages
- [ ] Run Lighthouse audit for performance regression

</details>

<br>

---

<br>

## 💡 Philosophy

> *"Design is not just what it looks like and feels like. Design is how it works."*
> — **Steve Jobs**

This portfolio is built on that belief. Every architectural decision — from the zero-dependency frontend to the dual-mode AI agent to the book knowledge system — exists because it solves a real problem, not because it's trendy.

**The code is the craft. The site is the proof. The story is still being written.**

<br>

---

<br>

## 👨‍💻 About the Author

<div align="center">

  **Adil Shamim**

  *AI/ML Engineer & Founder · Dhaka, Bangladesh*

  [![GitHub](https://img.shields.io/badge/GitHub-AdilShamim8-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AdilShamim8)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-adilshamim8-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/adilshamim8)
  [![Kaggle](https://img.shields.io/badge/Kaggle-Master-20BEFF?style=for-the-badge&logo=kaggle&logoColor=white)](https://www.kaggle.com/adilshamim8)
  [![Medium](https://img.shields.io/badge/Medium-@adilshamim8-000000?style=for-the-badge&logo=medium&logoColor=white)](https://adilshamim8.medium.com)
  [![X](https://img.shields.io/badge/X-@adil__shamim8-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/adil_shamim8)
  [![Email](https://img.shields.io/badge/Email-adilshamim696@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:adilshamim696@gmail.com)

</div>

<br>

### Highlights

| | |
|:--|:--|
| 🏆 **Kaggle Master** | Top 1% (29/4,082) in Road Accident Risk · 26 competitions total |
| 📄 **Published Researcher** | First-author at BUET CSE Fest 2026 — Bengali Speaker Diarization |
| 🚀 **Founder** | [ReWoo](https://rewoo.tech/) (AI startup) · [Toolly](https://www.toolly.tech/) (AI tool platform, 400+ tools) |
| 💼 **AI Engineer** | Remote for UK-based company · +10% sales lift via production recommender system |
| 🎓 **Education** | B.Sc. in CSE at BNIST (Feb 2023 — Present) |

<br>

---

<br>

## 📜 License

This project is licensed under the **MIT License** — see the [License](License) file for details.

```
MIT License · Copyright (c) 2025 Adil Shamim
```

<br>

---

<div align="center">

  **Built with intention, not with dependencies.**

  ⭐ *If this portfolio inspires your own work, consider leaving a star.*

  <br>

  <sub>Made with ❤️ by <a href="https://www.adilshamim.me">Adil Shamim</a> · © 2025–2026</sub>

</div>
