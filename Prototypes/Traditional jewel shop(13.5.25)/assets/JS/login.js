document.addEventListener("DOMContentLoaded", function () {
  const regContainer = document.querySelector(".login-container");
  const registerModalEl = document.getElementById("registerModal");
  const registerModal = new bootstrap.Modal(registerModalEl);
  const nameInput = document.getElementById("reg-name");
  const emailInput = document.getElementById("reg-email");
  const passwordInput = document.getElementById("reg-password");
  const confirmList = document.getElementById("confirm-details-list");
  const confirmBtn = document.getElementById("confirm-register-btn");
  const modalBody = registerModalEl.querySelector(".modal-body");
  const modalTitle = document.getElementById("registerModalLabel");

  // Clear modal content
  function resetModal() {
    confirmList.style.display = "none";
    confirmBtn.style.display = "none";
    confirmList.innerHTML = "";
    modalBody.querySelector("#login-form-wrapper")?.remove();
    modalBody.querySelector("p")?.remove(); // Remove top message
  }

  // Register button clicked
  document.querySelector('[data-bs-target="#registerModal"]').addEventListener("click", function (e) {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!name || !email || !password) {
      e.preventDefault();
      alert("Please fill all fields.");
      return;
    }

    resetModal();
    modalTitle.innerText = "Confirm Your Details";

    const msg = document.createElement("p");
    msg.classList.add("mb-3");
    msg.textContent = "Please confirm your information before completing registration.";
    modalBody.prepend(msg);

    confirmList.style.display = "block";
    confirmBtn.style.display = "inline-block";

    confirmList.innerHTML = `
      <li class="list-group-item"><strong>Name:</strong> ${name}</li>
      <li class="list-group-item"><strong>Email:</strong> ${email}</li>
      <li class="list-group-item"><strong>Password:</strong> ${"*".repeat(password.length)}</li>
    `;
  });

  // Register confirmation submit
  confirmBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("loggedIn", "false");

    registerModal.hide();
    showLoginForm();
  });

  // Show login form in same modal
  function showLoginForm() {
    registerModal.show();
    modalTitle.innerText = "Login";
    resetModal();

    const loginForm = document.createElement("div");
    loginForm.id = "login-form-wrapper";
    loginForm.innerHTML = `
      <p class="mb-3">Enter your login credentials to access your account.</p>
      <div class="position-relative mb-3">
        <i class="bi bi-envelope-fill input-icon"></i>
        <input type="email" class="form-control custom-input" id="login-email" placeholder="Email">
      </div>
      <div class="position-relative mb-3">
        <i class="bi bi-key input-icon"></i>
        <input type="password" class="form-control custom-input" id="login-password" placeholder="Password">
      </div>
      <button class="submit-btn w-100" id="login-btn">LOGIN</button>
    `;
    modalBody.appendChild(loginForm);

    // Handle login submit
    document.getElementById("login-btn").addEventListener("click", () => {
      const loginEmail = document.getElementById("login-email").value.trim();
      const loginPassword = document.getElementById("login-password").value.trim();
      const user = JSON.parse(localStorage.getItem("user"));

      if (user && loginEmail === user.email && loginPassword === user.password) {
        localStorage.setItem("loggedIn", "true");
        registerModal.hide();
        showLogoutScreen(user.name);
      } else {
        alert("Invalid credentials.");
      }
    });
  }

  // Click login link inside register card
  document.getElementById("open-login-from-register").addEventListener("click", function (e) {
    e.preventDefault();
    showLoginForm();
  });

  // Logout screen after successful login
  function showLogoutScreen(userName) {
    regContainer.innerHTML = `
      <div class="login-header">ONLY WHOLESALE</div>
      <div class="p-4 text-center">
        <h4>Welcome, ${userName} 👋</h4>
        <p>You are now logged in.</p>
        <button id="logout-btn" class="btn btn-danger mt-3">LOGOUT</button>
      </div>
    `;

    document.getElementById("logout-btn").addEventListener("click", () => {
      localStorage.setItem("loggedIn", "false");
      location.reload(); // reload to restore original register/login form
    });
  }

  // Auto-login if already logged in
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  if (storedUser && isLoggedIn) {
    showLogoutScreen(storedUser.name);
  }
});
