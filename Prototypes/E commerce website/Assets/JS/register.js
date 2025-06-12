
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registerForm');
  const loginBtn = document.getElementById('loginBtn');

  // Handle form submission
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (!fullname || !email || !password) {
      alert('All fields are required!');
      return;
    }

    // Save user data
    const user = { fullname, email, password };
    localStorage.setItem('registeredUser', JSON.stringify(user));

    alert('Registration Successful! Redirecting to Homepage...');
    window.location.href = 'Homepage.html';
  });

  // Handle login button click
  loginBtn.addEventListener('click', () => {
    window.location.href = 'Loginpage.html';
  });
});

