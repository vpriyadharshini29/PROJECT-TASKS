
   document.addEventListener('DOMContentLoaded', function () {
  const cartBox = document.querySelector('.cart-box');
  if (!cartBox) return;

  cartBox.innerHTML = '';

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  cart = cart.filter(item =>
    item && item.name && item.price && item.imgSrc && typeof item.quantity === 'number'
  );

  localStorage.setItem('cart', JSON.stringify(cart));

  cart.forEach(item => {
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  cartItem.innerHTML = `
    <img src="${item.imgSrc}" alt="${item.name}">
    <div class="cart-item-details">
      <div class="cart-item-title">${item.name}</div>
      <div class="cart-item-category">Plants</div>
      <div class="cart-item-price">${item.price}</div>
    </div>
    <div class="quantity-box">
      <span class="decrease">-</span>
      <span class="quantity">${item.quantity}</span>
      <span class="increase">+</span>
    </div>
  `;

  cartBox.appendChild(cartItem);

  // Select the relevant elements for this cart item
  const decreaseBtn = cartItem.querySelector('.decrease');
  const increaseBtn = cartItem.querySelector('.increase');
  const quantityDisplay = cartItem.querySelector('.quantity');

  // Add event listeners
  increaseBtn.addEventListener('click', () => {
    item.quantity++;
    quantityDisplay.textContent = item.quantity;
  });

  decreaseBtn.addEventListener('click', () => {
    if (item.quantity > 1) {
      item.quantity--;
      quantityDisplay.textContent = item.quantity;
    }
  });
});


  document.querySelector('.checkout-btn').addEventListener('click', function () {
    localStorage.removeItem('cart');
    alert('Order placed successfully!');
    window.location.reload();
  });
  

// Calculate subtotal
const subtotal = cart.reduce((sum, item) => {
    const numericPrice = parseFloat(item.price.replace(/[^\d.-]/g, ''));
    return sum + numericPrice * item.quantity;
  }, 0);
  
  // Set values in the summary section
  document.querySelector('.cart-summary .summary-item:nth-child(1) span:last-child').innerText = `₹ ${subtotal.toFixed(2)}`;
  
  // You can adjust delivery charges and discount as needed
  const deliveryCharges = 0;
  const discount = 220;
  
  // Calculate total
  const total = subtotal + deliveryCharges - discount;
  
  // Update total in the summary
  document.querySelector('.cart-summary .total span:last-child').innerText = `₹ ${total.toFixed(2)}`;
  

  function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Check if item already exists
    const existing = cart.find(item => item.name === product.name);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount(); // Call count updater

  }
  function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const countSpan = document.getElementById('cart-count');
  if (countSpan) {
    countSpan.textContent = totalItems;
  }
}
});
const cartBox = document.querySelector('.cart-box');
  cartBox.innerHTML = ''; // Clear existing content
  
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Filter out invalid/undefined items
  cart = cart.filter(item =>
    item &&
    item.name &&
    item.price &&
    item.imgSrc &&
    typeof item.quantity === 'number'
  );
  
  // Save filtered cart back to localStorage (optional cleanup)
  localStorage.setItem('cart', JSON.stringify(cart));
  
  // Render only valid items
  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <img src="${item.imgSrc}" alt="${item.name}">
      <div class="cart-item-details">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-category">Plants</div>
        <div class="cart-item-price">${item.price}</div>
      </div>
      <div class="quantity-box">
        <span>-</span>
        <span>${item.quantity}</span>
        <span>+</span>
      </div>
    `;
    cartBox.appendChild(cartItem);
  });
  
  
  