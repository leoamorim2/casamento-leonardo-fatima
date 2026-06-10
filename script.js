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
