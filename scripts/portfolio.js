document.addEventListener("DOMContentLoaded", () => {
  // Reveal content as it enters the viewport so long pages feel lighter to browse.

  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, observerOptions);

  // The same animation classes are shared by every page, so one observer handles them all.
  document
    .querySelectorAll(
      '.animate-on-scroll, [class*="fade"], [class*="slide"], [class*="reveal"]',
    )
    .forEach((el) => {
      observer.observe(el);
    });

  // The homepage uses a slower background movement to add depth to the hero image.
  const homeSection = document.getElementById("section-hero");
  if (homeSection) {
    // Trigger the hero immediately because it is visible before the user scrolls.
    const fadeElements = document.querySelectorAll(".fade-in-up");
    fadeElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("active");
      }, index * 100);
    });

    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      homeSection.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    });

  }

  // Gallery cards open a focused detail view without sending visitors to another page.
  const galleryModal = document.getElementById("gallery-modal");
  if (galleryModal) {
    const modalImage = document.getElementById("gallery-modal-image");
    const modalTitle = document.getElementById("gallery-modal-title");
    const modalDescription = document.getElementById("gallery-modal-description");
    const carouselCounter = document.getElementById("gallery-carousel-counter");
    const galleryImages = [
      {
        src: "images/IMG_3436.jpeg",
        alt: "Rock formation with a glowing red portal in a grassy environment",
      },
      {
        src: "images/IMG_3437.jpeg",
        alt: "Fantasy village with windmills, towers, and a river",
      },
      {
        src: "images/IMG_3438.jpeg",
        alt: "Bright fantasy church surrounded by trees and a graveyard",
      },
      {
        src: "images/IMG_3440.jpeg",
        alt: "Wide aerial view of a fantasy valley and village",
      },
    ];
    let activeGalleryImage = 0;

    // Keep the modal image, counter, and controls synchronized as visitors browse the project.
    const showGalleryImage = (imageIndex, animate = false) => {
      activeGalleryImage = (imageIndex + galleryImages.length) % galleryImages.length;
      const activeImage = galleryImages[activeGalleryImage];

      if (animate) {
        modalImage.classList.remove("carousel-image-changing");
        void modalImage.offsetWidth;
        modalImage.classList.add("carousel-image-changing");
      }

      modalImage.src = activeImage.src;
      modalImage.alt = activeImage.alt;
      carouselCounter.textContent = `${activeGalleryImage + 1} / ${galleryImages.length}`;
    };

    document.querySelectorAll("[data-gallery-image]").forEach((card) => {
      card.addEventListener("click", () => {
        showGalleryImage(0);
        modalTitle.textContent = card.dataset.galleryTitle;
        modalDescription.textContent = card.dataset.galleryDescription;
        galleryModal.hidden = false;
        document.body.classList.add("modal-open");
      });
    });

    document.querySelector("[data-gallery-prev]").addEventListener("click", () => {
      showGalleryImage(activeGalleryImage - 1, true);
    });

    document.querySelector("[data-gallery-next]").addEventListener("click", () => {
      showGalleryImage(activeGalleryImage + 1, true);
    });

    galleryModal.querySelectorAll("[data-gallery-close]").forEach((closeButton) => {
      closeButton.addEventListener("click", () => {
        galleryModal.hidden = true;
        document.body.classList.remove("modal-open");
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !galleryModal.hidden) {
        galleryModal.hidden = true;
        document.body.classList.remove("modal-open");
      }
      if (event.key === "ArrowLeft" && !galleryModal.hidden) {
        showGalleryImage(activeGalleryImage - 1, true);
      }
      if (event.key === "ArrowRight" && !galleryModal.hidden) {
        showGalleryImage(activeGalleryImage + 1, true);
      }
    });
  }
});

function openTab(tabId, clickedButton) {
  // Keep only the selected project category visible.
  const contents = document.querySelectorAll(".tab-content");
  contents.forEach((content) => {
    content.classList.remove("active");
  });

  const buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });

  const targetTab = document.getElementById(tabId);
  if (targetTab) {
    targetTab.classList.add("active");
  }

  if (clickedButton) {
    clickedButton.classList.add("active");
  }
}

