const productCards = Array.from(document.querySelectorAll('.product-card'));
const productWrapper = document.querySelector('.row .col-md-9 .row');
const sortDropdown = document.querySelector('.sort-bar select');
const priceRange = document.getElementById('priceRange');
const rangeValue = document.getElementById('rangeValue');

function extractPrice(priceText) {
  return parseFloat(priceText.replace(/[^\d.]/g, ''));
}

function renderProducts(cards) {
  productWrapper.innerHTML = ''; 
  cards.forEach(card => {
    const col = document.createElement('div');
    col.className = 'col-md-4';
    col.appendChild(card);
    productWrapper.appendChild(col);
  });
}

function bindAddToCartButtons() {
  document.querySelectorAll('.add-btn').forEach((button) => {
    button.addEventListener('click', function () {
      const card = this.closest('.product-card');
      const name = card.querySelector('.product-name').innerText;
      const price = card.querySelector('.product-price').innerText;
      const img = card.querySelector('img');
      const imgSrc = new URL(img.getAttribute('src'), window.location.href).href;

      const product = {
        name,
        price,
        imgSrc,
        quantity: 1
      };

      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const existingProduct = cart.find(item => item.name === name);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cart.push(product);
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${name} added to cart!`);
    });
  });
}

function filterAndSort() {
  const maxPrice = parseInt(priceRange.value);
  rangeValue.textContent = maxPrice;

  let filtered = productCards.filter(card => {
    const price = extractPrice(card.querySelector('.product-price').innerText);
    return price <= maxPrice;
  });

  const sortBy = sortDropdown.value;

  filtered.sort((a, b) => {
    const nameA = a.querySelector('.product-name').innerText.toLowerCase();
    const nameB = b.querySelector('.product-name').innerText.toLowerCase();
    const priceA = extractPrice(a.querySelector('.product-price').innerText);
    const priceB = extractPrice(b.querySelector('.product-price').innerText);

    switch (sortBy) {
      case 'Alphabetically:A to Z':
        return nameA.localeCompare(nameB);
      case 'Alphabetically:Z to A':
        return nameB.localeCompare(nameA);
      case 'Price: Low to High': 
        return priceA - priceB;
      case 'Price: High to Low':
        return priceB - priceA;
      default:
        return 0;
    }
  });

  renderProducts(filtered);      // Render updated product list
  bindAddToCartButtons();        // Re-attach event listeners
}

sortDropdown.addEventListener('change', filterAndSort);
priceRange.addEventListener('input', filterAndSort);

filterAndSort(); // Initial load
