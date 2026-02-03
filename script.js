const langBtn = document.getElementById("langBtn");
let spanish = true;

langBtn.addEventListener("click", () => {
  if (spanish) {
    document.querySelector("h1").innerText = "We Drive Industry with AI & Automation";
    langBtn.innerText = "ES";
  } else {
    document.querySelector("h1").innerText = "Impulsamos la Industria con IA y Automatización";
    langBtn.innerText = "EN";
  }
  spanish = !spanish;
});