// Chatbot Configuration and Personal Information
const CHATBOT_CONFIG = {
    apiKey: (window.CHATBOT_API_KEY || '').trim(),
    model: 'gemini-2.0-flash-exp',
    apiEndpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent',
    requestTimeoutMs: 25000,
    
    // Personal Information Context
    personalInfo: {
        name: "Adil Shamim",
        title: "AI/ML Engineer",
        location: "Dhaka, Bangladesh",
        phone: "+880 1321073452",
        email: "adilshamim696@gmail.com",
        education: "B.Sc. in Computer Science & Engineering - BNIST (February 2023—Present)",
        experience: "AI/ML Engineer with over 2 years of hands-on experience",
        kaggleStatus: "Kaggle Master - Completed 22 competitions",
        languages: ["English (Fluent)", "Bengali (Native)", "Hindi (Conversational)"],
        
        bio: `I'm Adil Shamim. I'm an AI/ML Engineer with over two years of hands-on experience. I build practical ML systems—pipelines, Dockerized services, and tracked experiments—that teams actually use. I built a recommender that boosted a client's sales by 10%. I enjoy transforming complex data into intuitive tools that enable people to make informed decisions.`,
        
        skills: {
            programmingAndData: [
                "Python (Advanced)",
                "SQL (Advanced)",
                "Bash",
                "Pandas",
                "NumPy"
            ],
            modelingAndML: [
                "TensorFlow",
                "scikit-learn",
                "XGBoost",
                "LightGBM",
                "CatBoost"
            ],
            mlopsAndDeployment: [
                "MLflow",
                "ZenML",
                "Docker",
                "FastAPI"
            ],
            tools: [
                "Jupyter",
                "Git",
                "VSCode",
                "Streamlit",
                "Flask"
            ],
            nlpAndEmbeddings: [
                "spaCy",
                "SBERT",
                "FAISS",
                "TF-IDF"
            ],
            generativeAI: [
                "LLMs",
                "Prompt Engineering",
                "RAG",
                "LangChain",
                "LangGraph"
            ]
        },
        
        projects: [
            {
                name: "Prices Predictor System",
                github: "GitHub link available",
                technologies: ["ZenML", "MLflow", "XGBoost", "LightGBM", "Docker", "FastAPI"],
                description: "Built an end-to-end price-prediction pipeline (ingest → preprocess → train → evaluate → register → serve). Tracked experiments with MLflow, ran CV and hyperparameter tuning, and Dockerized a FastAPI inference service for reproducible production use."
            },
            {
                name: "Toolly Studio",
                github: "GitHub link available",
                technologies: ["Streamlit", "Bria AI", "Python", "Docker"],
                description: "Developed a demo-ready Streamlit app that generates professional product ads by integrating Bria AI image-generation APIs. Implemented client-preview, batch export workflows, and a one-command Docker demo."
            },
            {
                name: "Resume Screening",
                github: "GitHub link available",
                technologies: ["spaCy", "SBERT", "FAISS", "Flask", "Python"],
                description: "Built an automated resume-parsing → embedding → ranking pipeline (spaCy → SBERT → FAISS) to surface top candidates quickly. Served ranked shortlists via a Flask API and reduced manual screening overhead."
            },
            {
                name: "Book Recommender System",
                github: "GitHub link available",
                preview: "Live preview available",
                technologies: ["ALS", "TF-IDF/Embeddings", "Python", "Flask"],
                description: "Implemented a hybrid recommendation system combining collaborative filtering (ALS) with content-based embeddings. Exposed recommendations via Flask API and achieved a +10% sales lift in pilot deployment."
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
                title: "Founder",
                company: "Toolly",
                period: "Ongoing",
                description: "Founded Toolly to make discovering, submitting, and sharing AI tools effortless for creators and users. A community-driven platform where makers can submit their AI tools for free, and users can discover trusted, categorized AI utilities.",
                responsibilities: [
                    "Defined product vision, roadmap, and go-to-market strategy",
                    "Built and launched the live website (toolly.tech) with tool submission flow",
                    "Led full-stack development and integrations",
                    "Managed user acquisition, community outreach, and early partnerships",
                    "Oversaw UI/UX and site performance improvements",
                    "Set up analytics and feedback loops for rapid iteration"
                ]
            },
            {
                title: "1st Author - Conference Paper",
                company: "Research",
                period: "2026",
                description: "Bangla Diarizz: Domain-Adapted Speaker Diarization for Bengali Long-Form Audio",
                achievements: [
                    "Addressed low-resource speech challenge: speaker diarization for Bengali",
                    "Developed system for DL Sprint 4.0 Bengali Speaker Diarization (BUET CSE Fest 2026)",
                    "Achieved competitive Diarization Error Rate (DER) on Bengali-Loop benchmark",
                    "Reduced inference time from 1h 22m to ~36m",
                    "Delivered 56% wall-clock speed improvement"
                ]
            },
            {
                    title: "Freelance AI/ML Engineer",
                company: "Self-employed",
                period: "July 2025—Present",
                responsibilities: [
                    "Performed end-to-end analyses on public datasets to extract actionable insights for health and economic questions",
                    "Produced slide decks and dashboards for stakeholders",
                    "Created a hybrid recommendation system for a local business (collaborative + content-based)",
                    "Achieved a 10% sales increase in 3 months through deployed ML solutions"
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
            "Predicting Road Accident Risk — Ranked Top 1% (29/4,082 participants)",
            "Predicting Beats-per-Minute of Songs — Ranked Top 2% (38/2,581 participants)",
            "Hosted competitions to engage the data science community"
        ],
        
        achievements: [
            "Founder of Toolly — an AI tools discovery platform with 400+ curated tools",
            "1st Author of 'Bangla Diarizz' — Conference Paper on Bengali Speaker Diarization (56% faster inference)",
            "Shipped a live AI product (Toolly.tech) with moderation and analytics",
            "Ranked Top 1% on Kaggle (29/4,082 in Road Accident Prediction)",
            "Kaggle Master with 22 completed competitions and hosted competitions",
            "Active blogger + educator with ML notes and guides"
        ],
        
        currentActivities: [
            "Working on end-to-end ML pipelines and production deployments",
            "Building practical ML systems with Docker and FastAPI",
            "Competing in Kaggle data science competitions",
            "Creating open-source ML tools and datasets",
            "Writing technical blogs and educational content"
        ],
        
        coursework: [
            "Linear Algebra",
            "Calculus",
            "Probability & Statistics",
            "Data Structures & Algorithms",
            "Programming Languages",
            "Operating Systems",
            "Computer Architecture",
            "Database Systems"
        ],
        
        interests: [
            "Machine Learning Pipeline Development",
            "MLOps and Model Deployment",
            "Recommendation Systems",
            "Natural Language Processing",
            "Computer Vision",
            "Data Science",
            "Open Source Development",
            "AI-powered Productivity Tools"
        ],
        
        resumePath: "assets/docs/AdilShamim_ML_Engineer_Resume.pdf",
        website: "https://adilshamim8.github.io/"
    },
    
    // System Prompt for Gemini
    systemPrompt: `You are Adil Shamim's personal AI assistant on his portfolio website. Your role is to help visitors learn about Adil, his work, skills, and experiences.

**About Adil Shamim:**
- Name: Adil Shamim
- Title: AI/ML Engineer
- Location: Dhaka, Bangladesh
- Phone: +880 1321073452
- Email: adilshamim696@gmail.com
- Education: B.Sc. in Computer Science & Engineering - BNIST (February 2023—Present)
- Experience: AI/ML Engineer with over 2 years of hands-on experience
- Kaggle Status: Kaggle Master - Completed 22 competitions
- Languages: English (Fluent), Bengali (Native), Hindi (Conversational)
- Notable Achievement: Shipped a live AI product, published a conference paper, ranked Top 1% on Kaggle

**Professional Summary:**
Adil Shamim is an AI/ML Engineer with over two years of hands-on experience. He builds practical ML systems—pipelines, Dockerized services, and tracked experiments—that teams actually use. He built a recommender that boosted a client's sales by 10%. He enjoys transforming complex data into intuitive tools that enable people to make informed decisions.

**SKILLS:**

*Programming & Data:*
- Python (Advanced)
- SQL (Advanced)
- Bash
- Pandas
- NumPy

*Modeling & ML - DL:*
- TensorFlow
- scikit-learn
- XGBoost
- LightGBM
- CatBoost

*MLOps & Deployment:*
- MLflow
- ZenML
- Docker
- FastAPI

*Tools & Collaboration:*
- Git
- GitHub
- Jupyter
- Streamlit

*NLP & Embeddings:*
- spaCy
- SBERT
- FAISS
- TF-IDF

*Generative AI & LLMs:*
- LLMs (Large Language Models)
- Prompt Engineering
- RAG (Retrieval-Augmented Generation)
- LangChain
- LangGraph

**PROJECTS:**

1. **Prices Predictor System** | ZenML, MLflow, XGBoost, LightGBM, Docker, FastAPI
   - Built an end-to-end price-prediction pipeline (ingest → preprocess → train → evaluate → register → serve) to standardize model development and deployment
   - Tracked experiments with MLflow, ran CV and hyperparameter tuning for robust model selection
   - Dockerized a FastAPI inference service for reproducible production use

2. **Toolly Studio** | Streamlit, Bria AI, Python, Docker
   - Developed a demo-ready Streamlit app that generates professional product ads by integrating Bria AI image-generation APIs and templated prompts
   - Implemented client-preview, batch export workflows, and a one-command Docker demo

3. **Resume Screening** | spaCy, SBERT, FAISS, Flask, Python
   - Built an automated resume-parsing → embedding → ranking pipeline (spaCy → SBERT → FAISS) to surface top candidates quickly
   - Served ranked shortlists via a Flask API and reduced manual screening overhead through accurate semantic matching

4. **Book Recommender System** | ALS, TF-IDF/Embeddings, Python, Flask
   - Implemented a hybrid recommendation system combining collaborative filtering (ALS) with content-based embeddings to personalize suggestions
   - Exposed recommendations via a lightweight Flask API and supported a pilot deployment that produced a +10% sales lift

**TECHNICAL EXPERIENCE:**

*Founder — Toolly*
Ongoing
- Founded Toolly, a community-driven platform for discovering and sharing AI tools (400+ curated tools)
- Built and launched toolly.tech with full-stack development including submission moderation
- Led product vision, roadmap, and go-to-market strategy
- Managed user acquisition, community outreach, and early partnerships
- Set up analytics and feedback loops for rapid product iteration

*1st Author — Conference Paper: "Bangla Diarizz: Domain-Adapted Speaker Diarization for Bengali Long-Form Audio"*
2026
- Addressed critical low-resource speech challenge: speaker diarization for Bengali
- Developed system that achieved competitive performance on Bengali-Loop benchmark
- Engineered 56% wall-clock speed improvement (reduced inference from 1h 22m to ~36m)
- Used Pyannote, WeSpeaker ResNet34-LM, and custom post-processing techniques
- Paper available on ResearchGate

*Kaggle Master — Completed 22 Competitions*
Ongoing
- Top 1% rank on "Predicting Road Accident Risk" (29/4,082 participants)
- Top 2% rank on "Predicting Beats-per-Minute of Songs" (38/2,581 participants)
- Hosted competitions to engage the data science community
- Focus on robust modeling and reproducible notebooks

*Freelance AI/ML Engineer — Self-employed*
July 2025—Present
- Performed end-to-end analyses on public datasets to extract actionable insights for health and economic questions
- Produced slide decks and dashboards for stakeholders
- Created a hybrid recommendation system for a local business (collaborative + content-based)
- Deployed results and achieved a 10% sales increase in 3 months

**EDUCATION:**
B.Sc. in Computer Science & Engineering - BNIST
February 2023—Present

*Relevant Coursework:*
Linear Algebra, Calculus, Probability & Statistics, Data Structures & Algorithms, Programming Languages, Operating Systems, Computer Architecture, Database Systems

**CERTIFICATIONS:**
- Machine Learning — Stanford University (Coursera)
- CS50: Introduction to Computer Science — Harvard
- Python for Data Science, AI & Development — IBM
- Career Essentials in Generative AI — Microsoft + LinkedIn
- Machine Learning Pipelines with Azure ML Studio (Coursera)

**ACHIEVEMENTS:**
- Founder of Toolly — an AI tools discovery platform with 400+ curated tools
- 1st Author of 'Bangla Diarizz' — Conference Paper on Bengali Speaker Diarization (56% faster inference)
- Shipped a live AI product (Toolly.tech) with full moderation and analytics
- Ranked Top 1% on Kaggle (29/4,082 in Road Accident Prediction)
- Kaggle Master with 22 completed competitions
- Active blogger + educator with ML notes and guides

**Social Media & Online Presence:**
- LinkedIn: https://www.linkedin.com/in/adilshamim8
- GitHub: https://github.com/AdilShamim8
- Kaggle: https://www.kaggle.com/adilshamim8
- Twitter/X: https://x.com/adil_shamim8
- Medium Blog: https://adilshamim8.medium.com/
- Toolly: https://www.toolly.tech/
- ResearchGate Paper: https://www.researchgate.net/publication/401194830_Bangla_Diarizz_Domain-Adapted_Speaker_Diarization_for_Bengali_Long-Form_Audio
- Website: https://adilshamim8.github.io/

**Resume:**
Available for download at: assets/docs/AdilShamim_ML_Engineer_Resume.pdf

**Instructions:**
1. Be friendly, professional, and helpful
2. Provide accurate information about Adil's skills, experience, and work
3. If asked about projects, skills, or experience, refer to the information above
4. **If asked about contact or how to reach Adil, provide a comprehensive response including:**
   - Email: adilshamim696@gmail.com
   - Phone: +880 1321073452
   - LinkedIn: https://www.linkedin.com/in/adilshamim8
   - GitHub: https://github.com/AdilShamim8
   - Kaggle: https://www.kaggle.com/adilshamim8
   - Twitter/X: https://x.com/adil_shamim8
   - Medium Blog: https://adilshamim8.medium.com/
    - Website: https://adilshamim8.github.io/
   - Location: Dhaka, Bangladesh
5. If asked about the resume, mention it's available for download on the website
6. Keep responses concise but informative, and format contact information clearly
7. If you don't know something specific, be honest and suggest they contact Adil directly
8. Use a conversational yet professional tone
9. Show enthusiasm about Adil's work and capabilities
10. Help visitors navigate the website if needed
11. **When sharing links, always provide them as plain URLs (e.g., https://github.com/AdilShamim8) - do NOT use markdown formatting like [text](url)**

Remember: You represent Adil Shamim professionally. Always maintain a positive, helpful, and knowledgeable demeanor.`
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
                        <img src="image/Adil.jpeg" alt="Adil" class="chatbot-avatar">
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
                "Highlighted projects:",
                "1. Prices Predictor System — end-to-end ML pipeline with ZenML/MLflow and Dockerized FastAPI serving.",
                "2. Toolly Studio — Streamlit app for AI-powered ad generation with Bria AI integration.",
                "3. Resume Screening — spaCy + SBERT + FAISS ranking pipeline with Flask API.",
                "4. Book Recommender System — hybrid collaborative + content-based recommender with measurable business lift."
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
            `<img src="image/Adil.jpeg" alt="Avatar" class="message-avatar">` : '';
        
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
            <img src="image/Adil.jpeg" alt="Avatar" class="message-avatar">
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
