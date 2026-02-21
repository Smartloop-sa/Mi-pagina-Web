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
setTimeout(() => {
  map.invalidateSize();
}, 300);

function openVideo(videoFile) {
  const modal = document.getElementById("video-modal");
  const video = document.getElementById("local-video");
  const source = document.getElementById("video-source");

  source.src = videoFile + ".mp4";
  video.load();

  modal.classList.add("active");
  video.play();
}

function closeVideo() {
  const modal = document.getElementById("video-modal");
  const video = document.getElementById("local-video");

  video.pause();
  video.currentTime = 0;

  modal.classList.remove("active");
}


// Cerrar con tecla ESC
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeVideo();
  }
});

// Cerrar haciendo click fuera del video
window.onclick = function (event) {
  const modal = document.getElementById("video-modal");
  if (event.target === modal) {
    closeVideo();
  }
};
video.muted = false;




