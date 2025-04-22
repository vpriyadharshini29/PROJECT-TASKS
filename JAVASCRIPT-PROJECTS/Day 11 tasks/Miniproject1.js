// Mini Project 1: Stopwatch with SessionStorage
// A simple stopwatch that continues running even after page refresh.
// Features:
// ✔ Start, Stop, and Reset the timer.
// ✔ SessionStorage keeps the timer running even after page refresh.
let timer;
let time = Number(sessionStorage.getItem('time')) || 0;

function updateDisplay() {
  document.getElementById('display').textContent = time + 's';
}

function startTimer() {
  if (timer) return;
  timer = setInterval(() => {
    time++;
    sessionStorage.setItem('time', time);
    updateDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  stopTimer();
  time = 0;
  sessionStorage.setItem('time', time);
  updateDisplay();
}

window.onload = updateDisplay;
