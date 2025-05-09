document.querySelectorAll('.add-btn').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.dataset.name;
    const price = button.dataset.price;
    const imgSrc = button.dataset.img;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        name,
        price,
        imgSrc,
        quantity: 1
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} added to cart!`);
  });
});


document.querySelectorAll('.wishlist-btn').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.dataset.name;
    const price = button.dataset.price;
    const imgSrc = button.dataset.img;

    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    
    const exists = wishlist.find(item => item.name === name);
    if (!exists) {
      wishlist.push({ name, price, imgSrc });
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      alert(`${name} added to wishlist!`);
    } else {
      alert(`${name} is already in wishlist.`);
    }
  });
});


  const feedbackCards = document.querySelectorAll('.feedback-card');
  let currentIndex = 0;

  setInterval(() => {
 
    feedbackCards.forEach(card => card.style.display = 'none');
    
   
    feedbackCards[currentIndex].style.display = 'block';

    
    currentIndex = (currentIndex + 1) % feedbackCards.length;
  }, 2000);

  function updateWishlistCount() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const countSpan = document.getElementById('wishlist-count');
    if (countSpan) {
      countSpan.textContent = wishlist.length;
    }
  }
  
 
  document.addEventListener('DOMContentLoaded', updateWishlistCount);
  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
    const countSpan = document.getElementById('cart-count');
    if (countSpan) {
      countSpan.textContent = totalItems;
    }
  }
  
 
  document.addEventListener('DOMContentLoaded', updateCartCount);
    
