const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 10, category: "fiction" },
    { id: 2, title: "1984", author: "George Orwell", price: 15, category: "fiction" },
    { id: 3, title: "Becoming", author: "Michelle Obama", price: 20, category: "biography" },
    { id: 4, title: "Sapiens", author: "Yuval Noah Harari", price: 25, category: "non-fiction" },
    { id: 5, title: "Educated", author: "Tara Westover", price: 18, category: "biography" },
    { id: 6, title: "Atomic Habits", author: "James Clear", price: 22, category: "non-fiction" },
  ];
  
  const bookContainer = document.getElementById("bookContainer");
  
  function renderBooks(filteredBooks) {
    bookContainer.innerHTML = "";
    filteredBooks.forEach(book => {
      const div = document.createElement("div");
      div.className = "book";
      div.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Price: $${book.price}</p>
        <p>Category: ${book.category}</p>
      `;
      bookContainer.appendChild(div);
    });
  }
  
  function filterBooks() {
    const category = document.getElementById("category").value;
    const minPrice = parseFloat(document.getElementById("minPrice").value) || 0;
    const maxPrice = parseFloat(document.getElementById("maxPrice").value) || Infinity;
  
    let filteredBooks = books.filter(book => {
      const categoryMatch = category === "all" || book.category === category;
      const priceMatch = book.price >= minPrice && book.price <= maxPrice;
      return categoryMatch && priceMatch;
    });
  
    renderBooks(filteredBooks);
  }
  
  
  renderBooks(books);
  