  // DOM Elements
  const articleGrid = document.querySelector('.article-grid');
  const menuToggle = document.querySelector('.menu-toggle');
  const closeMenu = document.querySelector('.close-menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const currentYearSpan = document.getElementById('current-year');
  const resumeButton = document.querySelector('.resume-button');
  
  // Set current year in the footer
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
  
  // Populate articles
  function renderArticles() {
    if (!articleGrid) return;
    
    articleGrid.innerHTML = '';
    
    articles.forEach(article => {
      const articleCard = document.createElement('a');
      articleCard.href = `/blog/${article.slug}`;
      articleCard.classList.add('article-card');
      
      articleCard.innerHTML = `
        <h3 class="article-title">${article.title}</h3>
        <p class="article-date">${article.date}</p>
      `;
      
      articleGrid.appendChild(articleCard);
    });
  }
  
  // Mobile menu toggle
  function toggleMobileMenu() {
    mobileMenu.classList.toggle('open');
  }
  
  // Event Listeners
  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMobileMenu);
  }
  
  if (closeMenu) {
    closeMenu.addEventListener('click', toggleMobileMenu);
  }
  
  if (mobileNavLinks) {
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', toggleMobileMenu);
    });
  }
  
  // Handle resume button click
  if (resumeButton) {
    resumeButton.addEventListener('click', () => {
      // This would normally download or redirect to a resume
      alert('Resume button clicked!');
    });
  }
  
  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
    renderArticles();
    
    // Handle active nav link based on scroll position
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
      let current = '';
      
      sections.forEach(section => {
        if (!section) return;
        
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        if (!link) return;
        
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
          link.classList.add('active');
        }
      });
    });
  });
  
  // Handle form submissions
  const emailForms = document.querySelectorAll('.newsletter-form, .newsletter-form-container');
  
  if (emailForms) {
    emailForms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = form.querySelector('.email-input');
        
        if (emailInput.value) {
          alert(`Thank you for subscribing with ${emailInput.value}!`);
          emailInput.value = '';
        } else {
          alert('Please enter your email address.');
        }
      });
    });
  }
