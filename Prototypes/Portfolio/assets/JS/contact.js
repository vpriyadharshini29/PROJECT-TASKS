
  // Reveal on scroll using Intersection Observer
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));

  // Bootstrap form validation & submit button loading spinner
  (() => {
    'use strict';
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }

      // Show spinner & disable button
      submitBtn.classList.add('loading');
      submitBtn.setAttribute('disabled', '');

      // Simulate async submission (e.g. API call)
      setTimeout(() => {
        submitBtn.classList.remove('loading');
        submitBtn.removeAttribute('disabled');
        form.reset();
        form.classList.remove('was-validated');

        // Show success modal
        const successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show();
      }, 2000);
    });

    // Real-time validation feedback
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        if (input.checkValidity()) {
          input.classList.remove('is-invalid');
          input.classList.add('is-valid');
        } else {
          input.classList.remove('is-valid');
          input.classList.add('is-invalid');
        }
      });
    });
  })();