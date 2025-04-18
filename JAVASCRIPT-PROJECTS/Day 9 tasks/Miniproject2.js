// 2.	Stopwatch Timer (Real-World Mini Project)
// ✅ A simple stopwatch that starts, stops, and resets using buttons. Requirements
// 1.	Start Timer: Clicking the "Start" button should begin counting seconds.
// 2.	Stop Timer: Clicking the "Stop" button should pause the timer.
// 3.	Reset Timer: Clicking the "Reset" button should set the timer back to 0.

let count=0;
let timer=null;
function updateDisplay(){
    document.getElementById("display").textContent=count;
}
function startTimer(){
if (timer===null){
    timer=setInterval(()=>{
        count++;
        updateDisplay();
        } ,1000)
}
}
function stopTimer(){
    clearInterval(timer);
    timer=null;

}
function resetTimer(){
    stopTimer();
    count=0;
    updateDisplay();

}