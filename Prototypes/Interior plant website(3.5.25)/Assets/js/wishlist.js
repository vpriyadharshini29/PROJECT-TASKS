const wishlistContainer = document.querySelector('.wishlist-container .row');
wishlistContainer.innerHTML = ''; 

let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];




document.addEventListener('click', function (e) {
    if (e.target.classList.contains('wishlist-add-cart')) {
      const card = e.target.closest('.wishlist-card');
      const name = card.querySelector('.wishlist-title').innerText;
      const price = card.querySelector('.wishlist-price').innerText;
      const imgSrc = card.querySelector('img').src;
  
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
      const existingItem = cart.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ name, price, imgSrc, quantity: 1 });
      }
  
      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${name} moved to cart!`);
    }
  });

  wishlist.forEach(item => {
    const col = document.createElement('div');
    col.classList.add('col-md-3', 'col-sm-6');
    col.innerHTML = `
      <div class="wishlist-card" data-name="${item.name}">
        <img src="${item.imgSrc}" alt="${item.name}">
        <div class="wishlist-title">${item.name}</div>
        <div class="wishlist-price">${item.price}</div>
        <button class="wishlist-add-cart">Add to Cart</button>
        <button class="remove-wishlist">Remove</button>
      </div>
    `;
    wishlistContainer.appendChild(col);
  });
  document.addEventListener('click', function (e) {
    // Add to Cart from Wishlist
    if (e.target.classList.contains('wishlist-add-cart')) {
      const card = e.target.closest('.wishlist-card');
      const name = card.querySelector('.wishlist-title').innerText;
      const price = card.querySelector('.wishlist-price').innerText;
      const imgSrc = card.querySelector('img').src;
  
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
      const existingItem = cart.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ name, price, imgSrc, quantity: 1 });
      }
  
      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${name} moved to cart!`);
    }
  
    // Remove from Wishlist
    if (e.target.classList.contains('remove-wishlist')) {
      const card = e.target.closest('.wishlist-card');
      const name = card.dataset.name;
  
      let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
      wishlist = wishlist.filter(item => item.name !== name);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
  
      card.parentElement.removeChild(card); 
      alert(`${name} removed from wishlist.`);
    }
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

