// Sequential reveal animation
window.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".reveal");
  let index = 0;

  function revealNext() {
    if (index < revealElements.length) {
      revealElements[index].classList.add("active");
      index++;
      setTimeout(revealNext, 500); // delay between reveals
    }
  }

  revealNext(); // start the sequence
});

// Typing effect code remains the same...
