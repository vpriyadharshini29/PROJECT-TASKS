const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const preview = document.getElementById('preview');


dropZone.addEventListener('click', () => fileInput.click());


fileInput.addEventListener('change', (e) => handleFile(e.target.files[0]));


dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', () => {
  dropZone.classList.remove('dragover');
});


dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropZone.classList.remove('dragover');
  const file = e.dataTransfer.files[0];
  handleFile(file);
});

function handleFile(file) {
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    const isImage = file.type.startsWith('image/');
    preview.innerHTML = `
      <p><strong>File Name:</strong> ${file.name}</p>
      <p><strong>Size:</strong> ${(file.size / 1024).toFixed(2)} KB</p>
      ${isImage ? `<img src="${reader.result}" style="max-width:200px;">` : `<p>File uploaded successfully.</p>`}
    `;
  };
  reader.readAsDataURL(file);
}
