// Chatbot Configuration and Personal Information
const CHATBOT_CONFIG = {
    apiKey: 'AIzaSyDCORcHB7WLvvkqes2L52lpW0aEYytTJ7Y',
    model: 'gemini-2.0-flash-exp',
    apiEndpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent',
    
    // Personal Information Context
    personalInfo: {
        name: "Adil Shamim",
        title: "Machine Learning Engineer",
        location: "Dhaka, Bangladesh",
        phone: "+880 1321073452",
        email: "adilshamim696@gmail.com",
        education: "Computer Science and Engineering - BNIST (February 2023—Present)",
        experience: "Machine Learning Engineer with over 2 years of hands-on experience",
        kaggleStatus: "Kaggle Expert - Completed 15 competitions",
        languages: ["English (Fluent)", "Bengali (Native)", "Hindi (Conversational)"],
        
        bio: `I'm Adil Shamim. I'm a Machine Learning Engineer with over two years of hands-on experience. I build practical ML systems—pipelines, Dockerized services, and tracked experiments—that teams actually use. I built a recommender that boosted a client's sales by 10%. I enjoy transforming complex data into intuitive tools that enable people to make informed decisions.`,
        
        skills: {
            programmingAndData: [
                "Python (Advanced)",
                "SQL (Advanced)",
                "R (Intermediate)",
                "Bash"
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
            medium: "https://adilshamim8.medium.com/"
        },
        
        workExperience: [
            {
                title: "Freelance Machine Learning Engineer",
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
        
        achievements: [
            "Founder of Toolly — an AI-powered productivity tool",
            "Published the Exploring Mental Health Dataset on Kaggle",
            "Contributed to open-source projects in ML/NLP",
            "Active blogger + educator with ML notes and guides",
            "Kaggle Expert Rank with 15 completed competitions"
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
        
        resumePath: "Resume/AdilShamim_ML_Engineer_Resume.pdf",
        website: "https://adilshamim.me"
    },
    
    // System Prompt for Gemini
    systemPrompt: `You are Adil Shamim's personal AI assistant on his portfolio website. Your role is to help visitors learn about Adil, his work, skills, and experiences.

**About Adil Shamim:**
- Name: Adil Shamim
- Title: Machine Learning Engineer
- Location: Dhaka, Bangladesh
- Phone: +880 1321073452
- Email: adilshamim696@gmail.com
- Education: Computer Science and Engineering - BNIST (February 2023—Present)
- Experience: Machine Learning Engineer with over 2 years of hands-on experience
- Kaggle Status: Kaggle Expert - Completed 15 competitions
- Languages: English (Fluent), Bengali (Native), Hindi (Conversational)

**Professional Summary:**
Adil Shamim is a Machine Learning Engineer with over two years of hands-on experience. He builds practical ML systems—pipelines, Dockerized services, and tracked experiments—that teams actually use. He built a recommender that boosted a client's sales by 10%. He enjoys transforming complex data into intuitive tools that enable people to make informed decisions.

**SKILLS:**

*Programming & Data:*
- Python (Advanced)
- SQL (Advanced)
- R (Intermediate)
- Bash

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

*Tools:*
- Jupyter
- Git
- VSCode
- Streamlit
- Flask

*NLP & Embeddings:*
- spaCy
- SBERT
- FAISS
- TF-IDF

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

*Freelance Machine Learning Engineer — Self-employed*
July 2025—Present
- Performed end-to-end analyses on public datasets to extract actionable insights for health and economic questions
- Produced slide decks and dashboards for stakeholders
- Created a hybrid recommendation system for a local business (collaborative + content-based)
- Deployed results and achieved a 10% sales increase in 3 months

*Kaggle Experience:*
- Kaggle Expert Rank — completed 15 competitions
- Focusing on robust modeling and reproducible notebooks

**EDUCATION:**
Computer Science and Engineering - BNIST
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
- Founder of Toolly — an AI-powered productivity tool
- Published the Exploring Mental Health Dataset on Kaggle
- Contributed to open-source projects in ML/NLP
- Active blogger + educator with ML notes and guides
- Kaggle Expert with 15 completed competitions

**Social Media & Online Presence:**
- LinkedIn: https://www.linkedin.com/in/adilshamim8
- GitHub: https://github.com/AdilShamim8
- Kaggle: https://www.kaggle.com/adilshamim8
- Twitter/X: https://x.com/adil_shamim8
- Medium Blog: https://adilshamim8.medium.com/
- Website: https://adilshamim.me

**Resume:**
Available for download at: Resume/AdilShamim_ML_Engineer_Resume.pdf

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
   - Website: https://adilshamim.me
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
                <i class="fas fa-comments"></i>
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
• **Experience** - 2+ years in ML Engineering
• **Certifications** - Stanford ML, Harvard CS50, and more
• **Contact Info** - Email, LinkedIn, GitHub, Kaggle

Try the quick action buttons below or ask me anything! `;
        this.addMessage('bot', welcomeMsg);
    }
    
    handleSendMessage() {
        const input = document.getElementById('chatbot-input');
        const message = input.value.trim();
        
        if (!message) return;
        
        this.sendMessage(message);
        input.value = '';
    }
    
    async sendMessage(message) {
        // Add user message
        this.addMessage('user', message);
        
        // Show typing indicator
        this.showTypingIndicator();
        
        try {
            // Get response from Gemini
            const response = await this.getGeminiResponse(message);
            
            // Remove typing indicator
            this.hideTypingIndicator();
            
            // Add bot response
            this.addMessage('bot', response);
            
        } catch (error) {
            console.error('Error getting response:', error);
            this.hideTypingIndicator();
            this.addMessage('bot', "I'm sorry, I'm having trouble connecting right now. Please try again in a moment or contact Adil directly through the contact section.");
        }
    }
    
    async getGeminiResponse(userMessage) {
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
        
        const response = await fetch(`${CHATBOT_CONFIG.apiEndpoint}?key=${CHATBOT_CONFIG.apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        });
        
        if (!response.ok) {
            throw new Error(`API request failed: ${response.status}`);
        }
        
        const data = await response.json();
        const botResponse = data.candidates[0].content.parts[0].text;
        
        // Update conversation history
        this.conversationHistory.push({ role: 'user', content: userMessage });
        this.conversationHistory.push({ role: 'bot', content: botResponse });
        
        // Keep only last 10 messages to manage token usage
        if (this.conversationHistory.length > 20) {
            this.conversationHistory = this.conversationHistory.slice(-20);
        }
        
        return botResponse;
    }
    
    addMessage(sender, text) {
        const chatBody = document.getElementById('chatbot-body');
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
    
    formatMessage(text) {
        // First, convert markdown-style links [text](url) to clean URLs
        text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, linkText, url) => {
            // If the link text is the same as the URL or starts with http, just use the URL
            if (linkText === url || linkText.startsWith('http')) {
                return url;
            }
            // Otherwise keep the markdown format for now, will be converted to HTML later
            return `[${linkText}](${url})`;
        });
        
        // Convert plain URLs to clickable links
        const urlRegex = /(https?:\/\/[^\s\]]+)/g;
        text = text.replace(urlRegex, (url) => {
            // Don't convert if it's part of a markdown link (already has closing parenthesis)
            return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="chatbot-link">${url}</a>`;
        });
        
        // Convert remaining markdown links [text](url) to HTML
        text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, linkText, url) => {
            return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="chatbot-link">${linkText}</a>`;
        });
        
        // Convert markdown-style bold to HTML
        text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        
        // Convert markdown-style italic to HTML
        text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
        
        // Convert markdown-style code to HTML
        text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
        
        // Convert bullet points to proper lists
        if (text.includes('\n•') || text.includes('\n-')) {
            text = text.replace(/\n([•\-])\s(.+)/g, (match, bullet, content) => {
                return `<li>${content}</li>`;
            });
            // Wrap in ul if li tags exist
            if (text.includes('<li>')) {
                text = text.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
            }
        }
        
        // Convert numbered lists
        text = text.replace(/\n(\d+)\.\s(.+)/g, '<li>$2</li>');
        if (text.includes('<li>') && !text.includes('<ul>')) {
            text = text.replace(/(<li>.*<\/li>)/s, '<ol>$1</ol>');
        }
        
        // Convert line breaks to paragraphs for better spacing
        const paragraphs = text.split(/\n\n+/);
        if (paragraphs.length > 1) {
            text = paragraphs.map(p => {
                if (p.trim() && !p.includes('<ul>') && !p.includes('<ol>') && !p.includes('<li>')) {
                    return `<p>${p.trim()}</p>`;
                }
                return p;
            }).join('');
        } else {
            // Single line breaks to <br>
            text = text.replace(/\n/g, '<br>');
        }
        
        return text;
    }
    
    showTypingIndicator() {
        const chatBody = document.getElementById('chatbot-body');
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
