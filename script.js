// COUNTDOWN
const countdown = document.getElementById("countdown");
const weddingDate = new Date("July 25, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  countdown.innerHTML = `Faltam ${days} dias`;
}, 1000);

// FADE ON SCROLL
const elements = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});