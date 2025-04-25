let books = [
    {
      id: 1,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      isAvailable: true,
      borrower: null
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      isAvailable: true,
      borrower: null
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      isAvailable: true,
      borrower: null
    }
  ];

  function logOutput(message) {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent += message + "\n";
  }

  function clearOutput() {
    document.getElementById("output").textContent = "";
  }

  function searchBooks(keyword, field) {
    return books.filter(book => book[field].toLowerCase().includes(keyword.toLowerCase()));
  }

  function borrowBook(bookId, borrowerName) {
    const book = books.find(b => b.id === bookId);
    if (book && book.isAvailable) {
      book.isAvailable = false;
      book.borrower = borrowerName;
      logOutput(`✅ "${book.title}" borrowed by ${borrowerName}.`);
    } else {
      logOutput("❌ Book not available or doesn't exist.");
    }
  }

  function returnBook(bookId) {
    const book = books.find(b => b.id === bookId);
    if (book && !book.isAvailable) {
      logOutput(`✅ "${book.title}" returned by ${book.borrower}.`);
      book.isAvailable = true;
      book.borrower = null;
    } else {
      logOutput("❌ Book is already available or doesn't exist.");
    }
  }

  function listAvailableBooks() {
    clearOutput();
    const availableBooks = books.filter(book => book.isAvailable);
    logOutput("📚 Available Books:");
    if (availableBooks.length === 0) {
      logOutput("No books available.");
    } else {
      availableBooks.forEach(book => {
        logOutput(`- ${book.title} by ${book.author}`);
      });
    }
  }

  // UI Handlers
  function handleSearchBooks() {
    clearOutput();
    const keyword = document.getElementById("searchKeyword").value.trim();
    const field = document.getElementById("searchField").value;
    if (!keyword) return logOutput("Please enter a search keyword.");
    const results = searchBooks(keyword, field);
    if (results.length === 0) {
      logOutput("No matching books found.");
    } else {
      results.forEach(book => {
        logOutput(`${book.title} by ${book.author} (${book.genre}) - ${book.isAvailable ? "Available" : "Borrowed by " + book.borrower}`);
      });
    }
  }

  function handleBorrowBook() {
    const id = parseInt(document.getElementById("borrowId").value);
    const name = document.getElementById("borrowerName").value.trim();
    if (isNaN(id) || !name) return logOutput("Please provide valid book ID and borrower name.");
    borrowBook(id, name);
  }

  function handleReturnBook() {
    const id = parseInt(document.getElementById("returnId").value);
    if (isNaN(id)) return logOutput("Please provide a valid book ID.");
    returnBook(id);
  }

  // Initial message
  logOutput("Welcome to the Library System! Use the options above to interact.");