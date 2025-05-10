
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const registerBtn = document.querySelector('.btn-register');
  const container = document.querySelector('.login-container');

  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

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

    
  }

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

  registerBtn.addEventListener('click', () => {
    window.location.href = 'Signup page.html';
  });
});
 
  function updateWishlistCount() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    document.getElementById('wishlist-count').textContent = wishlist.length;
       }
  
  document.addEventListener("DOMContentLoaded", updateWishlistCount);
  
function addToWishlist(product) {
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  
  
  const exists = wishlist.find(item => item.id === product.id);
  if (!exists) {
    wishlist.push(product);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }


  updateWishlistCount();
}



