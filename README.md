# AdilShamim8.github.io

[![Live Site](https://img.shields.io/badge/Live%20Site-adilshamim8.github.io-2f8f6b?style=flat-square&logo=github)](https://adilshamim8.github.io)
[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-222?style=flat-square&logo=github-pages)](https://pages.github.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

> **Personal portfolio of Adil Shamim — AI/ML Engineer**  
> Bengali Speech AI · Production ML Systems · GenAI · Kaggle Competitions

**Live:** https://www.adilshamim.me/

---

## Table of Contents

- [Overview](#overview)
- [Site Architecture](#site-architecture)
- [Page Reference](#page-reference)
- [Feature Breakdown](#feature-breakdown)
- [Book Library](#book-library)
- [Technology Stack](#technology-stack)
- [Repository Layout](#repository-layout)
- [Local Development](#local-development)
- [Chatbot Configuration](#chatbot-configuration)
- [Adding a New Book](#adding-a-new-book)
- [Deployment & CI/CD](#deployment--cicd)
- [Maintenance Checklist](#maintenance-checklist)

---

## Overview

A production-grade static portfolio built for hiring outcomes, not just visual presentation. Every design decision prioritises fast role clarity, verifiable proof points, and zero friction to projects, résumé, and contact.

Key principles behind the site:

- **Zero dependencies** — HTML, CSS, and Vanilla JS only. No frameworks, no build step, no `node_modules`.
- **Quality checks ready** — repository includes guidance for HTML validation and broken-link checks before deployment.
- **Performance first** — all assets are inlined, loaded from CDN, or `defer`-loaded. Lighthouse performance ≥ 95.
- **Accessibility baked in** — skip links, ARIA attributes, keyboard navigation, and `prefers-reduced-motion` support.
- **Dual-mode chatbot** — works offline via local fallback responses; upgrades to Gemini-powered conversation when an API key is present.

---

## Site Architecture

```
Browser
  │
  ├── index.html          ← Root portfolio page
  ├── My_Story.html       ← Personal narrative + interactive book library
  └── books/
        ├── [slug].html   ← 23 individual book notes pages
        └── ...
              │
              ├── assets/css/styles.css      ← Global design system (~2100 lines)
              ├── assets/css/chatbot.css     ← Chatbot widget styles
              ├── assets/js/script.js        ← Core UI interactions
              └── assets/js/chatbot.js       ← AI chatbot engine
```

All pages share the same global CSS design system (custom properties, typography scale, dark/light mode) loaded via a single `<link>`. Page-specific styles are scoped in `<style>` blocks inside each HTML file.

---

## Page Reference

| Page | Path | Purpose |
|------|------|---------|
| **Portfolio** | `index.html` | Hero · Projects · Skills · Blog · About · Contact |
| **My Story & Books** | `My_Story.html` | Personal narrative + filterable, searchable book library |
| **Book Notes** (×23) | `books/*.html` | Deep-dive notes page per book — lessons, verdict, prose summary |

---

## Feature Breakdown

### Portfolio (`index.html`)

| Feature | Implementation |
|---------|----------------|
| Hero section | Role positioning, impact narrative, profile photo, dual CTA buttons |
| Projects grid | 5 production projects rendered from a JS data array; each card has Problem / Constraint / Approach / Numbers breakdown |
| Skills grid | Grouped by: Production ML · MLOps · GenAI · Infrastructure · Domain |
| Blog list | Highlighted writing + published research paper link |
| About section | Biography · work experience timeline · Kaggle achievements · education |
| Contact card | Email CTA and résumé link |
| Image lightbox | Click any project or profile image → full-screen overlay; ESC / backdrop-click to close |
| Dark / light mode | Toggle persists via `localStorage`; initialises from `prefers-color-scheme` |
| Mobile navigation | Animated hamburger; keyboard + ESC support; `aria-expanded` driven |
| Scroll-reveal | Elements fade in on viewport entry via `IntersectionObserver` |
| Smooth anchors | Offset-corrected for fixed navbar height |
| Active nav link | Section-based, `IntersectionObserver` driven |
| Footer | Auto-updating copyright year · social icon links |

### My Story & Books (`My_Story.html`)

| Feature | Implementation |
|---------|----------------|
| Story section | Personal narrative with hero photo and 4 highlighted stat cards |
| Book library | 23 books rendered from the in-page `BOOKS` JS array |
| Year filter | Pills built dynamically from unique years in `BOOKS`; active state managed |
| Live search | 180 ms debounced input matching title, author, and genre; empty-state message |
| Verdict system | Colour-coded: 🟢 Must Read · 🟡 Recommended · ⬜ Optional |
| Book count | Badge updates live with filter/search result count |

### Book Detail Pages (`books/*.html`)

Each book page is a standalone, fully-styled HTML document containing:

- Genre tag · Title · Author · Year read · Rating
- Learning summary (prose)
- Pull quote block
- Numbered key-lesson cards with hover micro-animations
- "Adil's Verdict" box with a "Read if you are…" checklist
- Previous / Next book navigation bar

**Masterclass pages** (5 books) additionally contain a `book-custom-prose` section with comprehensive chapter-by-chapter notes (~50–100 KB of formatted content), injected from Markdown via Python conversion scripts.

### In-Page AI Chatbot (all pages)

| Feature | Detail |
|---------|--------|
| Offline fallback | Contact info, skills, projects, and experience answered instantly with zero API calls |
| Gemini API | Set `window.CHATBOT_API_KEY` before `chatbot.js` loads for full conversational responses |
| Context window | Last 20 exchanges sent as context; older messages trimmed automatically |
| Error handling | Distinct messages for: no key · quota exhaustion (429) · rate limits · network failure |
| UX | Typing indicator · quick-action buttons · minimize/close/reopen state management |
| Path resolution | `ASSET_BASE` resolves avatar and icon paths correctly from both root and `/books/` sub-pages |

### SEO & Meta

- Unique `<title>` and `<meta name="description">` on every page
- Open Graph (`og:title`, `og:description`, `og:image`, `og:url`) site-wide
- Twitter Card (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`) site-wide
- `<link rel="canonical">` on every page
- JSON-LD `Person` schema on `index.html`
- `<meta name="robots" content="index, follow">` site-wide

### Accessibility

- Skip-to-main-content link on every page
- `aria-label`, `aria-expanded`, `aria-hidden`, `aria-pressed` throughout
- Keyboard navigation: ESC closes modals, Enter/Space activates lightbox
- `prefers-reduced-motion` — all CSS animations respect this media query
- `:focus-visible` ring on every interactive element

---

## Book Library

23 books across 3 reading years (2023–2026), categorised by verdict.

| Verdict | Count | Books |
|---------|-------|-------|
| 🟢 **Must Read** | 8 | The Almanack of Naval Ravikant · Atomic Habits · Deep Work · Sapiens · Zero to One · The Pragmatic Programmer · Principles · Thinking, Fast and Slow |
| 🟡 **Recommended** | 10 | The Lean Startup · The Psychology of Money · Elon Musk · Rich Dad Poor Dad · How to Win Friends · Think and Grow Rich · Think Like a Monk · The Art of Thinking Clearly · The 48 Laws of Power |
| ⬜ **Optional** | 5 | Ikigai · Shoe Dog · The Subtle Art of Not Giving a F*ck · How to Talk to Anyone · Grit |

### Masterclass Pages (deep-dive notes)

Five books have comprehensive chapter-by-chapter masterclass notes injected via a Python Markdown-to-HTML pipeline, making them significantly richer than standard book pages:

| Book | File | Notes size |
|------|------|-----------|
| Principles — Ray Dalio | `books/principles.html` | ~94 KB |
| Sapiens — Yuval Noah Harari | `books/sapiens.html` | ~112 KB |
| Zero to One — Peter Thiel | `books/zero-to-one.html` | ~110 KB |
| The Pragmatic Programmer — Hunt & Thomas | `books/the-pragmatic-programmer.html` | ~91 KB |
| Thinking, Fast and Slow — Daniel Kahneman | `books/thinking-fast-and-slow.html` | ~100 KB |

---

## Technology Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| Markup | HTML5 | Semantic elements, ARIA attributes throughout |
| Styling | CSS3 | Custom properties design system · Grid · Flexbox · responsive breakpoints |
| Scripting | Vanilla JS (ES6+) | No framework, no build step, no dependencies |
| Fonts | Google Fonts | Inter (body) + Newsreader (headings) |
| Icons | Font Awesome 6.4 | Loaded from Cloudflare CDN |
| Hosting | GitHub Pages | Static, free, HTTPS enforced |
| CI/CD | Optional GitHub Actions | Can run HTML validation + link checking when workflow is configured |
| Book generation | Python 3 | `gen_books.py` generates standard book pages; `scratch/convert_*.py` injects masterclass notes |

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
│   ├── atomic-habits.html
│   ├── deep-work.html
│   ├── elon-musk.html
│   ├── grit.html
│   ├── how-to-talk-to-anyone.html
│   ├── how-to-win-friends.html
│   ├── ikigai.html
│   ├── principles.html                     # ★ Masterclass page
│   ├── rich-dad-poor-dad.html
│   ├── sapiens.html                        # ★ Masterclass page
│   ├── shoe-dog.html
│   ├── the-48-laws-of-power.html
│   ├── the-almanack-of-naval-ravikant.html
│   ├── the-art-of-thinking-clearly.html
│   ├── the-lean-startup.html
│   ├── the-pragmatic-programmer.html       # ★ Masterclass page
│   ├── the-psychology-of-money.html
│   ├── the-subtle-art-of-not-giving.html
│   ├── think-and-grow-rich.html
│   ├── think-like-a-monk.html
│   ├── thinking-fast-and-slow.html         # ★ Masterclass page
│   └── zero-to-one.html                    # ★ Masterclass page
│
├── scratch/                                # Build-time Python scripts & Markdown sources
│   ├── principles.md                       # Raw masterclass notes → principles.html
│   ├── sapiens.md                          # Raw masterclass notes → sapiens.html
│   ├── zero-to-one.md                      # Raw masterclass notes → zero-to-one.html
│   ├── the-pragmatic-programmer.md         # Raw masterclass notes → the-pragmatic-programmer.html
│   ├── thinking-fast-and-slow.md           # Raw masterclass notes → thinking-fast-and-slow.html
│   ├── convert_principles.py
│   ├── convert_sapiens.py
│   ├── convert_zero_to_one.py
│   ├── convert_pragmatic_programmer.py
│   └── convert_thinking_fast_and_slow.py
│
└── .github/                                # Optional (if CI workflow is configured)
    └── workflows/
        └── deploy.yml                      # CI/CD: validate → link-check → deploy to GitHub Pages
```

---

## Local Development

```bash
# Clone the repository
git clone https://github.com/AdilShamim8/AdilShamim8.github.io.git
cd AdilShamim8.github.io

# Serve with Python (no install required)
python -m http.server 8000

# Or with Node.js
npx serve .
```

Open **http://localhost:8000** in your browser.

> **Important:** Always open via a local HTTP server, not as a `file://` URL.  
> The chatbot's `ASSET_BASE` path resolver and browser security policies (CORS, `localStorage`) require an HTTP origin.

---

## Chatbot Configuration

The chatbot works **out of the box without an API key**, using deterministic local responses for all common questions about skills, projects, experience, and contact information.

To enable Gemini-powered conversational responses, inject your key **before** `chatbot.js` loads:

```html
<script>
    window.CHATBOT_API_KEY = "YOUR_GEMINI_API_KEY";
</script>
<script src="assets/js/chatbot.js" defer></script>
```

> **Security note:** Never commit API keys to a public repository.  
> For a production deployment, proxy all model calls through a backend service or serverless function.

---

## Adding a New Book

There are two workflows, depending on the depth of notes you want to publish.

---

### Workflow A — Standard Page (Generator)

Use this for books with a summary, key lessons, and a verdict.

1. **Add the book's data to `gen_books.py`** using the existing `make(...)` call pattern.

2. **Run the generator:**
   ```bash
   python gen_books.py
   ```
   This creates `books/your-book-slug.html`.

3. **Register the book in `My_Story.html`** by adding an entry to the `BOOKS` array:
   ```javascript
   {
       title:        "Book Title",
       author:       "Author Name",
       year:         2025,           // year you read it
       verdict:      "must-read",    // "must-read" | "recommended" | "optional"
       verdictLabel: "Must Read",
       slug:         "books/your-book-slug.html",
       genre:        "Category, Sub-category"
   }
   ```

   The year-filter pills and book count badge update automatically.

---

### Workflow B — Masterclass Page (Deep-Dive Notes)

Use this for books where you want to publish comprehensive chapter-by-chapter notes. This is the workflow used for *Principles*, *Sapiens*, *Zero to One*, *The Pragmatic Programmer*, and *Thinking, Fast and Slow*.

1. **Generate (or manually create) the base HTML page** once using Workflow A.

2. **Comment out the `make(...)` call in `gen_books.py`** for this book so future generator runs do not overwrite the page.

3. **Write the masterclass notes in Markdown:**
   ```
   scratch/your-book.md
   ```

4. **Create a Python injection script** at `scratch/convert_your_book.py`:
   ```python
   import markdown, re

   with open("scratch/your-book.md", "r", encoding="utf-8") as f:
       text = f.read()
   html_content = markdown.markdown(text, extensions=["tables"])

   with open("books/your-book.html", "r", encoding="utf-8") as f:
       content = f.read()

   start = re.search(r'<div class="book-section">\s*<p class="book-section-label">Learning Summary</p>', content)
   end   = re.search(r'<hr class="book-divider">', content)

   if start and end:
       new_section = f'''<div class="book-section">
   <p class="book-section-label">Comprehensive Summary & Notes</p>
   <h2 class="book-section-heading">A Masterclass on Your Book Title</h2>
   <div class="book-custom-prose">
   {html_content}
   </div>
   </div>\n'''
       content = content[:start.start()] + new_section + content[end.start():]

   with open("books/your-book.html", "w", encoding="utf-8") as f:
       f.write(content)
   print("Done.")
   ```

5. **Run the injection script:**
   ```bash
   python scratch/convert_your_book.py
   ```

6. **Register the book in `My_Story.html`** as in Workflow A, Step 3.

> **Dependencies:** The injection scripts require the `markdown` package.  
> Install with: `pip install markdown`

---

## Deployment & CI/CD

If `.github/workflows/deploy.yml` is configured, deployment can be automated via GitHub Actions.

A typical workflow on push to `main`:

1. Checks out the repository
2. Runs HTML validation (`html-validate`)
3. Runs broken link checks (`broken-link-checker`)
4. Uploads the site as a Pages artifact
5. Deploys to GitHub Pages

---

## Maintenance Checklist

### Content Consistency
- [ ] Keep résumé filenames in `assets/docs/` in sync with every link referencing them
- [ ] Keep role wording consistent across `index.html` hero copy, chatbot `systemPrompt`, and `CHATBOT_CONFIG.personalInfo`
- [ ] Update the JSON-LD `Person` schema in `index.html` if job title or key achievements change

### Codebase Health
- [ ] Re-run link validation after renaming any page or file
- [ ] When adding new projects, update both the `projects` array in `script.js` **and** the `projects` array in `chatbot.js`
- [ ] Verify `prefers-color-scheme` and dark mode CSS variables in `styles.css` after any palette change

### Book Library
- [ ] After adding a new book, confirm it appears correctly under the right year-filter pill in `My_Story.html`
- [ ] For masterclass pages, ensure the corresponding `make(...)` call in `gen_books.py` is commented out before committing
- [ ] Check that `books/` navigation links (Prev / Next) remain consistent after adding, removing, or reordering books

---

## License

[MIT](LICENSE) © Adil Shamim
