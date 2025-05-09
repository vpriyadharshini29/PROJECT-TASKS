const audio = document.getElementById('audio');
const title = document.getElementById('title');
const durationDisplay = document.getElementById('duration');
const volumeSlider = document.getElementById('volume');

const playlist = [
  { title: "Sample 1", src: "./songs/Aval Appadi Onrum Azhagillai.mp3" },
  { title: "Sample 2", src: "./songs/Aval Appadi Onrum Azhagillai.mp3" },
  { title: "Sample 3", src: "./songs/Aval Appadi Onrum Azhagillai.mp3" }
];

let currentIndex = 0;

function loadSong(index) {
  audio.src = playlist[index].src;
  title.textContent = `Song Title: ${playlist[index].title}`;
  audio.load();
}

function playSong() {
  audio.play();
}

function pauseSong() {
  audio.pause();
}

function stopSong() {
  audio.pause();
  audio.currentTime = 0;
}

function nextSong() {
  currentIndex = (currentIndex + 1) % playlist.length;
  loadSong(currentIndex);
  playSong();
}

function prevSong() {
  currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
  loadSong(currentIndex);
  playSong();
}

audio.addEventListener('loadedmetadata', () => {
  const minutes = Math.floor(audio.duration / 60);
  const seconds = Math.floor(audio.duration % 60);
  durationDisplay.textContent = `Duration: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
});

volumeSlider.addEventListener('input', () => {
  audio.volume = volumeSlider.value;
});

// Initialize first song
loadSong(currentIndex);
