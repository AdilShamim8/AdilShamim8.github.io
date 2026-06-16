// Resolve asset base path from this script's absolute URL.
// Works correctly whether the page is at root or in a sub-directory (e.g. /books/).
const ASSET_BASE = (function () {
    var scripts = document.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; i++) {
        var src = scripts[i].src; // always absolute URL in the browser
        if (src && src.indexOf('chatbot.js') !== -1) {
            // Strip 'assets/js/chatbot.js' to get the site root
            return src.replace(/assets\/js\/chatbot\.js[^]*$/, '');
        }
    }
    return ''; // fallback: same directory as page
}());

// Chatbot Configuration and Personal Information
const CHATBOT_CONFIG = {
    // SECURITY: Do not expose API keys in client-side code.
    // Use a serverless proxy (Cloudflare Worker, Vercel Edge Function) in production.
    // The chatbot will fall back to local responses when no API key is configured.
    apiKey: (window.CHATBOT_API_KEY || '').trim(),
    model: 'gemini-2.0-flash-exp',
    apiEndpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent',
    requestTimeoutMs: 25000,
    
    // Personal Information Context
    personalInfo: {
        name: "Adil Shamim",
        title: "AI/ML Engineer & Data Scientist",
        location: "Dhaka, Bangladesh",
        phone: "+880 1321073452",
        email: "adilshamim696@gmail.com",
        education: "B.Sc. in Computer Science & Engineering — BNIST (February 2023 — Present)",
        experience: "AI/ML Engineer & Data Scientist with 2+ years of hands-on experience building and shipping production LLM systems, RAG pipelines, and agentic workflows.",
        kaggleStatus: "Kaggle Master — Top 1% (29/4,082) in Road Accident Risk. Completed 22 competitions.",
        languages: ["English (Fluent — IELTS in progress)", "Bengali (Native)", "Hindi (Conversational)"],
        
        bio: `I'm Adil Shamim — an AI/ML Engineer and Data Scientist with over two years of hands-on experience. I build practical ML systems that ship: production RAG pipelines, agentic workflows, Dockerized inference services, and tracked experiments that teams actually use. I built a recommendation engine that delivered a verified +10% client sales lift in 90 days. I founded Toolly — a live AI tools platform with 400+ tools, built and maintained solo. I'm a Kaggle Master (Top 1%, 29/4,082 in Road Accident Risk) and a published 1st-author researcher in Bengali speech AI (56% inference speedup, BUET CSE Fest 2026). I'm comfortable across the full AI stack: multi-provider LLM orchestration, vector databases, agent architecture, Dockerized deployment, and production monitoring.`,
        
        skills: {
            programmingAndData: [
                "Python (Advanced)",
                "SQL (Advanced)",
                "Java",
                "JavaScript (functional)",
                "Bash",
                "Pandas",
                "NumPy"
            ],
            modelingAndML: [
                "PyTorch",
                "TensorFlow",
                "scikit-learn",
                "XGBoost",
                "LightGBM",
                "CatBoost"
            ],
            statisticsAndAnalysis: [
                "Regression",
                "Classification",
                "Time-Series",
                "Hypothesis Testing",
                "A/B Testing",
                "Feature Engineering"
            ],
            mlopsAndDeployment: [
                "MLflow",
                "ZenML",
                "Docker",
                "FastAPI",
                "Flask",
                "Streamlit",
                "AWS",
                "CI/CD",
                "GitHub Actions",
                "A/B testing pipelines",
                "Systems Design"
            ],
            nlpAndSpeech: [
                "HuggingFace Transformers",
                "Whisper",
                "wav2vec2",
                "pyannote.audio",
                "WeSpeaker",
                "BERT",
                "spaCy",
                "SBERT",
                "Bengali NLP",
                "Fine-tuning & domain adaptation"
            ],
            generativeAI: [
                "LLMs (OpenAI, Anthropic, Gemini, Ollama)",
                "Agentic AI (LangChain, LangGraph, MCP)",
                "Tool-calling agents",
                "Memory & state management",
                "Failure-mode-aware agent design",
                "Prompt Engineering (production scale)",
                "RAG pipeline design",
                "Retrieval quality evaluation",
                "Context window management",
                "Qdrant vector store"
            ],
            visualization: [
                "Matplotlib",
                "Seaborn",
                "Plotly",
                "Tableau",
                "PowerBI (basic)"
            ]
        },
        
        projects: [
            {
                name: "Bangla Diarizz",
                github: "https://github.com/AdilShamim8/Bangla-Diarizz",
                paper: "https://www.researchgate.net/publication/401194830_Bangla_Diarizz_Domain-Adapted_Speaker_Diarization_for_Bengali_Long-Form_Audio",
                technologies: ["PyTorch", "pyannote", "WeSpeaker", "wav2vec2", "HuggingFace Transformers"],
                badge: "Published Research",
                description: "1st Author paper at BUET CSE Fest 2026. Production-grade Bengali speaker diarization. Fine-tuned segmentation model, replaced embeddings with WeSpeaker ResNet34-LM for domain adaptation. Result: DER 0.19 (dev) / 0.286 (private LB), 3.4× real-time on CPU, 56% wall-clock speed improvement. Ranked #19/100+ teams."
            },
            {
                name: "Production-Grade RAG",
                github: "https://github.com/AdilShamim8/Production-grade-RAG",
                technologies: ["LangChain", "Qdrant", "FastAPI", "Inngest", "OpenAI", "Gemini", "Ollama"],
                badge: "Production GenAI",
                description: "Enterprise RAG pipeline: PDF upload → recursive chunking → multi-provider embeddings → Qdrant vector store with deterministic IDs for idempotent re-ingestion → top-K retrieval → source-aware LLM generation with grounded, auditable answers. Includes query routing and context window management."
            },
            {
                name: "QuantScope",
                github: "https://github.com/AdilShamim8/QuantScope",
                technologies: ["Python", "FastAPI", "LangChain", "Docker", "pytest"],
                badge: "Production System",
                description: "Global Quantitative Stock Analysis Platform supporting 35+ exchanges. Strict architectural separation with zero LLM lock-in. Engineered a 6-provider LLM fallback chain (OpenAI → Anthropic → Google → Ollama → Mistral → Cohere) with template-based static fallback. Fully tested with 33 tests."
            },
            {
                name: "Production ML Pipeline",
                github: "https://github.com/AdilShamim8/Prices_Predictor_System",
                technologies: ["ZenML", "MLflow", "XGBoost", "Docker", "FastAPI"],
                badge: "MLOps",
                description: "End-to-end House Price Predictor ML pipeline: ingest → preprocess → train → evaluate → register → serve. Orchestrated with ZenML and MLflow for tracking. Included cross-validation and hyperparameter tuning. Deployed final model as a Dockerized FastAPI inference service with structured logging."
            },
            {
                name: "Training Data Bot",
                github: "https://github.com/AdilShamim8/Training-Data-Bot",
                technologies: ["Python", "LLM Engineering", "PDF Ingestion", "Quality Scoring"],
                badge: "LLM Engineering",
                description: "Automated LLM fine-tuning dataset pipeline. Ingests raw documents (PDF, plain text, URLs) → applies multi-signal quality scoring (length, deduplication, coherence) → outputs structured datasets formatted for direct use in fine-tuning. Zero manual curation required."
            }
        ],
        
        socialMedia: {
            linkedin: "https://www.linkedin.com/in/adilshamim8",
            github: "https://github.com/AdilShamim8",
            kaggle: "https://www.kaggle.com/adilshamim8",
            twitter: "https://x.com/adil_shamim8",
            medium: "https://adilshamim8.medium.com/",
            toolly: "https://www.toolly.tech/",
            researchgate: "https://www.researchgate.net/publication/401194830_Bangla_Diarizz_Domain-Adapted_Speaker_Diarization_for_Bengali_Long-Form_Audio"
        },
        
        workExperience: [
            {
                title: "Founder & AI/ML Engineer",
                company: "Toolly",
                url: "https://www.toolly.tech/",
                period: "Jun 2025 — Present",
                description: "Founded Toolly to make discovering, submitting, and sharing AI tools effortless.",
                responsibilities: [
                    "Designed and shipped toolly.tech — a live AI tools directory with 400+ tools, 15 categories, a community submission pipeline, and an integrated Learn AI hub; all built and maintained solo.",
                    "Engineered the full production stack: frontend (HTML/CSS/JS), tool submission and moderation system, search/filter logic, and usage analytics — 206+ commits over 10 months.",
                    "Built and deployed Toolly Studio — a Streamlit + Bria AI image generation app with batch export, Docker packaging, and a one-command demo flow for non-technical users."
                ]
            },
            {
                title: "1st Author — Conference Paper",
                company: "BUET CSE Fest 2026",
                period: "2026",
                description: "Bangla Diarizz: Domain-Adapted Speaker Diarization for Bengali Long-Form Audio",
                achievements: [
                    "Achieved 56% wall-clock speed improvement — reduced inference from 1h 22m to ~36m across 14 test audio files.",
                    "Fine-tuned segmentation model on competition dataset; replaced speaker embeddings with WeSpeaker ResNet34-LM for targeted domain adaptation.",
                    "Achieved DER 0.286 on private leaderboard. Ranked #19 / 100+ teams on DL Sprint 4.0.",
                    "Deployed interactive Gradio demo on HuggingFace Spaces with timeline visualization and downloadable RTTM output."
                ]
            },
            {
                title: "ML Engineer — Independent Contractor",
                company: "Freelance",
                period: "Jan 2025 — May 2025",
                responsibilities: [
                    "Built a hybrid recommendation engine (collaborative filtering ALS + content-based TF-IDF embeddings) for a local retail client.",
                    "Deployed system as a Flask API to production.",
                    "Delivered a verified +10% client sales lift within 90 days, quantified against pre/post client sales data."
                ]
            },
            {
                title: "Kaggle Master",
                company: "Kaggle",
                url: "https://www.kaggle.com/adilshamim8",
                period: "Ongoing",
                responsibilities: [
                    "Top 1% globally — Rank 29/4,082 in Predicting Road Accident Risk.",
                    "Top 2% — Rank 38/2,581 in Predicting BPM of Songs.",
                    "Completed 22 competitions. Published ML notebooks and datasets; hosted competitions to engage the community."
                ]
            }
        ],
        
        certifications: [
            "Machine Learning — Stanford University (Coursera)",
            "CS50: Introduction to Computer Science — Harvard",
            "Python for Data Science, AI & Development — IBM",
            "Career Essentials in Generative AI — Microsoft + LinkedIn",
            "Machine Learning Pipelines with Azure ML Studio (Coursera)"
        ],
        kaggleAchievements: [
            "Kaggle Master (22 competitions completed)",
            "Predicting Road Accident Risk — Top 1% (29/4,082 participants)",
            "Predicting Beats-per-Minute of Songs — Ranked Top 2% (38/2,581 participants)",
            "Published ML notebooks and datasets; hosted competitions to engage the community."
        ],
        
        achievements: [
            "Founder of Toolly — a live AI tools platform with 400+ curated tools, built solo.",
            "1st Author of 'Bangla Diarizz' — Conference Paper on Bengali Speaker Diarization (56% inference speedup).",
            "Top 1% on Kaggle (29/4,082) in Road Accident Risk.",
            "Built a recommender system that delivered a verified +10% client sales lift in 90 days.",
            "Deployed Toolly Studio, an image generation app with one-command demo flow for non-technical users."
        ],
        
        currentActivities: [
            "Architecting multi-provider LLM orchestration and RAG pipelines.",
            "Building practical ML systems with Docker, FastAPI, and robust vector databases like Qdrant.",
            "Developing agentic workflows using LangChain, LangGraph, and MCP.",
            "Competing in Kaggle data science competitions."
        ],
        
        coursework: [
            "Linear Algebra",
            "Calculus",
            "Probability & Statistics",
            "Data Structures & Algorithms",
            "Artificial Intelligence",
            "Machine Learning",
            "Data Science",
            "Operating Systems",
            "Database Systems",
            "System Design Projects"
        ],
        
        interests: [
            "Agentic AI Engineering",
            "LLM & Generative AI Systems",
            "MLOps and Model Deployment",
            "ML/DL & Speech AI",
            "Recommendation Systems"
        ],
        
        resumePath: "assets/docs/AdilShamim_AI_Engineer_Resume.pdf",
        website: "https://www.adilshamim.me/"
    },
    
    // System Prompt for Gemini
    systemPrompt: `You are Adil Shamim's personal AI assistant embedded in his portfolio at adilshamim.me. You are warm, professional, and concise. You speak with confidence about Adil's work because you know it deeply.

**PERSONALITY:**
- Be conversational and approachable — not robotic or overly formal
- Keep answers focused and well-structured (use bullet points and bold text)
- After answering, suggest a natural follow-up topic the visitor might find interesting
- Never fabricate information. If unsure, say so and suggest contacting Adil directly

**ABOUT ADIL SHAMIM:**
- Name: Adil Shamim
- Title: AI/ML Engineer & Data Scientist
- Location: Dhaka, Bangladesh
- Phone: +880 1321073452
- Email: adilshamim696@gmail.com
- Education: B.Sc. in Computer Science & Engineering — BNIST (February 2023 — Present)
- Relevant Coursework: Linear Algebra, Calculus, Probability & Statistics, Data Structures & Algorithms, Operating Systems, Database Systems, System Design, AI, ML, Data Science
- Languages: English (Fluent — IELTS in progress), Bengali (Native), Hindi (Conversational)
- Website: https://www.adilshamim.me
- LinkedIn: https://www.linkedin.com/in/adilshamim8
- GitHub: https://github.com/AdilShamim8
- Kaggle: https://www.kaggle.com/adilshamim8
- Twitter/X: https://x.com/adil_shamim8
- Medium: https://adilshamim8.medium.com

**PROFESSIONAL SUMMARY:**
AI/ML Engineer & Data Scientist with 2+ years of experience building and shipping production LLM systems, RAG pipelines, and agentic workflows. Published 1st-author conference paper achieving 56% inference speedup (BUET CSE Fest 2026). Kaggle Master — Top 1% (29/4,082) in Road Accident Risk. Founded Toolly — a live AI tools platform with 400+ tools, built and maintained solo. Comfortable across the full AI stack: multi-provider LLM orchestration, vector databases, agent architecture, Dockerized deployment, and production monitoring. Delivered a verified +10% client sales lift via a deployed recommendation engine.

**SKILLS (from all 3 role-specific resumes):**
- Programming & Data: Python (Advanced), SQL, Java, JavaScript, Bash, Pandas, NumPy
- Statistics: Regression, Classification, Time-Series, Hypothesis Testing, A/B Testing, Feature Engineering
- ML/DL & Speech AI: PyTorch, TensorFlow, scikit-learn, XGBoost, LightGBM, CatBoost, HuggingFace Transformers, Whisper, wav2vec2, pyannote.audio, WeSpeaker, BERT, Fine-tuning & domain adaptation, Bengali NLP
- MLOps & Deployment: MLflow, ZenML, Docker, FastAPI, Flask, Streamlit, AWS, CI/CD, GitHub Actions, A/B testing pipelines, Systems Design, REST APIs
- Agentic AI & LLMs: LangChain, LangGraph, Tool-calling agents, MCP (Model Context Protocol), Memory & state management, Failure-mode-aware agent design, Qdrant, Multi-provider LLM orchestration (OpenAI, Anthropic, Gemini, Ollama, Mistral, Cohere), Prompt Engineering at production scale, RAG pipeline design, Retrieval quality evaluation, Context window management
- NLP: spaCy, SBERT, Bengali NLP
- Visualization: Matplotlib, Seaborn, Plotly, Tableau, PowerBI

**PROJECTS:**
1. **Bangla Diarizz** (1st Author Paper at BUET CSE Fest 2026) — Production-grade Bengali speaker diarization. Fine-tuned segmentation model, replaced embeddings with WeSpeaker ResNet34-LM for domain adaptation. DER 0.19 (dev) / 0.286 (private LB). 56% wall-clock speed improvement (1h22m → ~36m). Ranked #19/100+ teams. Deployed Gradio demo on HuggingFace Spaces. GitHub: https://github.com/AdilShamim8/Bangla-Diarizz
2. **Production-Grade RAG Pipeline** — Enterprise RAG: PDF upload → recursive chunking → multi-provider embeddings (OpenAI, Gemini, Ollama) → Qdrant vector store with deterministic IDs for idempotent re-ingestion → top-K retrieval → source-aware LLM generation. Includes query routing, context window management, and source attribution. GitHub: https://github.com/AdilShamim8/Production-grade-RAG
3. **QuantScope** — Global Quantitative Stock Analysis Platform. 35+ exchanges. Strict architectural separation (core/ has zero imports from llm/ or api/). 6-provider LLM fallback chain (OpenAI → Anthropic → Google → Ollama → Mistral → Cohere) with template-based static fallback. 33 tests, zero vendor lock-in. GitHub: https://github.com/AdilShamim8/QuantScope
4. **Production ML Pipeline** — End-to-end House Price Predictor: ingest → preprocess → train → evaluate → register → serve. ZenML orchestration + MLflow tracking. Cross-validation and hyperparameter tuning. Dockerized FastAPI inference service. GitHub: https://github.com/AdilShamim8/Prices_Predictor_System
5. **Training Data Bot** — Automated LLM fine-tuning dataset pipeline. Ingests PDF/text/URLs → multi-signal quality scoring (length, dedup, coherence) → structured output for fine-tuning. Zero manual curation. GitHub: https://github.com/AdilShamim8/Training-Data-Bot

**EXPERIENCE:**
1. Founder & AI/ML Engineer — Toolly (Jun 2025 — Present): Designed and shipped toolly.tech — live AI tools directory with 400+ tools, 15 categories, community submission pipeline, Learn AI hub. 206+ commits. Built Toolly Studio (Streamlit + Bria AI image gen). URL: https://www.toolly.tech
2. 1st Author — Conference Paper (BUET CSE Fest 2026): "Bangla Diarizz" — Bengali speaker diarization with 56% inference speedup. ResearchGate: https://www.researchgate.net/publication/401194830
3. ML Engineer — Independent Contractor (Jan–May 2025): Built hybrid recommendation engine (ALS + TF-IDF). Deployed as Flask API. Verified +10% client sales lift in 90 days.
4. Kaggle Master: Top 1% (29/4,082) in Road Accident Risk. Top 2% in BPM prediction (38/2,581). 22 competitions completed. Published notebooks and hosted competitions.

**CERTIFICATIONS:**
- Machine Learning — Stanford University (Coursera)
- CS50: Introduction to Computer Science — Harvard
- Python for Data Science, AI & Development — IBM
- Career Essentials in Generative AI — Microsoft + LinkedIn
- Machine Learning Pipelines with Azure ML Studio — Coursera

**KNOWLEDGE BASE & BOOK LIBRARY:**
Adil maintains a curated library of 29 book summaries on his portfolio, covering topics like productivity, business, psychology, and learning science. Notable collections include:
- "Learn Anything" series (5 books on the science of learning): Make It Stick, A Mind for Numbers, Peak, Ultralearning, The Art of Learning
- Must-Read picks: The Almanack of Naval Ravikant, Atomic Habits, Deep Work, The Pragmatic Programmer
- All book notes are full chapter-by-chapter summaries available at adilshamim.me/books/

**RESUMES:**
Adil has 3 role-specific resumes available for download:
- AI Engineer Resume: https://www.adilshamim.me/assets/docs/AdilShamim_AI_Engineer_Resume.pdf
- ML Engineer Resume: https://www.adilshamim.me/assets/docs/AdilShamim_ML_Engineer_Resume.pdf
- Data Scientist Resume: https://www.adilshamim.me/assets/docs/AdilShamim_DataScientist_Resume.pdf

**RESPONSE FORMAT RULES:**
1. Use bullet points and bold text for readability
2. When sharing links, use plain URLs (e.g., https://github.com/AdilShamim8). Do NOT use markdown link syntax.
3. Keep responses concise — aim for 3-6 bullet points, not walls of text
4. End with a natural follow-up suggestion when appropriate
`
};

// Chatbot Class
class AdilChatbot {
    constructor() {
        this.messages = [];
        this.isMinimized = false;
        this.isTyping = false;
        this.conversationHistory = [];
        this.hasBeenOpened = false;
        this.maxHistoryItems = 20;
        
        this.init();
    }
    
    init() {
        // Do not show the chatbot icon in My_Story and any book pages
        const path = window.location.pathname.toLowerCase();
        if (path.indexOf('my_story') !== -1 || path.indexOf('books/') !== -1 || path.indexOf('books\\') !== -1) {
            return;
        }

        this.createChatbotUI();
        this.attachEventListeners();
        // Don't load welcome message on init - only when user first opens chatbot
    }
    
    createChatbotUI() {
        // Check if chatbot already exists
        if (document.getElementById('chatbot-container')) {
            return;
        }
        
        const chatbotHTML = `
            <div id="chatbot-container" class="chatbot-container hidden">
                <div class="chatbot-header" id="chatbot-header">
                    <div class="chatbot-header-left">
                        <img src="${ASSET_BASE}assets/images/Adil.jpeg" alt="Adil" class="chatbot-avatar">
                        <div class="chatbot-title-container">
                            <h3>Adil's AI Assistant</h3>
                            <div class="chatbot-status">
                                <span class="status-dot"></span>
                                <span>Online</span>
                            </div>
                        </div>
                    </div>
                    <div class="chatbot-controls">
                        <button class="chatbot-control-btn" id="chatbot-minimize" title="Minimize">
                            <i class="fas fa-minus"></i>
                        </button>
                        <button class="chatbot-control-btn" id="chatbot-close" title="Close">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                
                <div class="chatbot-body" id="chatbot-body">
                    <!-- Messages will be inserted here -->
                </div>
                
                <div class="quick-actions" id="quick-actions">
                    <button class="quick-action-btn" data-message="Tell me about Adil's technical skills"> Skills</button>
                    <button class="quick-action-btn" data-message="What projects has Adil worked on?"> Projects</button>
                    <button class="quick-action-btn" data-message="Tell me about Adil's work experience"> Experience</button>
                    <button class="quick-action-btn" data-message="How can I contact Adil?"> Contact</button>
                    <button class="quick-action-btn" data-message="Show me Adil's certifications"> Certifications</button>
                    <button class="quick-action-btn" data-message="What are Adil's achievements?"> Achievements</button>
                </div>
                
                <div class="chatbot-footer">
                    <input 
                        type="text" 
                        class="chatbot-input" 
                        id="chatbot-input" 
                        placeholder="Ask me anything about Adil..."
                        autocomplete="off"
                    >
                    <button class="chatbot-send-btn" id="chatbot-send">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
            
            <button class="chatbot-toggle-btn active" id="chatbot-toggle">
                <img src="https://www.toolly.tech/logo/Toolly_logo.png" alt="Toolly" class="chatbot-toggle-logo">
            </button>
        `;
        
        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    }
    
    attachEventListeners() {
        const sendBtn = document.getElementById('chatbot-send');
        const input = document.getElementById('chatbot-input');
        const minimizeBtn = document.getElementById('chatbot-minimize');
        const closeBtn = document.getElementById('chatbot-close');
        const toggleBtn = document.getElementById('chatbot-toggle');
        const header = document.getElementById('chatbot-header');
        const quickActions = document.querySelectorAll('.quick-action-btn');
        
        // Send message
        sendBtn?.addEventListener('click', () => this.handleSendMessage());
        input?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.handleSendMessage();
            }
        });
        
        // Quick actions
        quickActions.forEach(btn => {
            btn.addEventListener('click', () => {
                const message = btn.dataset.message;
                this.sendMessage(message);
            });
        });
        
        // Minimize
        minimizeBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleMinimize();
        });
        
        // Close
        closeBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            this.closeChatbot();
        });
        
        // Toggle
        toggleBtn?.addEventListener('click', () => {
            this.openChatbot();
        });
        
        // Header click to toggle minimize
        header?.addEventListener('click', () => {
            if (this.isMinimized) {
                this.toggleMinimize();
            }
        });
    }
    
    loadWelcomeMessage() {
        const welcomeMsg = `Hi! I'm Adil's AI assistant. 

I can help you learn about:
• **Technical Skills** - Python, ML, MLOps, Docker
• **Projects** - Price Predictor, Toolly Studio, Resume Screening
• **Experience** - 2+ years in AI/ML Engineering
• **Certifications** - Stanford ML, Harvard CS50, and more
• **Contact Info** - Email, LinkedIn, GitHub, Kaggle

Try the quick action buttons below or ask me anything! `;
        this.addMessage('bot', welcomeMsg);
    }
    
    handleSendMessage() {
        const input = document.getElementById('chatbot-input');
        if (!input || this.isTyping) return;
        const message = input.value.trim();
        
        if (!message) return;
        
        this.sendMessage(message);
        input.value = '';
    }
    
    async sendMessage(message) {
        if (this.isTyping) return;

        // Add user message
        this.addMessage('user', message);
        
        // Show typing indicator
        this.showTypingIndicator();
        this.setInputState(true);
        
        try {
            // Prefer local high-confidence responses for common portfolio questions
            const localResponse = this.getLocalResponse(message);
            const response = localResponse || await this.getGeminiResponse(message);
            
            // Remove typing indicator
            this.hideTypingIndicator();
            
            // Add bot response
            this.addMessage('bot', response);
            
        } catch (error) {
            console.error('Error getting response:', error);
            this.hideTypingIndicator();
            
            // Handle different error types with specific messages
            const errorMessage = this.handleAPIError(error);
            this.addMessage('bot', errorMessage);
        } finally {
            this.setInputState(false);
        }
    }

    setInputState(isBusy) {
        const input = document.getElementById('chatbot-input');
        const sendBtn = document.getElementById('chatbot-send');

        if (input) {
            input.disabled = isBusy;
            if (!isBusy) {
                input.focus();
            }
        }

        if (sendBtn) {
            sendBtn.disabled = isBusy;
        }
    }
    
    handleAPIError(error) {
        if (error.message && error.message.includes('NO_API_KEY')) {
            return "The live AI integration is currently not configured. You can still ask about Adil's skills, projects, experience, certifications, and contact details using the quick action buttons.\n\n📧 Email: adilshamim696@gmail.com\n🔗 LinkedIn: https://www.linkedin.com/in/adilshamim8";
        }

        // Check for quota/cost exhaustion errors
        if (error.message && (
            error.message.includes('429') || 
            error.message.includes('quota') || 
            error.message.includes('RESOURCE_EXHAUSTED') ||
            error.message.includes('insufficient') ||
            error.statusCode === 429
        )) {
            return "I'm sorry, I'm having trouble connecting right now. Please try again in a moment or contact Adil directly through the contact section below.\n\n📧 Email: adilshamim696@gmail.com\n📱 Phone: +880 1321073452\n🔗 LinkedIn: https://www.linkedin.com/in/adilshamim8";
        }
        
        // Check for rate limit errors
        if (error.message && error.message.includes('rate limit')) {
            return "I'm processing too many requests right now. Please wait a moment and try again, or reach out to Adil directly through the contact section.";
        }
        
        // Check for network/connectivity errors
        if (error.message && (
            error.message.includes('network') || 
            error.message.includes('fetch') ||
            error.message.includes('Failed to fetch')
        )) {
            return "I'm having network connectivity issues. Please check your internet connection and try again, or contact Adil directly through the contact section.";
        }
        
        // Generic fallback for all other errors
        return "I'm sorry, I'm having trouble connecting right now. Please try again in a moment or contact Adil directly through the contact section.\n\n📧 Email: adilshamim696@gmail.com\n🔗 LinkedIn: https://www.linkedin.com/in/adilshamim8";
    }

    getLocalResponse(userMessage) {
        const text = userMessage.toLowerCase();
        const info = CHATBOT_CONFIG.personalInfo;

        if (/(contact|reach|email|phone|linkedin|github|kaggle|twitter|x\.com|medium)/i.test(text)) {
            return [
                "Here is how you can contact Adil:",
                `• Email: ${info.email}`,
                `• Phone: ${info.phone}`,
                `• LinkedIn: ${info.socialMedia.linkedin}`,
                `• GitHub: ${info.socialMedia.github}`,
                `• Kaggle: ${info.socialMedia.kaggle}`,
                `• Twitter/X: ${info.socialMedia.twitter}`,
                `• Medium: ${info.socialMedia.medium}`,
                `• Website: ${info.website}`,
                `• Location: ${info.location}`
            ].join('\n');
        }

        if (/(resume|cv)/i.test(text)) {
            return `Adil's resume is available here: ${info.resumePath}`;
        }

        if (/(skill|tech|stack|mlops|python|tensorflow|nlp|deployment)/i.test(text)) {
            return [
                "Adil's core technical strengths:",
                "• Programming & Data: Python, SQL, Bash, Pandas, NumPy",
                "• ML & Modeling: TensorFlow, scikit-learn, XGBoost, LightGBM, CatBoost",
                "• MLOps & Deployment: MLflow, ZenML, Docker, FastAPI",
                "• NLP & Embeddings: spaCy, SBERT, FAISS, TF-IDF"
            ].join('\n');
        }

        if (/(project|portfolio|built|work)/i.test(text)) {
            return [
                "Adil's 5 production projects:",
                "1. Bangla Diarizz — Published research: Bengali speaker diarization, DER 0.19, 56% faster inference. (github.com/AdilShamim8/Bangla-Diarizz)",
                "2. Production-Grade RAG — Multi-provider RAG pipeline (OpenAI/Gemini/Ollama) with idempotent ingestion and Qdrant. (github.com/AdilShamim8/Production-grade-RAG)",
                "3. QuantScope — Quantitative stock analysis with 6-provider LLM fallback chain and zero vendor lock-in. (github.com/AdilShamim8/QuantScope)",
                "4. Production ML Pipeline — End-to-end ZenML + MLflow pipeline with Dockerized FastAPI serving. (github.com/AdilShamim8/Prices_Predictor_System)",
                "5. Training Data Bot — Automated PDF/text/URL → fine-tuning dataset pipeline with quality scoring. (github.com/AdilShamim8/Training-Data-Bot)"
            ].join('\n');
        }

        if (/(experience|freelance|kaggle|education|certification|achievement)/i.test(text)) {
            return [
                "Quick profile summary:",
                "• 2+ years of hands-on AI/ML Engineering experience",
                "• Freelance AI/ML Engineer (July 2025—Present)",
                "• Kaggle Master with 22 completed competitions",
                "• B.Sc. in Computer Science & Engineering at BNIST (Feb 2023—Present)",
                "• Certifications include Stanford ML, Harvard CS50, IBM Python for DS/AI, and Microsoft GenAI essentials"
            ].join('\n');
        }

        return '';
    }
    
    async getGeminiResponse(userMessage) {
        if (!CHATBOT_CONFIG.apiKey) {
            throw new Error('NO_API_KEY');
        }

        // Build conversation history
        const contents = [
            {
                role: "user",
                parts: [{ text: CHATBOT_CONFIG.systemPrompt }]
            },
            {
                role: "model",
                parts: [{ text: "I understand. I'm Adil Shamim's personal AI assistant. I'll help visitors learn about Adil, his work, skills, and experiences in a friendly and professional manner." }]
            }
        ];
        
        // Add conversation history
        this.conversationHistory.forEach(msg => {
            contents.push({
                role: msg.role === 'user' ? 'user' : 'model',
                parts: [{ text: msg.content }]
            });
        });
        
        // Add current message
        contents.push({
            role: "user",
            parts: [{ text: userMessage }]
        });
        
        const requestBody = {
            contents: contents,
            generationConfig: {
                temperature: 0.7,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 1024,
            }
        };
        
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), CHATBOT_CONFIG.requestTimeoutMs);

            const response = await fetch(`${CHATBOT_CONFIG.apiEndpoint}?key=${CHATBOT_CONFIG.apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
                signal: controller.signal
            });

            clearTimeout(timeoutId);
            
            // Handle HTTP errors with specific status codes
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                const error = new Error(`API request failed: ${response.status}`);
                error.statusCode = response.status;
                error.errorData = errorData;
                
                // Check for specific error messages in the response
                if (errorData.error) {
                    if (errorData.error.message) {
                        error.message = errorData.error.message;
                    }
                    if (errorData.error.status) {
                        error.errorStatus = errorData.error.status;
                    }
                }
                
                throw error;
            }
            
            const data = await response.json();
            
            // Validate response structure
            if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
                throw new Error('Invalid API response structure');
            }
            
            const parts = data.candidates[0].content.parts || [];
            const botResponse = parts
                .map(part => part.text || '')
                .join('\n')
                .trim();

            if (!botResponse) {
                throw new Error('Empty model response');
            }
            
            // Update conversation history
            this.conversationHistory.push({ role: 'user', content: userMessage });
            this.conversationHistory.push({ role: 'bot', content: botResponse });
            
            // Keep only last 10 messages to manage token usage
            if (this.conversationHistory.length > this.maxHistoryItems) {
                this.conversationHistory = this.conversationHistory.slice(-this.maxHistoryItems);
            }
            
            return botResponse;
            
        } catch (error) {
            if (error.name === 'AbortError') {
                error.message = 'Request timeout';
            }

            // Enhance error with more context if it's a fetch error
            if (error.name === 'TypeError' && error.message.includes('fetch')) {
                error.message = 'Failed to fetch - network error';
            }
            throw error;
        }
    }
    
    addMessage(sender, text) {
        const chatBody = document.getElementById('chatbot-body');
        if (!chatBody) return;

        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        
        const time = new Date().toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        const avatarHTML = sender === 'bot' ? 
            `<img src="${ASSET_BASE}assets/images/Adil.jpeg" alt="Avatar" class="message-avatar">` : '';
        
        messageDiv.innerHTML = `
            ${avatarHTML}
            <div>
                <div class="message-content">${this.formatMessage(text)}</div>
                <div class="message-time">${time}</div>
            </div>
        `;
        
        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
        
        this.messages.push({ sender, text, time });
    }

    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        };
        return text.replace(/[&<>"']/g, char => map[char]);
    }

    sanitizeUrl(url) {
        try {
            const parsed = new URL(url);
            if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
                return parsed.toString();
            }
            return '';
        } catch {
            return '';
        }
    }
    
    formatMessage(text) {
        const safeText = this.escapeHtml(text || '');
        const linkPlaceholders = [];
        let html = safeText;

        html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, (match, linkText, url) => {
            const cleanUrl = this.sanitizeUrl(url);
            if (!cleanUrl) return linkText;
            const placeholder = `__LINK_${linkPlaceholders.length}__`;
            linkPlaceholders.push(`<a href="${cleanUrl}" target="_blank" rel="noopener noreferrer" class="chatbot-link">${linkText}</a>`);
            return placeholder;
        });

        html = html.replace(/(https?:\/\/[^\s<]+)/g, (url) => {
            const cleanUrl = this.sanitizeUrl(url);
            if (!cleanUrl) return url;
            return `<a href="${cleanUrl}" target="_blank" rel="noopener noreferrer" class="chatbot-link">${cleanUrl}</a>`;
        });

        html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
        html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

        const lines = html.split('\n');
        const rendered = [];
        let inUl = false;
        let inOl = false;

        const closeLists = () => {
            if (inUl) {
                rendered.push('</ul>');
                inUl = false;
            }
            if (inOl) {
                rendered.push('</ol>');
                inOl = false;
            }
        };

        lines.forEach((line) => {
            const trimmed = line.trim();
            if (!trimmed) {
                closeLists();
                return;
            }

            const unorderedMatch = trimmed.match(/^[•\-]\s+(.+)$/);
            const orderedMatch = trimmed.match(/^\d+\.\s+(.+)$/);

            if (unorderedMatch) {
                if (!inUl) {
                    closeLists();
                    inUl = true;
                    rendered.push('<ul>');
                }
                rendered.push(`<li>${unorderedMatch[1]}</li>`);
                return;
            }

            if (orderedMatch) {
                if (!inOl) {
                    closeLists();
                    inOl = true;
                    rendered.push('<ol>');
                }
                rendered.push(`<li>${orderedMatch[1]}</li>`);
                return;
            }

            closeLists();
            rendered.push(`<p>${trimmed}</p>`);
        });

        closeLists();
        html = rendered.join('');

        linkPlaceholders.forEach((anchor, index) => {
            html = html.replace(`__LINK_${index}__`, anchor);
        });

        return html;
    }
    
    showTypingIndicator() {
        this.hideTypingIndicator();

        const chatBody = document.getElementById('chatbot-body');
        if (!chatBody) return;

        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot';
        typingDiv.id = 'typing-indicator';
        
        typingDiv.innerHTML = `
            <img src="${ASSET_BASE}assets/images/Adil.jpeg" alt="Avatar" class="message-avatar">
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;
        
        chatBody.appendChild(typingDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
        this.isTyping = true;
    }
    
    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
        this.isTyping = false;
    }
    
    toggleMinimize() {
        const container = document.getElementById('chatbot-container');
        const minimizeBtn = document.getElementById('chatbot-minimize');
        const icon = minimizeBtn.querySelector('i');
        
        this.isMinimized = !this.isMinimized;
        container.classList.toggle('minimized');
        
        if (this.isMinimized) {
            icon.className = 'fas fa-plus';
            minimizeBtn.title = 'Expand';
        } else {
            icon.className = 'fas fa-minus';
            minimizeBtn.title = 'Minimize';
        }
    }
    
    closeChatbot() {
        const container = document.getElementById('chatbot-container');
        const toggleBtn = document.getElementById('chatbot-toggle');
        
        container.classList.add('hidden');
        toggleBtn.classList.add('active');
    }
    
    openChatbot() {
        const container = document.getElementById('chatbot-container');
        const toggleBtn = document.getElementById('chatbot-toggle');
        const input = document.getElementById('chatbot-input');
        
        container.classList.remove('hidden');
        toggleBtn.classList.remove('active');
        
        // Load welcome message only on first open
        if (!this.hasBeenOpened) {
            this.loadWelcomeMessage();
            this.hasBeenOpened = true;
        }
        
        if (this.isMinimized) {
            this.toggleMinimize();
        }

        if (input && !input.disabled) {
            input.focus();
        }
    }
}

// Initialize chatbot when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.adilChatbot = new AdilChatbot();
    });
} else {
    window.adilChatbot = new AdilChatbot();
}
