
  const phrases = ["A Web Developer", "UI/UX Enthusiast", "Problem Solver"];
  let currentPhrase = 0;
  let currentChar = 0;
  let isDeleting = false;
  const typingSpeed = 100;
  const erasingSpeed = 60;
  const delayBetween = 2000;

  const typingText = document.getElementById("typing-text");

  function typeLoop() {
    const current = phrases[currentPhrase];
    if (isDeleting) {
      typingText.textContent = current.substring(0, currentChar--);
      if (currentChar < 0) {
        isDeleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
        setTimeout(typeLoop, 300);
      } else {
        setTimeout(typeLoop, erasingSpeed);
      }
    } else {
      typingText.textContent = current.substring(0, currentChar++);
      if (currentChar > current.length) {
        isDeleting = true;
        setTimeout(typeLoop, delayBetween);
      } else {
        setTimeout(typeLoop, typingSpeed);
      }
    }
  }

  typeLoop();

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