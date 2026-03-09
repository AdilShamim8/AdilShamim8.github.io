# Adil Shamim — ML Engineer Portfolio

Production-ready personal portfolio website for Adil Shamim, focused on ML engineering credibility, project proof, and recruiter-friendly conversion.

**Live:** https://adilshamim8.github.io/

## Overview

This site presents Adil's profile, technical depth, achievements, projects, and contact pathways in a fast, responsive, and clean single-page experience, with an additional long-form story page.

The content emphasizes:
- shipped AI products
- production ML systems (pipelines, Dockerized services, semantic search, recommendation engines)
- measurable business impact (+10% recommender lift)
- conference publication and Kaggle performance

## Key Features

- **Professional Hero Section** with concise value proposition and 2026 hiring statement
- **Experience & Education** section covering:
	- Founder (Toolly)
	- Conference Paper (1st Author)
	- Freelance Machine Learning Engineer
	- Kaggle Competitions / Master-level profile
	- B.Sc. in CSE (BNIST)
- **Dynamic Project Rendering** from a JavaScript data source (`script.js`)
- **Technical Skills Matrix** grouped by practical engineering domains
- **Latest Writings** integration (Medium)
- **Contact + Resume CTA** for recruiter and client outreach
- **Dark/Light Theme** with persisted user preference (`localStorage`)
- **Scroll Reveal Animations** for content entrance
- **Image Lightbox** for hero/story/project images
- **Embedded AI Chatbot** with portfolio-aware context

## Information Architecture

### Main Page (`index.html`)
1. Home (`#home`)
2. Latest Writings (`#blog`)
3. Experience & Education (`#experience`)
4. Projects (`#projects`)
5. Technical Skills (`#skills`)
6. Contact (`#contact`)

### Story Page (`My_Story.html`)
- Narrative profile with journey, milestones, and highlight counters

## Tech Stack

- **HTML5** (semantic structure + metadata)
- **CSS3** (custom properties, responsive layout, theming)
- **Vanilla JavaScript** (UI behavior + dynamic content)
- **Font Awesome** (icons)
- **Google Fonts** (`Inter`, `Newsreader`)

## Core Files

- `index.html` — primary portfolio page, navigation, SEO/OG metadata, JSON-LD profile data
- `My_Story.html` — long-form personal narrative page
- `styles.css` — design system tokens, components, layout, responsiveness
- `script.js` — navbar state, theme toggle, dynamic projects, reveal logic, lightbox, current year
- `chatbot.css` — chatbot styling
- `chatbot.js` — AI assistant behavior, portfolio context, API request handling
- `Resume/AdilShamim_ML_Engineer_Resume.pdf` — downloadable resume

## Dynamic Content Model

Projects are defined in `script.js` as a structured array with:
- `title`
- `description`
- `image`
- `tags`
- `demo` (optional)
- `code`

The UI is generated at runtime and injected into `.projects-grid`, enabling easy updates without editing HTML card markup.

## SEO & Social Metadata

The site includes:
- canonical URL
- Open Graph tags
- Twitter card metadata
- schema.org JSON-LD (`Person`)

Update these in `index.html` when profile links, title, or branding change.

## Local Development

### Option 1: Open directly
Open `index.html` in a browser for quick edits.

### Option 2: Run a local static server
- Python: `python -m http.server 8000`
- Node: `npx serve .`

Then open `http://localhost:8000`.

## Chatbot Setup (Optional)

The chatbot reads the API key from `window.CHATBOT_API_KEY`.

Add before loading `chatbot.js`:

```html
<script>
	window.CHATBOT_API_KEY = "YOUR_API_KEY";
</script>
```

Without a valid key, chatbot API requests cannot authenticate.

## Customization Guide

- **Profile content:** update `index.html` and `My_Story.html`
- **Projects:** update the `projects` array in `script.js`
- **Theme tokens:** update `:root` and `[data-theme="dark"]` in `styles.css`
- **Chatbot persona/context:** update `CHATBOT_CONFIG` in `chatbot.js`
- **SEO/schema:** update metadata and JSON-LD in `index.html`

## License
This project is available under the [MIT License](License).
