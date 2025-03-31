// 2.	Sum of Digits of a Number
// 1.	User Input: The program should prompt the user to enter a positive number.
// 2.	Digit Extraction: Use the modulus operator % to extract the last digit.
// 3.	Summation Process: Use a while loop to repeatedly sum the digits until the number becomes 0.
// 4.	Output Display: Print the sum of the digits after the loop ends.
let number = prompt("Enter a positive number:");
number = parseInt(number);
let sumOfDigits = 0;
while (number > 0) {
    let digit;
    digit=number%10;
    sumOfDigits = sumOfDigits+digit; 
    number = Math.floor(number / 10); 
}
console.log("Sum of digits:", sumOfDigits);
