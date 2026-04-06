# adilshamim8.github.io

Production-focused personal portfolio for Adil Shamim, an AI/ML Engineer specializing in Bengali speech AI, MLOps, and GenAI systems.

Live site: https://adilshamim8.github.io

## Project Purpose

This repository powers a static portfolio designed for hiring outcomes, not just visual presentation.
It emphasizes:

- Fast role clarity in the first viewport
- Verifiable proof points and impact metrics
- Clean navigation to projects, contact, and resume
- Mobile-first readability and accessibility

## Key Features

- Main portfolio page with role positioning, impact narrative, and project highlights
- Dedicated story page for long-form personal context
- Resume access from multiple high-intent locations
- In-page chatbot with:
	- deterministic local responses for reliability
	- optional Gemini API integration for richer Q&A
- SEO and sharing metadata:
	- Open Graph tags
	- Twitter cards
	- JSON-LD Person schema

## Technology Stack

- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Pages (hosting)
- GitHub Actions (validation + deployment)

## Repository Layout

```text
.
|- index.html
|- My_Story.html
|- assets/
|  |- css/
|  |  |- styles.css
|  |  |- chatbot.css
|  |- js/
|  |  |- script.js
|  |  |- chatbot.js
|  |- images/
|  |- docs/
|     |- AdilShamim_ML_Engineer_Resume.pdf
|     |- AdilShamim_AI_Engineer_Resume.pdf
|     |- AdilShamim_DataScientist_Resume.pdf
|- .github/
|  |- workflows/
|     |- deploy.yml
|- README.md
```

## Local Development

1. Clone the repository.
2. Start a local static server.
3. Open the site in your browser.

```bash
git clone https://github.com/AdilShamim8/AdilShamim8.github.io.git
cd AdilShamim8.github.io
python -m http.server 8000
```

Local URL: http://localhost:8000

## Chatbot Configuration (Optional)

The chatbot works without an API key via local fallback responses.

For Gemini responses, define a client-side key before loading `assets/js/chatbot.js`:

```html
<script>
	window.CHATBOT_API_KEY = "YOUR_GEMINI_API_KEY";
</script>
```

Security note: Do not expose sensitive production API keys in public client code.
For production-grade security, route model calls through a backend proxy.

## Deployment and CI/CD

Deployment is handled by GitHub Actions in `.github/workflows/deploy.yml`.

On push to `main`, the workflow:

1. Checks out the repository
2. Runs HTML validation (`html-validate`)
3. Runs broken link checks (`broken-link-checker`)
4. Uploads the site artifact
5. Deploys to GitHub Pages

## Maintenance Guidelines

- Keep resume links synchronized with files in `assets/docs/`
- Keep role wording consistent across metadata, page copy, and chatbot content
- Re-validate links after any page or filename changes
- Prefer small, focused commits with clear intent

## License

MIT
