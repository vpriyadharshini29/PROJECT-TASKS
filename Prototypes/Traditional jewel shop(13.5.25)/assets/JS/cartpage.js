window.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const tbody = document.querySelector('table tbody');

  cart.forEach((item, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.category}</td>
      <td><img src="${item.image}" class="product-img" alt="Product"></td>
      <td>${item.color}</td>
      <td>${item.stock}</td>
      <td>
        <div class="quantity-box">
          <button class="qty-decrease">-</button>
          <span class="qty-val">${item.quantity}</span>
          <button class="qty-increase">+</button>
        </div>
      </td>
      <td>RS ${item.price}</td>
      <td class="total">RS ${item.total}</td>
      <td><button class="delete-btn" data-index="${index}"><i class="bi bi-trash"></i></button></td>
    `;
    tbody.appendChild(row);
  });

  // Quantity update & delete handling
  tbody.addEventListener('click', (e) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (e.target.closest('.qty-increase') || e.target.closest('.qty-decrease')) {
      const btn = e.target.closest('button');
      const row = btn.closest('tr');
      const qtySpan = row.querySelector('.qty-val');
      const price = parseInt(row.querySelector('td:nth-child(6)').textContent.replace(/\D/g, ''));
      let qty = parseInt(qtySpan.textContent);

      qty += btn.classList.contains('qty-increase') ? 1 : -1;
      if (qty < 1) qty = 1;

      qtySpan.textContent = qty;
      row.querySelector('.total').textContent = `RS ${qty * price}`;

      const index = [...tbody.children].indexOf(row);
      cart[index].quantity = qty;
      cart[index].total = qty * price;
      localStorage.setItem('cart', JSON.stringify(cart));
    }

    if (e.target.closest('.delete-btn')) {
      const index = parseInt(e.target.closest('.delete-btn').getAttribute('data-index'));
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      e.target.closest('tr').remove();
    }
  });
});
