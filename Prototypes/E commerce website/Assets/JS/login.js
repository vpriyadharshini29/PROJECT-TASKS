
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const registerBtn = document.getElementById('registerBtn');
  const container = document.querySelector('.login-container');

  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  // Show welcome message if already logged in
  if (loggedInUser) {
    container.innerHTML = `
      <div class="title">Welcome, ${loggedInUser.fullname}!</div>
      <p class="mt-3">You are already logged in as <strong>${loggedInUser.email}</strong>.</p>
      <button id="logoutBtn" class="btn btn-danger mt-3">Logout</button>
    `;

    document.getElementById('logoutBtn').addEventListener('click', () => {
      localStorage.removeItem('loggedInUser');
      alert('You have been logged out.');
      window.location.reload();
    });

    return; // Don't show form if already logged in
  }

  // Login logic
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    const storedUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
      alert('Invalid credentials!');
      return;
    }

    localStorage.setItem('loggedInUser', JSON.stringify(storedUser));
    alert(`Login Successful. Welcome, ${storedUser.fullname}!`);
    window.location.href = 'Homepage.html';
  });

  // Register button redirects
  registerBtn.addEventListener('click', () => {
    window.location.href = 'Signup page.html';
  });

  // Wishlist count (optional if wishlist count is visible here)
  const wishlistCountEl = document.getElementById('wishlist-count');
  if (wishlistCountEl) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlistCountEl.textContent = wishlist.length;
  }
});

