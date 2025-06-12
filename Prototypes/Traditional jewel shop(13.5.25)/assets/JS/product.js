// Attach event listener to all BUY NOW buttons on product cards
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".btn-buy").forEach((btn) => {
    btn.addEventListener("click", () => {
      let product = {};

      // Case 1: From product card
      const card = btn.closest(".product-card");
      if (card) {
        const name = card.querySelector(".product-name")?.textContent.trim();
        const priceText = card.querySelector(".price")?.textContent.trim();
        const image = card.querySelector("img")?.getAttribute("src");
        const price = parseFloat(priceText.replace(/[^\d.]/g, ""));

        product = {
          category: "Earrings",
          image,
          color: "Gold",
          stock: "In Stock",
          quantity: 1,
          price,
          total: price,
          name
        };
      }

      // Case 2: From detailed view
      const detail = btn.closest(".col-md-7");
      if (detail) {
        const name = detail.querySelector(".product-title")?.textContent.trim();
        const sku = detail.querySelector(".product-sku strong")?.textContent.trim();
        const priceText = detail.querySelector(".price")?.textContent.trim();
        const price = parseFloat(priceText.replace(/[^\d.]/g, ""));

        product = {
          category: "Earrings",
          image: "./traditional jewellery website images/earings/image12.png", // Placeholder if not dynamic
          color: "Matte Gold",
          stock: "In Stock",
          quantity: 1,
          price,
          total: price,
          name: `${name} (SKU: ${sku})`
        };
      }

      if (product.name) {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Product added to cart!");
        // Optionally redirect or update UI
      }
    });
  });
});
