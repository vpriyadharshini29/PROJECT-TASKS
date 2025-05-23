// Scroll-Triggered Side Slide Animation
function handleScrollReveal() {
  const lefts = document.querySelectorAll('.slide-in-left');
  const rights = document.querySelectorAll('.slide-in-right');

  [...lefts, ...rights].forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', handleScrollReveal);
window.addEventListener('load', handleScrollReveal);
