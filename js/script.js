/* S.M.R Engineering Industries - JavaScript */

document.addEventListener('DOMContentLoaded', function () {
   // ==================== MOBILE NAVIGATION ====================
   const navToggle = document.querySelector('.nav-toggle');
   const nav = document.querySelector('.nav');
   const navLinks = document.querySelectorAll('.nav-link');

   if (navToggle) {
      navToggle.addEventListener('click', function () {
         const isOpen = nav.classList.toggle('active');
         navToggle.setAttribute('aria-expanded', isOpen);
      });
   }

   // Close menu when clicking on a link
   navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
         nav.classList.remove('active');
         if (navToggle) {
            navToggle.setAttribute('aria-expanded', 'false');
         }
      });
   });

   // ==================== ACTIVE NAVIGATION LINK ====================
   // Get current page filename
   const currentPage = window.location.pathname.split('/').pop() || 'index.html';

   navLinks.forEach(function (link) {
      const linkPage = link.getAttribute('href');
      if (linkPage === currentPage) {
         link.classList.add('active');
      }
   });

   // ==================== SMOOTH SCROLL FOR ANCHOR LINKS ====================
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
         e.preventDefault();
         const target = document.querySelector(this.getAttribute('href'));
         if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
            
            window.scrollTo({
               top: targetPosition,
               behavior: 'smooth'
            });
         }
      });
   });

   // ==================== SCROLL TO TOP BUTTON ====================
   const scrollTopBtn = document.getElementById('scrollTopBtn');
   
   if (scrollTopBtn) {
      window.addEventListener('scroll', function () {
         if (window.pageYOffset > 300) {
            scrollTopBtn.style.display = 'block';
         } else {
            scrollTopBtn.style.display = 'none';
         }
      });

      scrollTopBtn.addEventListener('click', function () {
         window.scrollTo({
            top: 0,
            behavior: 'smooth'
         });
      });
   }

   // ==================== HEADER SHADOW ON SCROLL ====================
   const header = document.querySelector('.header');
   
   window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
         header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
      } else {
         header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      }
   });

   // ==================== FADE-IN ANIMATION ON SCROLL ====================
   const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
   };

   const observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
         }
      });
   }, observerOptions);

   // Observe elements with animation
   document.querySelectorAll('.feature-card, .service-card, .quality-box, .industry-item').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
   });

   // ==================== CURRENT YEAR IN FOOTER ====================
   const yearElement = document.getElementById('currentYear');
   if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
   }
});