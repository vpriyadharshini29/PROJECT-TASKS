let products = [];
const container = document.getElementById('productContainer');
const priceFilter = document.getElementById('priceFilter');
const sortSelect = document.getElementById('sortSelect');
const details = document.getElementById('details');


fetch('products.json')
  .then(res => res.json())
  .then(data => {
    products = data;
    displayProducts(products);
  })
  .catch(error => {
    container.innerHTML = '<p>Error loading products.</p>';
    console.error(error);
  });


function displayProducts(list) {
  container.innerHTML = '';
  list.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <p>Category: ${product.category}</p>
      <button onclick="showDetails(${product.id})">Details</button>
    `;
    container.appendChild(div);
  });
}


priceFilter.addEventListener('change', updateDisplay);
sortSelect.addEventListener('change', updateDisplay);

function updateDisplay() {
  let filtered = [...products];

  if (priceFilter.checked) {
    filtered = filtered.filter(p => p.price < 500);
  }

  const sortOption = sortSelect.value;
  if (sortOption === 'low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'high') {
    filtered.sort((a, b) => b.price - a.price);
  }

  displayProducts(filtered);
}


function showDetails(id) {
  const product = products.find(p => p.id === id);
  details.innerHTML = `
    <h2>${product.name}</h2>
    <p><strong>Price:</strong> $${product.price}</p>
    <p><strong>Category:</strong> ${product.category}</p>
    <p><em>This is a great product! More features coming soon.</em></p>
  `;
}
