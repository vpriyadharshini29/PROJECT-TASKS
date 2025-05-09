
  
  let quantity = 1;
  const quantitySpan = document.getElementById('quantity');
  document.getElementById('increase').addEventListener('click', () => {
    quantity++;
    quantitySpan.innerText = quantity;
  });
  document.getElementById('decrease').addEventListener('click', () => {
    if (quantity > 1) {
      quantity--;
      quantitySpan.innerText = quantity;
    }
  });

 
  document.querySelector('.add-btn').addEventListener('click', function () {
    const name = document.querySelector('h2').innerText.trim();
    const price = document.querySelector('h4').innerText.trim();
    const imgSrc = document.querySelector('.product-image-main').getAttribute('src');

    const product = {
      name,
      price,
      imgSrc,
      quantity
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    
    const existingProduct = cart.find(item => item.name === product.name);

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  });

