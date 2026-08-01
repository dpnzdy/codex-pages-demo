"use strict";

const projectButton = document.querySelector("[data-scroll-to='projects']");
const projectsSection = document.getElementById("projects");
const currentYear = document.getElementById("current-year");

if (projectButton && projectsSection) {
  projectButton.addEventListener("click", () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    projectsSection.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start"
    });
  });
}

if (currentYear) {
  currentYear.textContent = new Date().getFullYear().toString();
}
