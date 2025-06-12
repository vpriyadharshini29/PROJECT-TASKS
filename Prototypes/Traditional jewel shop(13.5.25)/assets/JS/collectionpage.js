document.querySelectorAll('.buy-now-btn').forEach(button => {
  button.addEventListener('click', () => {
    const productCard = button.closest('.product-card');
    const img = productCard.querySelector('img').getAttribute('src');
    const name = productCard.querySelector('p').textContent.trim();
    const price = parseInt(productCard.querySelectorAll('p')[1].textContent.replace(/[₹\s]/g, ''));
    
    // Sample default values (adjust as needed)
    const item = {
      category: 'Antique',
      image: img,
      color: 'Ruby',
      stock: 300,
      name: name,
      quantity: 1,
      price: price,
      total: price
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Item added to cart!');
  });
});
