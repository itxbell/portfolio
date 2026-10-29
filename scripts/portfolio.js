document.addEventListener("DOMContentLoaded", () => {
  // Reveal content as it enters the viewport so long pages feel lighter to browse.
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.1 },
  );

  // The same animation classes are shared by every page, so one observer handles them all.
  document
    .querySelectorAll(
      '.animate-on-scroll, [class*="fade"], [class*="slide"], [class*="reveal"]',
    )
    .forEach((el) => observer.observe(el));

  // The homepage uses a slower background movement to add depth to the hero image.
  const homeSection = document.getElementById("section-hero");
  if (homeSection) {
    document.querySelectorAll(".fade-in-up").forEach((el, index) => {
      setTimeout(() => el.classList.add("active"), index * 100);
    });

    window.addEventListener("scroll", () => {
      homeSection.style.backgroundPosition = `center ${window.scrollY * 0.5}px`;
    });
  }
});

function showCert(image, title, url, linkText = "View Badge") {
  // Open the official badge in a modal, with a plain link as a no-JS fallback.
  if (typeof Swal === "undefined") {
    window.open(url, "_blank", "noopener");
    return;
  }

  Swal.fire({
    title,
    imageUrl: image,
    imageAlt: title,
    imageClass: "swal-uniform-img",
    html: `<a href="${url}" target="_blank" rel="noopener noreferrer">${linkText}</a>`,
    confirmButtonText: "Close",
  });
}
