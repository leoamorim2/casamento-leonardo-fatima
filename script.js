// =========================
// CONTADOR REGRESSIVO
// =========================

const countdown = document.getElementById("countdown");

const weddingDate = new Date("July 25, 2026 12:00:00").getTime();

setInterval(() => {

  const now = new Date().getTime();

  const distance = weddingDate - now;

  const days = Math.floor(
    distance / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) /
    (1000 * 60)
  );

  const seconds = Math.floor(
    (distance % (1000 * 60)) /
    1000
  );

  countdown.innerHTML = `
    <div class="counter-box">
      <span>${days}</span>
      <small>Dias</small>
    </div>

    <div class="counter-box">
      <span>${hours}</span>
      <small>Horas</small>
    </div>

    <div class="counter-box">
      <span>${minutes}</span>
      <small>Minutos</small>
    </div>

    <div class="counter-box">
      <span>${seconds}</span>
      <small>Segundos</small>
    </div>
  `;

}, 1000);


// =========================
// ANIMAÇÃO AO FAZER SCROLL
// =========================

const elements = document.querySelectorAll(".fade");

function revealElements() {

  elements.forEach(el => {

    const position = el.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {
      el.classList.add("show");
    }

  });

}

window.addEventListener("scroll", revealElements);

revealElements();


// =========================
// EFEITO SUAVE NAS IMAGENS
// =========================

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(img => {

  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.03)";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });

});


// =========================
// SCROLL SUAVE
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener('click', function (e) {

    e.preventDefault();

    const target = document.querySelector(
      this.getAttribute('href')
    );

    if(target){
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }

  });

});
