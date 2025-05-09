const images = [
    "./Images/f2.jpeg",
    "./Images/f3.jpeg",
    "./Images/f4.jpeg",
   
  ];
  
  let currentIndex = 0;
  const currentImage = document.getElementById("currentImage");
  const thumbnailContainer = document.getElementById("thumbnailContainer");
  
  function showImage(index) {
    currentImage.src = images[index];
    currentIndex = index;
  }
  
  
  setInterval(() => {
    nextImage();
  }, 2000); 
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }
  
 
  images.forEach((img, index) => {
    const thumb = document.createElement("img");
    thumb.src = img;
    thumb.className = "thumbnail";
    thumb.onclick = () => showImage(index);
    thumbnailContainer.appendChild(thumb);
  });
  
  
  showImage(currentIndex);
  