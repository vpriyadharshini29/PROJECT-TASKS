// Form submission handler
loginBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  // Simple validation
  if (username === "" || password === "") {
    alert("Please enter both username and password.");
    return;
  }

  // Redirect to overview page
  window.location.href = "Overview page.html"; // Update the path as needed

  // Reset form fields
  usernameInput.value = "";
  passwordInput.value = "";
  passwordInput.setAttribute("type", "password");
  toggleIcon.classList.add("bi-eye-slash");
  toggleIcon.classList.remove("bi-eye");
});
