// JS106. Change the background color of the page using a button click.
function background(){
    document.body.style.backgroundColor='pink';
    
}
// JS107. Change the text of a paragraph using a button.
function changeText(){
    let text=document.getElementById("para");
    text.innerText="The Text has been changed";
}
// JS108. Hide and show an element using a toggle button.
function hideElement(){
    let El= document.getElementById("toggleDiv");
    El.style.display = (El.style.display==="none")? "block" : "none";
}
// JS109. Create a new list item dynamically.
function addNewList(){
    let li= document.createElement("li");
    li.textContent = "New Item";
    document.querySelector("#list ul").appendChild(li);  

}
// JS110. Remove a specific item from a list.
function removeList(){
    let remove=document.querySelector("#list1 ul");
    if(remove.firstElementChild){
        remove.removeChild(remove.firstElementChild)
    }
   

}
// JS111. Change the font size of a paragraph when a button is clicked.
function changeTheFont(){
document.getElementById("fontChange").style.fontSize = "32px";
}
// JS112. Change the text color of all paragraphs using querySelectorAll(). 
function changeParas(){
let paras =document.querySelectorAll("p");
paras.forEach(p=>p.style.color='red');
}


// JS114. Display an alert message when a button is clicked.
function alertMessage(){
alert("I'm an alert message");
}
// JS115. Toggle between two different text contents.
function toggleText(){
let text1=document.getElementById("toggleText");
text1.textContent = (text1.textContent==="Toggle this Text")?"Toggled  Text":"Toggle this Text ";
}
// JS116. Add a new heading to the page dynamically.
function addNewHeading(){
let h=document.createElement("h3");
h.textContent = "New Text";
document.getElementById("newP").appendChild(h);
}
// JS117. Remove all elements inside a div.
function removeContent(){
document.getElementById("removeAll").innerHTML="";
}
// JS118. Change the text input value dynamically.
function changeValue(){
let change=document.getElementById("ChangeValue");
change.value="I'm Changed";
}
