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

  window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;

    // Sticky header
    if (header) {
      if (scrollY > 70) {
        header.classList.add('is-sticky');
      } else {
        header.classList.remove('is-sticky');
      }
    }

    // Desktop back-to-top button
    if (desktopTopBtn) {
      if (scrollY > 300) {
        desktopTopBtn.classList.add('show');
      } else {
        desktopTopBtn.classList.remove('show');
      }
    }
  }, { passive: true });

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (desktopTopBtn) desktopTopBtn.addEventListener('click', scrollToTop);
  if (mobileTopBtn) mobileTopBtn.addEventListener('click', scrollToTop);

  // 2. Mobile Drawer Navigation & Accordion Submenus
  const mobileToggle = document.getElementById('mobileMenuToggle') || document.querySelector('.mobile-toggle-btn');
  const mobileDrawer = document.getElementById('mobileNavDrawer') || document.querySelector('.mobile-nav-drawer');
  const drawerOverlay = document.getElementById('mobileDrawerOverlay') || document.querySelector('.mobile-drawer-overlay');
  const closeDrawerBtn = document.getElementById('mobileDrawerClose') || document.querySelector('.mobile-drawer-close');

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

  // Accordion submenus in mobile drawer
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

  // 3. Hero Carousel Slider
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

    if (nextBtn) nextBtn.addEventListener('click', () => {
      nextSlide();
      resetInterval();
    });

    if (prevBtn) prevBtn.addEventListener('click', () => {
      prevSlide();
      resetInterval();
    });

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        goToSlide(idx);
        resetInterval();
      });
    });

    function startInterval() {
      slideInterval = setInterval(nextSlide, 6000);
    }

    function resetInterval() {
      clearInterval(slideInterval);
      startInterval();
    }

    startInterval();
  }

  // 4. Project Filter Tabs
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        filterButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');

        projectCards.forEach(card => {
          if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
            card.style.display = 'block';
            setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 10);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95)';
            setTimeout(() => { card.style.display = 'none'; }, 250);
          }
        });
      });
    });
  }

  // 5. Lightbox Modal for Project & Gallery Images
  const modalOverlay = document.getElementById('imageModalOverlay');
  const modalImg = document.getElementById('modalPreviewImage');
  const modalCaption = document.getElementById('modalCaptionText');
  const modalClose = document.getElementById('modalCloseButton');

  function openImageModal(imgSrc, caption) {
    if (!modalOverlay) return;
    if (modalImg) modalImg.src = imgSrc;
    if (modalCaption) modalCaption.textContent = caption || '';
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeImageModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeImageModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function (e) {
      if (e.target === modalOverlay) closeImageModal();
    });
  }

  document.querySelectorAll('.open-lightbox').forEach(el => {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      const imgSrc = this.getAttribute('data-img') || this.getAttribute('href');
      const caption = this.getAttribute('data-caption') || this.getAttribute('title');
      openImageModal(imgSrc, caption);
    });
  });

  // 6. Quote Request Modal
  const quoteModal = document.getElementById('quoteModal');
  const openQuoteButtons = document.querySelectorAll('.open-quote-modal');
  const closeQuoteButton = document.getElementById('closeQuoteModal');

  function openQuote() {
    if (quoteModal) {
      quoteModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeQuote() {
    if (quoteModal) {
      quoteModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  openQuoteButtons.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openQuote();
  }));

  if (closeQuoteButton) closeQuoteButton.addEventListener('click', closeQuote);
  if (quoteModal) {
    quoteModal.addEventListener('click', function (e) {
      if (e.target === quoteModal) closeQuote();
    });
  }

  // 7. Toast Notification Utility
  function showToast(message, isSuccess = true) {
    let toast = document.querySelector('.toast-notice');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast-notice';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fas ${isSuccess ? 'fa-check-circle' : 'fa-exclamation-circle'}" style="color:${isSuccess ? '#10B981' : '#EF4444'}; font-size:1.4rem;"></i> <span>${message}</span>`;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  // 8. Quote Form Submissions
  const quoteForms = document.querySelectorAll('.quote-form');
  quoteForms.forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const nameInput = form.querySelector('input[name="fullname"]');
      const phoneInput = form.querySelector('input[name="phone"]');

      if (!nameInput || !nameInput.value.trim()) {
        showToast('Vui lòng nhập họ và tên của Quý khách.', false);
        return;
      }
      if (!phoneInput || !phoneInput.value.trim() || phoneInput.value.trim().length < 8) {
        showToast('Vui lòng nhập số điện thoại hợp lệ để nhận báo giá.', false);
        return;
      }

      // Simulate sending
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang xử lý...';
      }

      setTimeout(() => {
        showToast('Cảm ơn Quý khách! Trịnh Phú Gia đã tiếp nhận thông tin và sẽ liên hệ tư vấn trong 15 phút.');
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
        closeQuote();
      }, 800);
    });
  });

});

