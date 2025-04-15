// 1.	Username Generator
// Generates a unique username based on user input.
// Requirements
// 1.	The user enters their first name and last name.
// 2.	The function should generate a username by:
// o	Taking the first 3 letters of the first name.
// o	Taking the first 3 letters of the last name.
// o	Adding a random number (100-999) at the end.
// 3.	Display the generated username.
function generateUsername(firstName, lastName) {
    
    let firstPart = firstName.slice(0, 3).toLowerCase();
    let lastPart = lastName.slice(0, 3).toLowerCase();
  
    
    let randomNumber = Math.floor(Math.random() * 900) + 100;
  
    
    let username = firstPart + lastPart + randomNumber;
  
   
    console.log("Generated Username:", username);
  }
  
  
  generateUsername("John", "Doe");
  