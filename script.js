/* ===== THEME TOGGLE ===== */

const themeToggle = document.getElementById("theme-toggle");
let darkMode = true;

themeToggle.addEventListener("click", () => {
  darkMode = !darkMode;

  document.documentElement.classList.toggle("light-theme");

  themeToggle.textContent = darkMode ? "🌙" : "☀️";
});

/* ===== LANGUAGE SWITCH (VISUAL) ===== */

const langButtons = document.querySelectorAll(".lang");

langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    langButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
