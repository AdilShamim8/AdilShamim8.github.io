# AdilShamim8.github.io

> **Personal portfolio of Adil Shamim — AI/ML Engineer**  
> Bengali Speech AI · Production ML Systems · GenAI · Kaggle Competitions Master

**Live site:** https://adilshamim8.github.io

---

## Overview

A production-grade static portfolio built for hiring outcomes, not just visual presentation.  
Every design decision prioritises fast role clarity, verifiable proof points, and zero friction to projects, resume, and contact.

---

## Pages

| Page | Path | Purpose |
|------|------|---------|
| **Portfolio** | `index.html` | Main page — hero, projects, skills, blog, about, contact |
| **My Story & Books** | `My_Story.html` | Personal narrative + interactive reading library |
| **Book Notes** (×21) | `books/*.html` | Dedicated notes page for each book with lessons & verdict |

---

## Features

### Portfolio (`index.html`)
- **Hero section** — role positioning, impact narrative, photo, CTA buttons
- **Projects grid** — 5 production projects rendered from JS data, each with Problem / Constraint / Approach / Numbers breakdown
- **Skills grid** — grouped by Production ML, MLOps, GenAI, Infrastructure, and Domain specialisation
- **Blog list** — highlighted writing and published research paper
- **About section** — biography, work experience timeline, Kaggle achievements, education
- **Contact card** — email CTA and resume link
- **Image lightbox** — click any project or profile image to expand it full-screen
- **Dark / light mode toggle** — persists user preference via `localStorage`; respects `prefers-color-scheme`
- **Mobile navigation** — animated hamburger menu with keyboard and ESC-key support
- **Scroll-reveal animations** — elements fade in on viewport entry via `IntersectionObserver`
- **Smooth anchor scrolling** — offset-corrected for the fixed navbar height
- **Active nav link highlighting** — section-based, driven by `IntersectionObserver`
- **Footer** — copyright year auto-set, social icon links, thanks message

### My Story & Books (`My_Story.html`)
- **Story section** — personal narrative with hero photo and 4 stat highlights
- **Books library** — 21 books filterable by year (2023 / 2024 / 2025) and searchable by title, author, or genre
- **Verdict colour system** — green (Must Read), amber (Recommended), grey (Optional)
- **Live search** — 180 ms debounced input, shows empty-state message on no results
- **Year filter pills** — built dynamically from the `BOOKS` data array

### Book Detail Pages (`books/*.html`) — 21 total
| Must Read | Recommended | Optional |
|-----------|-------------|---------|
| The Almanack of Naval Ravikant | The Lean Startup | Ikigai |
| Atomic Habits | Thinking, Fast and Slow | Shoe Dog |
| Deep Work | Elon Musk | The Subtle Art of Not Giving a F*ck |
| Sapiens | The Psychology of Money | How to Talk to Anyone |
| Zero to One | Rich Dad Poor Dad | Grit |
| The Pragmatic Programmer | How to Win Friends and Influence People | |
| | Think and Grow Rich | |
| | Think Like a Monk | |
| | The Art of Thinking Clearly | |
| | The 48 Laws of Power | |

Each book page includes:
- Genre tag, title, author, year read, read-time estimate, and rating
- Learning summary
- Pull quote
- Key lessons (numbered cards)
- Honest verdict box with "Read if you are…" checklist
- Prev / Next book navigation

### In-Page AI Chatbot (all pages)
- **Local fallback responses** — contact info, skills, projects, experience answered instantly without any API call, for 100% reliability
- **Gemini API integration** (optional) — set `window.CHATBOT_API_KEY` before loading `chatbot.js` for richer, conversational responses
- **Conversation history** — last 20 exchanges sent as context; older messages trimmed automatically
- **Error handling** — specific messages for no API key, quota exhaustion (429), rate limits, and network failures
- **Typing indicator** — animated three-dot indicator while waiting for responses
- **Quick-action buttons** — Skills, Projects, Experience, Contact, Certifications, Achievements
- **Minimize / close / reopen** — full state management with welcome message shown only on first open
- **Asset base path resolution** — avatar image paths resolve correctly whether the chatbot runs on root pages or sub-directory book pages

### SEO & Meta
- Unique `<title>` and `<meta name="description">` on every page
- Open Graph (`og:title`, `og:description`, `og:image`, `og:url`) on all pages
- Twitter Card (`twitter:card`, `twitter:site`, `twitter:title`, `twitter:description`, `twitter:image`) on all pages
- `<link rel="canonical">` on every page
- JSON-LD `Person` schema on `index.html`
- `<meta name="robots" content="index, follow">` site-wide

### Accessibility
- Skip-to-main-content link
- `aria-label`, `aria-expanded`, `aria-hidden`, `aria-pressed` attributes throughout
- Keyboard navigation: ESC closes modals, Enter/Space activates image lightbox
- `prefers-reduced-motion` — animations disabled for users who request it
- `:focus-visible` ring on all interactive elements

---

## Technology Stack

- **HTML5** — semantic elements, ARIA attributes
- **CSS3** — custom properties (design system), CSS Grid, Flexbox, responsive breakpoints
- **Vanilla JavaScript** — ES6+, no build step, no dependencies
- **GitHub Pages** — static hosting
- **GitHub Actions** — automated validation and deployment

---

## Repository Layout

```text
.
├── index.html                          # Main portfolio page
├── My_Story.html                       # Story + books library
├── README.md
├── gen_books.py                        # Script used to generate book pages
├── assets/
│   ├── css/
│   │   ├── styles.css                  # Global design system (2 100+ lines)
│   │   └── chatbot.css                 # Chatbot widget styles
│   ├── js/
│   │   ├── script.js                   # Navbar, theme, projects, lightbox, scroll, year
│   │   └── chatbot.js                  # AI chatbot — config, UI, Gemini API, local fallback
│   ├── images/
│   │   ├── Adil.jpeg                   # Profile photo (used site-wide)
│   │   ├── My_Story.jpg                # Hero image for story page
│   │   ├── project-bangla-diarizz.png
│   │   ├── project-rag-pipeline.png
│   │   ├── project-quantscope.png
│   │   ├── project-ml-pipeline.png
│   │   └── project-training-data-bot.png
│   └── docs/
│       ├── AdilShamim_ML_Engineer_Resume.pdf
│       ├── AdilShamim_AI_Engineer_Resume.pdf
│       └── AdilShamim_DataScientist_Resume.pdf
├── books/
│   ├── atomic-habits.html
│   ├── deep-work.html
│   ├── sapiens.html
│   ├── zero-to-one.html
│   ├── the-pragmatic-programmer.html
│   ├── the-almanack-of-naval-ravikant.html
│   ├── the-lean-startup.html
│   ├── thinking-fast-and-slow.html
│   ├── elon-musk.html
│   ├── the-psychology-of-money.html
│   ├── rich-dad-poor-dad.html
│   ├── how-to-win-friends.html
│   ├── think-and-grow-rich.html
│   ├── think-like-a-monk.html
│   ├── the-art-of-thinking-clearly.html
│   ├── the-48-laws-of-power.html
│   ├── ikigai.html
│   ├── shoe-dog.html
│   ├── the-subtle-art-of-not-giving.html
│   ├── how-to-talk-to-anyone.html
│   └── grit.html
└── .github/
    └── workflows/
        └── deploy.yml                  # CI/CD: validate → deploy to GitHub Pages
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

> **Note:** Open via a local server, not directly as a `file://` URL.  
> The chatbot's `ASSET_BASE` resolver and some browser security policies require an HTTP origin.

---

## Chatbot Configuration (Optional)

The chatbot works out of the box **without an API key** using deterministic local responses for all common questions about skills, projects, experience, and contact.

To enable Gemini-powered conversational responses, inject your key **before** `chatbot.js` loads:

```html
<script>
    window.CHATBOT_API_KEY = "YOUR_GEMINI_API_KEY";
</script>
<script src="assets/js/chatbot.js" defer></script>
```

**Security note:** Never expose production API keys in public client-side code.  
For a production deployment, proxy model calls through a backend service or serverless function instead.

---

## Adding a New Book

1. Create `books/your-book-slug.html` by copying the structure of any existing book page.
2. Add a new entry to the `BOOKS` array in `My_Story.html`:

```javascript
{
    title: "Book Title",
    author: "Author Name",
    year: 2025,                       // year you read it
    verdict: "must-read",             // "must-read" | "recommended" | "optional"
    verdictLabel: "Must Read",
    slug: "books/your-book-slug.html",
    genre: "Category, Sub-category"
}
```

3. The year-filter buttons and book count label update automatically.

---

## Deployment & CI/CD

Deployment is handled by GitHub Actions (`.github/workflows/deploy.yml`).

On every push to `main`, the workflow:
1. Checks out the repository
2. Runs HTML validation (`html-validate`)
3. Runs broken link checks (`broken-link-checker`)
4. Uploads the site artifact
5. Deploys to GitHub Pages

The live site updates within ~1–2 minutes of a push.

---

## Maintenance Checklist

- [ ] Keep resume filenames in `assets/docs/` in sync with all links that reference them
- [ ] Keep role wording consistent across `index.html` copy, chatbot `systemPrompt`, and `CHATBOT_CONFIG.personalInfo`
- [ ] Re-run link validation after renaming any page or file
- [ ] Update the JSON-LD schema in `index.html` if job title or key achievements change
- [ ] When adding new projects, update both the `projects` array in `script.js` and the chatbot's `projects` array in `chatbot.js`

---

## License

MIT
