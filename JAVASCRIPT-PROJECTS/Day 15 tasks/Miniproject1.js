document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
   
    clearErrors();
  
    try {
      validateForm();
      alert("Registration Successful!");
    } catch (err) {
      console.error("Validation Error:", err.message);
    }
  });
  
  function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    
    if (name === "") {
      throw new Error("Name is required");
    }
  
   
    if (email === "") {
      throw new Error("Email is required");
    } else if (!isValidEmail(email)) {
      throw new Error("Invalid email format");
    }
  
  
    if (password === "") {
      throw new Error("Password is required");
    } else if (password.length < 6) {
      throw new Error("Password must be at least 6 characters long");
    }
  }
  
  function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }
  
  function clearErrors() {
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
  }
  
  function displayError(field, message) {
    document.getElementById(field + "Error").textContent = message;
  }
  