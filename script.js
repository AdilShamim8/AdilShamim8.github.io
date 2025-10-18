// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initParticles();
    initAOS();
    initNavbar();
    initThemeToggle();
    initTypingEffect();
    initScrollAnimation();
    initBackToTop();
    initProjectsFilter();
    initProjectsData();
    initContactForm();
    setCurrentYear();
});

// Initialize particles.js
function initParticles() {
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#4a6cf7'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#4a6cf7',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 3,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
}

// Initialize AOS animation library
function initAOS() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
}

// Navbar functionality
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('#mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Add active class to nav links on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });

        // Navbar scroll effect
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.querySelector('#theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or use device preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        let newTheme = 'light';
        
        if (currentTheme !== 'dark') {
            newTheme = 'dark';
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        }
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Typing effect for hero section
function initTypingEffect() {
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;
    
    const phrases = [
        'Machine Learning Engineer',
        'Deep Learning Enthusiast',
        'Problem Solver'
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 1000; // Pause at the end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pause before typing next phrase
        }
        
        setTimeout(type, typingSpeed);
    }
    
    setTimeout(type, 1000);
}

// Scroll animations for elements
function initScrollAnimation() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    // Initialize progress bars at 0 width
    skillItems.forEach(item => {
        const progressBar = item.querySelector('.progress-bar');
        const percentage = item.querySelector('.skill-percentage').textContent;
        progressBar.style.width = '0%';
    });
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    // Function to animate elements when they come into view
    function animateOnScroll() {
        skillItems.forEach(item => {
            if (isInViewport(item)) {
                const progressBar = item.querySelector('.progress-bar');
                const percentage = item.querySelector('.skill-percentage').textContent;
                progressBar.style.width = percentage;
            }
        });
    }
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on page load
    animateOnScroll();
}

// Back to top button functionality
function initBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Projects filter functionality
function initProjectsFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter projects
            if (projectItems.length > 0) {
                if (filterValue === 'all') {
                    projectItems.forEach(item => {
                        item.style.display = 'block';
                    });
                } else {
                    projectItems.forEach(item => {
                        if (item.classList.contains(filterValue)) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                }
            }
        });
    });
}

// Dynamically populate projects
function initProjectsData() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
    
    // Sample project data
    const projects = [
        {
            id: 1,
            title: "Prices Predictor System",
            description: "An end-to-end machine learning pipeline for price prediction using ZenML and MLflow. Features include data preprocessing, model training, evaluation, and deployment with automated tracking of experiments and model versions.",
            image: "https://i.postimg.cc/gJpxfpx5/Price.jpg",
            category: "ml",
            tags: ['Python', 'Machine Learning', 'ZenML', 'MLflow', 'Data Science', 'MLOps'],
            //demoLink: "https://github.com/AdilShamim8/Prices_Predictor_System",
            codeLink: "https://github.com/AdilShamim8/Prices_Predictor_System"
        },
        {
            id: 2,
            title: 'Toolly Studio',
            description: 'A powerful Streamlit app for generating professional product ads using Bria AI\'s advanced image generation and manipulation APIs. Features intelligent prompt engineering, batch processing capabilities, and seamless integration with modern AI image generation tools.',
            image: 'https://i.postimg.cc/mZ9YhHvq/20251013-1714-Ghibli-Inspired-Product-Ad-simple-compose-01k7emcvyce5zaj4jkz40q9fsz.png',
            category: 'ai',
            tags: ['Python', 'Streamlit', 'Bria AI', 'Image Generation', 'AI', 'Marketing Automation'],
            demoLink: null,
            codeLink: 'https://github.com/AdilShamim8/Toolly-Studio'
        },
        {
            id: 3,
            title: 'Book Recommender System',
            description: 'An intelligent book recommendation system that combines collaborative filtering and content-based approaches. Features include personalized recommendations, user preference analysis, and a user-friendly web interface for seamless book discovery.',
            image: 'https://i.postimg.cc/MGyXDb27/Book.jpg',
            category: 'ml',
            tags: ['Python', 'Machine Learning', 'Recommender Systems', 'Web Development', 'Flask', 'Data Science'],
            demoLink: 'https://adil-book-recommender.onrender.com/',
            codeLink: 'https://github.com/AdilShamim8/Book-Recommender-System'
        },
        // {
        //     id: 2,
        //     title: '100 AI Machine Learning & Deep Learning Projects',
        //     description: 'A comprehensive collection of 100 hands-on projects covering the entire spectrum of AI, from fundamental machine learning algorithms to advanced deep learning architectures. Each project includes detailed implementations, best practices, and real-world applications across various domains.',
        //     image: 'https://i.postimg.cc/dtNL5V70/AI.jpg',
        //     category: 'ml',
        //     tags: ['Python', 'Machine Learning', 'Deep Learning', 'AI', 'Data Science', 'Computer Vision', 'NLP'],
        //     //demoLink: 'https://github.com/AdilShamim8/100-AI-Machine-Learning-Deep-Learning-Projects',
        //     codeLink: 'https://github.com/AdilShamim8/100-AI-Machine-Learning-Deep-Learnin-Projects'
        // },
        {
            id: 4,
            title: 'Resume Screening',
            description: 'AI-powered tool for efficient and fair candidate selection. Utilizes advanced NLP techniques to parse, analyze, and rank resumes based on job requirements. Features include automated skill extraction, experience matching, and bias-free candidate evaluation.',
            image: 'https://i.postimg.cc/tTxx1KMP/20251013-1717-AI-Powered-Resume-Screening-simple-compose-01k7emhkcqffrrt7hwx30df76e.png',
            category: 'ai',
            tags: ['Python', 'NLP', 'Machine Learning', 'HR Tech', 'Text Analysis', 'Automation'],
            demoLink: null,
            codeLink: 'https://github.com/AdilShamim8/Resume-Screening'
        },
        {
            id: 5,
            title: 'Sentiment Analysis',
            description: 'A powerful NLP application that performs sentiment analysis on text input, classifying it as positive, neutral, or negative. Built with Python and Streamlit, featuring a clean user interface and real-time analysis capabilities.',
            image: 'https://i.postimg.cc/jj9d6bbm/NLP.jpg',
            category: 'ml',
            tags: ['Python', 'NLP', 'Streamlit', 'Machine Learning', 'Text Classification', 'Web App'],
            //demoLink: 'https://github.com/AdilShamim8/Sentiment-analysis',
            codeLink: 'https://github.com/AdilShamim8/Sentiment-analysis'
        },
        // {
        //     id: 5,
        //     title: 'Cat vs Dog Image Classification',
        //     description: 'A deep learning project implementing Convolutional Neural Networks (CNN) for binary image classification. Features include data augmentation, model training with transfer learning, and real-time prediction capabilities.',
        //     image: 'https://i.postimg.cc/B6TZvvvx/Screenshot-2025-06-13-212543.png',
        //     category: 'ml',
        //     tags: ['Python', 'Deep Learning', 'CNN', 'Computer Vision', 'TensorFlow', 'Image Classification'],
        //     //demoLink: 'https://github.com/AdilShamim8/Cat_Vs_Dog_Image_Classification_Project',
        //     codeLink: 'https://github.com/AdilShamim8/Cat_Vs_Dog_Image_Classification_Project'
        // },
        // {
        //     id: 6,
        //     title: 'Stock Price Prediction',
        //     description: 'A sophisticated time series forecasting project using LSTM neural networks to predict stock prices. Features include data preprocessing, feature engineering, model training with TensorFlow/Keras, and performance evaluation metrics.',
        //     image: 'https://i.postimg.cc/B6hRFk6X/Stock.jpg',
        //     category: 'ml',
        //     tags: ['Python', 'Deep Learning', 'LSTM', 'Time Series', 'TensorFlow', 'Financial Analysis'],
        //     //demoLink: 'https://github.com/AdilShamim8/Stock_Price_Prediction',
        //     codeLink: 'https://github.com/AdilShamim8/Stock_Price_Prediction'
        // },
        // {
        //     id: 10,
        //     title: 'Olympic History Analysis',
        //     description: 'A comprehensive data analysis project exploring 120 years of Olympic history. Features interactive visualizations, statistical analysis of athlete performance trends, and insights into the evolution of sports across different countries and time periods.',
        //     image: 'https://i.postimg.cc/G3MwZ8bv/OLYMPC.jpg',
        //     category: 'data',
        //     tags: ['Python', 'Data Analysis', 'Data Visualization', 'Pandas', 'Matplotlib', 'Sports Analytics'],
        //     demoLink: null,
        //     codeLink: 'https://github.com/AdilShamim8/Olympic_History_Analysis'
        // },
        // {
        //     id: 9,
        //     title: 'ML Roadmap and Notes',
        //     description: 'A comprehensive learning path and detailed notes covering the entire machine learning landscape. Features include structured learning modules, practical examples, implementation guides, and best practices for both beginners and advanced practitioners in the field of AI and ML.',
        //     image: 'https://i.postimg.cc/FKRp2Rpn/Roadmap.jpg',
        //     category: 'ml',
        //     tags: ['Machine Learning', 'Deep Learning', 'AI', 'Data Science', 'Learning Resources', 'Best Practices'],
        //     //demoLink: 'https://github.com/AdilShamim8/ML-Roadmap-and-Notes',
        //     codeLink: 'https://github.com/AdilShamim8/ML-Roadmap-and-Notes'
        // },
        {
            id: 6,
            title: 'Toolly',
            description: 'An AI-powered productivity suite that automates and streamlines your daily tasks. Features include intelligent text processing, automated content generation, and smart task management, all designed to boost your efficiency and save valuable time.',
            image: 'https://i.postimg.cc/4d0vfpLB/20250613-1939-Toolly-Modern-Tech-Logo-simple-compose-01jxmr7v1neyav79wdd6fye13h.png',
            category: 'ai',
            tags: ['Python', 'AI', 'NLP', 'Web Development', 'Productivity Tools', 'Automation'],
            demoLink: 'https://www.toolly.tech/',
            codeLink: 'https://github.com/AdilShamim8/Toolly'
        },
    ];
    
    // Create project items
    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = `project-item ${project.category}`;
        projectItem.setAttribute('data-aos', 'fade-up');
        projectItem.setAttribute('data-aos-delay', (project.id * 100).toString());
        
        projectItem.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-img">
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.demoLink && project.demoLink !== '' ? `
                        <a href="${project.demoLink}" class="project-link" target="_blank">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                    ` : ''}
                    <a href="${project.codeLink}" class="project-link" target="_blank">
                        <i class="fab fa-github"></i> Source Code
                    </a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectItem);
    });
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Simulate form submission (in a real project, you would send this to a server)
            setTimeout(() => {
                // Show success message
                formStatus.textContent = 'Your message has been sent successfully!';
                formStatus.className = 'success';
                
                // Reset form
                contactForm.reset();
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
            }, 1000);
        });
    }
}

// Set current year in footer
function setCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
}); 
