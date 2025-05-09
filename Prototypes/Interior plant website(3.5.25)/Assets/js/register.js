
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const loginBtn = document.querySelector('.login-box .btn');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (!fullname || !email || !password) {
      alert('All fields are required!');
      return;
    }

    const user = { fullname, email, password };
    localStorage.setItem('registeredUser', JSON.stringify(user));

    alert('Registration Successful!');
    window.location.href = 'Loginpage.html'; 
  });

  loginBtn.addEventListener('click', () => {
    window.location.href = 'Loginpage.html';
  });
});

