// ===== MULTILINGUAL SYSTEM =====
function changeLanguage(lang) {
  // Update all elements with data-translate attribute
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-translate]').forEach(element => {
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      const key = element.getAttribute('data-translate');
      if (translations[lang] && translations[lang][key]) {
        element.placeholder = translations[lang][key];
      }
    }
  });

  // Update active button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = document.querySelector(`.lang-btn[onclick="changeLanguage('${lang}')"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }

  // Save preference
  localStorage.setItem('language', lang);
}

// Load saved language on page load
function loadSavedLanguage() {
  const savedLang = localStorage.getItem('language');
  if (savedLang && translations[savedLang]) {
    changeLanguage(savedLang);
  }
}

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// ===== GALLERY FILTER =====
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Filter items
    const filter = button.getAttribute('data-filter');
    galleryItems.forEach(item => {
      const category = item.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  });
});

// ===== LIGHTBOX =====
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentImageIndex = 0;
let visibleImages = [];

function getVisibleImages() {
  return Array.from(galleryItems).filter(item => !item.classList.contains('hidden'));
}

function openLightbox(index) {
  visibleImages = getVisibleImages();
  if (visibleImages.length === 0) return;
  currentImageIndex = index;
  const img = visibleImages[currentImageIndex].querySelector('img');
  lightboxImage.src = img.src;
  lightboxImage.alt = img.alt;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function navigateLightbox(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) {
    currentImageIndex = visibleImages.length - 1;
  } else if (currentImageIndex >= visibleImages.length) {
    currentImageIndex = 0;
  }
  const img = visibleImages[currentImageIndex].querySelector('img');
  lightboxImage.src = img.src;
  lightboxImage.alt = img.alt;
}

// Open lightbox on gallery item click
galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    openLightbox(index);
  });
});

// Close lightbox
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Navigate lightbox
lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
lightboxNext.addEventListener('click', () => navigateLightbox(1));

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') navigateLightbox(-1);
  if (e.key === 'ArrowRight') navigateLightbox(1);
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = contactForm.querySelector('input[name="name"]').value;
  const email = contactForm.querySelector('input[name="email"]').value;
  const message = contactForm.querySelector('textarea[name="message"]').value;

  // Simple validation
  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // For now, show a success message
  // (To connect to email, replace with Formspree endpoint)
  const currentLang = localStorage.getItem('language') || 'en';
  const successMsg = {
    en: 'Thank you for your message! I will get back to you soon.',
    es: '¡Gracias por tu mensaje! Te responderé pronto.',
    cat: 'Gràcies pel teu missatge! Et respondré aviat.'
  };
  alert(successMsg[currentLang] || successMsg.en);
  contactForm.reset();
});

// ===== SCROLL ANIMATION =====
// Add fade-in effect to sections as they scroll into view
const sections = document.querySelectorAll('.section');

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

sections.forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
  loadSavedLanguage();
});