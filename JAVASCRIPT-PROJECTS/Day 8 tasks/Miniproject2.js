// 2.	Palindrome Checker (Real-World Mini Project)
 
// Checks whether a given word or phrase is a palindrome (reads the same forward and backward).
// Requirements
// 1.	The user enters a word or sentence.
// 2.	The function should remove spaces and special characters.
// 3.	Convert the string to lowercase to ensure accurate comparison.
// 4.	Check if the word is the same forward and backward.
// 5.	Display "Palindrome" or "Not a Palindrome".
function checkPalindrome(input) {
   
    let cleaned = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  

    let reversed = cleaned.split("").reverse().join("");
  
  
    if (cleaned === reversed) {
      console.log("Palindrome");
    } else {
      console.log("Not a Palindrome");
    }
  }
  
 
  checkPalindrome("A man, a plan, a canal, Panama");  
  checkPalindrome("Hello World");                      