"use strict";

const projectButton = document.querySelector("[data-scroll-to='projects']");
const projectsSection = document.getElementById("projects");
const currentYear = document.getElementById("current-year");
const todayDate = document.getElementById("today-date");
const now = new Date();

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
  currentYear.textContent = now.getFullYear().toString();
}

if (todayDate) {
  const dateFormatter = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long"
  });

  todayDate.dateTime = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0")
  ].join("-");
  todayDate.textContent = dateFormatter.format(now);
}
