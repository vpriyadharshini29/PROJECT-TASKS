
window.onload = function () {
    const mode = localStorage.getItem("mode");
    if (mode === "dark") {
      document.body.classList.add("dark-mode");
    }
  };
  
  function toggleMode() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("mode", isDark ? "dark" : "light");
  }
  