/* ===== LANGUAGE SWITCH ===== */

const langButtons = document.querySelectorAll(".lang");
const translatableElements = document.querySelectorAll("[data-es]");

langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const selectedLang = btn.dataset.lang;

    langButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    translatableElements.forEach(el => {
      el.textContent = el.dataset[selectedLang];
    });
  });
});

/* ===== THEME TOGGLE ===== */

const themeToggle = document.getElementById("theme-toggle");
let darkMode = true;

themeToggle.addEventListener("click", () => {
  darkMode = !darkMode;
  document.documentElement.classList.toggle("light-theme");
  themeToggle.textContent = darkMode ? "🌙" : "☀️";
});
