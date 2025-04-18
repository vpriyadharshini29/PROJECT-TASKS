
// JS119. Change the text of a button when clicked.
function changeText(btn){
   btn.textContent="Changed";
}

// JS120. Show an alert when the mouse enters a specific area.
function showAlert()
{
    alert("Your mouse enters ")
} 
// JS121. Detect when the user presses the "Enter" key.
function detectEnter(event){
   if( event.key==="Enter"){
alert("You have clicked Enter");
   }
}

// JS122.Change the background color of a page when a button is clicked.
function background(){
    document.body.style.backgroundColor='pink';
    
}
//  JS123. Toggle a password field between text and password.
 function togglePass(){
   let changing=document.getElementById("pass");
   changing.type=(changing.type==="password")?"text":"password";
 }
 
// JS124. Display the coordinates of the mouse pointer when moved. 
function coords(event){
    document.getElementById("mouse2").innerText=`X: ${event.clientX}, Y: ${event.clientY}`;
}
// JS125. Prevent the default behavior of a form submission.
function preventSubmit(event){
    event.preventDefault();
    alert("Submission is prevented!");
}
// JS126. Count the number of times a button is clicked. 
function countClicks(btn){
   let count = document.getElementById("displaycount");
   if((!btn.dataset.count)){
    btn.dataset.count=0;
   }
   btn.dataset.count++;
   count.textContent=`Clicked ${btn.dataset.count} times`;
}
// JS127. Create a button that disappears when clicked.
function disappear(btn) {
    btn.style.display = "none";
  }
// JS128. Toggle an element's visibility when another element is clicked.
function hideElement(){
    let El= document.getElementById("toggleDiv");
    El.style.display = (El.style.display==="none")? "block" : "none";
}
//  JS129. Play a sound when a button is clicked.
function playSound() {
    document.getElementById("beep").play();
  }
// JS130. Display a loading animation when the page is loading. 
window.addEventListener("load",()=>
{
    document.getElementById("loader").style.display="none";
}
)
// JS131. Change an image when a button is clicked.
function changeImage() {
    document.getElementById("imageToChange").src = "./Image/mald.jfif";
  }
