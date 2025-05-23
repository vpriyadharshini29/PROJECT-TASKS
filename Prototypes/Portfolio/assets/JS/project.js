 // Slide-In on Scroll
  function revealProjects() {
    document.querySelectorAll('.slide-in').forEach(card => {
      const top = card.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        card.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', revealProjects);
  window.addEventListener('load', revealProjects);