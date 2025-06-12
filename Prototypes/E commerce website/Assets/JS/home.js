
  document.addEventListener('DOMContentLoaded', () => {
    // Add to Cart Function
    function addToCart(product) {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      const existing = cart.find(item => item.name === product.name);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Add event listener to all add-to-cart buttons
    const buttons = document.querySelectorAll('.add-to-cart-btn');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const product = {
          name: button.getAttribute('data-name'),
          price: button.getAttribute('data-price'),
          imgSrc: button.getAttribute('data-img')
        };

        addToCart(product); // Save to cart
        alert(`${product.name} has been added to your cart!`);
        
        // ✅ Redirect to cart page (change the file name if needed)
        // window.location.href = 'cart.html';
      });
    });
  });

