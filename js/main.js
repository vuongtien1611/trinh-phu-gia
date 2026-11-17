/**
 * CÔNG TY CỔ PHẦN XÂY DỰNG TRỊNH PHÚ GIA
 * Main Interactive Script (JavaScript)
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // 1. Sticky Header & Scroll To Top Behavior
  const header = document.querySelector('.header-main');
  const desktopTopBtn = document.getElementById('desktopBackToTop');
  const mobileTopBtn = document.getElementById('mobileScrollTopBtn');

  function handleScroll() {
    const scrollY = window.scrollY;

    // Sticky Header
    if (header) {
      if (scrollY > 60) {
        header.classList.add('is-sticky');
      } else {
        header.classList.remove('is-sticky');
      }
    }

    // Desktop Back To Top
    if (desktopTopBtn) {
      if (scrollY > 300) {
        desktopTopBtn.classList.add('show');
      } else {
        desktopTopBtn.classList.remove('show');
      }
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (desktopTopBtn) desktopTopBtn.addEventListener('click', scrollToTop);
  if (mobileTopBtn) mobileTopBtn.addEventListener('click', scrollToTop);

  // 2. Desktop Dropdown Behavior (Hover, Click, Keyboard)
  const navDropdownItems = document.querySelectorAll('.nav-item.has-dropdown');
  navDropdownItems.forEach(item => {
    const trigger = item.querySelector('.nav-link');
    if (trigger) {
      trigger.addEventListener('click', function (e) {
        // Toggle on click
        e.preventDefault();
        const isOpen = item.classList.contains('dropdown-open');
        navDropdownItems.forEach(other => {
          other.classList.remove('dropdown-open');
          const t = other.querySelector('.nav-link');
          if (t) t.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          item.classList.add('dropdown-open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // Close dropdown on click outside or Escape
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-item.has-dropdown')) {
      navDropdownItems.forEach(item => {
        item.classList.remove('dropdown-open');
        const trigger = item.querySelector('.nav-link');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      });
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      navDropdownItems.forEach(item => {
        item.classList.remove('dropdown-open');
        const trigger = item.querySelector('.nav-link');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      });
      closeDrawer();
      closeModal();
    }
  });

  // 3. Mobile Navigation Drawer (Slides from Right)
  const mobileToggle = document.getElementById('mobileMenuOpenBtn');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const drawerOverlay = document.getElementById('mobileDrawerOverlay');
  const closeDrawerBtn = document.getElementById('mobileDrawerClose');

  function openDrawer() {
    if (mobileDrawer) mobileDrawer.classList.add('active');
    if (drawerOverlay) drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (mobileDrawer) mobileDrawer.classList.remove('active');
    if (drawerOverlay) drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  // Accordion submenus inside Mobile Drawer
  const accordionButtons = document.querySelectorAll('.mobile-accordion-btn');
  accordionButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      const parentLi = this.closest('.mobile-has-sub');
      if (parentLi) {
        parentLi.classList.toggle('open');
      }
    });
  });

  // 4. Hero Carousel Slider
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.querySelector('.slider-arrow.prev');
  const nextBtn = document.querySelector('.slider-arrow.next');

  if (slides.length > 0) {
    let currentSlide = 0;
    let slideInterval = null;

    function goToSlide(index) {
      slides[currentSlide].classList.remove('active');
      if (dots[currentSlide]) dots[currentSlide].classList.remove('active');

      currentSlide = (index + slides.length) % slides.length;

      slides[currentSlide].classList.add('active');
      if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
      goToSlide(currentSlide + 1);
    }

    function prevSlide() {
      goToSlide(currentSlide - 1);
    }

    function startAutoplay() {
      if (slideInterval) clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 6000);
    }

    function pauseAutoplay() {
      if (slideInterval) clearInterval(slideInterval);
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        nextSlide();
        startAutoplay();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        prevSlide();
        startAutoplay();
      });
    }

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', function () {
        goToSlide(idx);
        startAutoplay();
      });
    });

    const heroSection = document.querySelector('.hero-v2-section');
    if (heroSection) {
      heroSection.addEventListener('mouseenter', pauseAutoplay);
      heroSection.addEventListener('mouseleave', startAutoplay);
    }

    startAutoplay();
  }

  // 5. Quote Modal Popup
  const quoteModal = document.getElementById('quoteModal');
  const openQuoteBtns = document.querySelectorAll('.open-quote-modal');
  const closeQuoteBtn = document.getElementById('closeQuoteModal');

  function openModal(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (quoteModal) quoteModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    closeDrawer();
  }

  function closeModal() {
    if (quoteModal) quoteModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  openQuoteBtns.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  if (closeQuoteBtn) closeQuoteBtn.addEventListener('click', closeModal);

  if (quoteModal) {
    quoteModal.addEventListener('click', function (e) {
      if (e.target === quoteModal) closeModal();
    });
  }

  // 6. Form Submission Handling with Toast Notice
  const quoteForms = document.querySelectorAll('.quote-form');
  const toast = document.querySelector('.toast-notice');

  function showToast(msg, isSuccess = true) {
    if (!toast) return;
    toast.textContent = msg;
    toast.style.background = isSuccess ? '#10253D' : '#DC2626';
    toast.style.color = '#FFFFFF';
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }

  quoteForms.forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      showToast('Cảm ơn bạn! Yêu cầu báo giá đã được gửi thành công. Trịnh Phú Gia sẽ liên hệ trong ít phút.');
      form.reset();
      closeModal();
    });
  });
});
