// 2.	Image Preview Before Uploading
// Allows users to preview an image before uploading.
// Requirements:
// 1.	Select an image from the file input.
// 2.	Display the selected image in a preview area.
const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");

imageInput.addEventListener("change", () => {
  const file = imageInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      preview.src = e.target.result;
      preview.style.display = "block";
    };
    reader.readAsDataURL(file);
  }
});
