(function () {
  var navToggle = document.querySelector('[data-nav-toggle]');
  var navMenu = document.querySelector('[data-nav-menu]');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      var isOpen = navMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  var lightbox = document.querySelector('[data-lightbox]');
  var lightboxImage = document.querySelector('[data-lightbox-image]');
  var lightboxClose = document.querySelector('[data-lightbox-close]');

  if (!lightbox || !lightboxImage || !lightboxClose) {
    return;
  }

  function closeLightbox() {
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImage.removeAttribute('src');
    lightboxImage.removeAttribute('alt');
  }

  document.querySelectorAll('[data-lightbox-link]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      lightboxImage.src = link.getAttribute('href');
      lightboxImage.alt = link.getAttribute('data-title') || 'Artwork image';
      lightbox.setAttribute('aria-hidden', 'false');
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', function (event) {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeLightbox();
    }
  });
})();
