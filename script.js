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
        'Researcher',
        'Deep Learning',
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
            title: '100 AI Machine Learning & Deep Learning Projects',
            description: 'Explore a collection of 100 projects that demonstrate various applications of machine learning and deep learning, ranging from basic to advanced implementations.',
            image: 'https://i.postimg.cc/RVZHsrVx/Chat-GPT-Image-Apr-18-2025-11-13-11-AM.png',
            category: 'web',
            tags: ['Python', 'Machine Learning', 'Deep Learning', 'AI Projects', 'Data Science'],
            demoLink: 'https://github.com/AdilShamim8/100-AI-Machine-Learning-Deep-Learnin-Projects',
            codeLink: 'https://github.com/AdilShamim8/100-AI-Machine-Learning-Deep-Learnin-Projects'
        },
        {
            id: 2,
            title: "Echo AI",
            description: "Echo AI is an interactive, web-based chatbot designed to engage users in natural conversations. Built with HTML, CSS, and JavaScript, it offers a seamless chat experience and can be easily customized and deployed.",
            image: "https://i.postimg.cc/BbdMgq9s/Chat-GPT-Image-May-9-2025-10-13-26-PM.png",
            category: "web",
            tags: ["HTML", "CSS", "JavaScript", "Chatbot", "Web Development"],
            demoLink: "https://echoai-iota.vercel.app/",
            codeLink: "https://github.com/AdilShamim8/Echo_AI"
        },
        {
            id: 3,
            title: 'ML Roadmap and Notes',
            description: 'A resource outlining the journey of learning machine learning, featuring detailed notes and guides on various topics and techniques for beginners and advanced learners.',
            image: 'https://i.postimg.cc/7hsf86Y8/Chat-GPT-Image-Apr-18-2025-11-13-08-AM.png',
            category: 'web',
            tags: ['Machine Learning', 'Notes', 'Education', 'Learning Path'],
            demoLink: 'https://github.com/AdilShamim8/ML-Roadmap-and-Notes',
            codeLink: 'https://github.com/AdilShamim8/ML-Roadmap-and-Notes'
        },
        {
            id: 4,
            title: 'Book Recommender System',
            description: 'A machine learning model designed to recommend books based on user preferences and reading history, utilizing collaborative filtering and content-based techniques.',
            image: 'https://images.unsplash.com/photo-1711701201402-54745024530a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fEJvb2slMjBSZWNvbW1lbmRlciUyMFN5c3RlbXxlbnwwfHwwfHx8MA%3D%3D',
            category: 'web',
            tags: ['Python', 'Scikit-learn', 'Collaborative Filtering','Machine Learning'],
            demoLink: 'https://adil-book-recommender.onrender.com/',
            codeLink: 'https://github.com/AdilShamim8/Book-Recommender-System'
        },
        {
            id: 5,
            title: 'Email Spam Classifier',
            description: 'An application that uses natural language processing techniques to classify emails as spam or not spam, improving your email management and productivity.',
            image: 'https://miro.medium.com/v2/resize:fit:1400/1*WA9aceQugVlBS81r2a7Snw.png',
            category: 'app',
            tags: ['Python', 'NLP', 'Machine Learning', 'Text Classification'],
            demoLink: 'https://github.com/AdilShamim8/Email-Spam-Classifier',
            codeLink: 'https://github.com/AdilShamim8/Email-Spam-Classifier'
        },
        {
            id: 6,
            title: 'Titanic: Machine Learning from Disaster',
            description: 'A machine learning project aimed at predicting survival outcomes of passengers aboard the Titanic using various features such as age, gender, and class. This project utilizes classification techniques to analyze historical data and improve prediction accuracy.',
            image: 'https://media.cnn.com/api/v1/images/stellar/prod/230213144330-02-titanic-25th-anniversary-restricted.jpg?c=16x9&q=h_833,w_1480,c_fill',
            category: 'competition',
            tags:  ['Python', 'Machine Learning', 'Classification', 'Data Science'],
            demoLink: 'https://github.com/AdilShamim8/Titanic-Machine-Learning-from-Disaster',
            codeLink: 'https://github.com/AdilShamim8/Titanic-Machine-Learning-from-Disaster'
        }
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
                    <a href="${project.demoLink}" class="project-link" target="_blank">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
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
