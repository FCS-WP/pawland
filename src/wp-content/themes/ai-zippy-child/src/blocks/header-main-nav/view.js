/**
 * Frontend script for Header Main Navigation block
 */

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".pc-header-main-nav");
  if (!header) return;

  const toggle = header.querySelector(".pc-mobile-toggle");
  const nav = header.querySelector(".pc-main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      header.classList.toggle("mobile-menu-open");

      // Accessibility
      const expanded = header.classList.contains("mobile-menu-open");
      toggle.setAttribute("aria-expanded", expanded);
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !header.contains(e.target) &&
        header.classList.contains("mobile-menu-open")
      ) {
        header.classList.remove("mobile-menu-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }
});
