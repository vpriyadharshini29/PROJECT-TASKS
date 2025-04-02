// 2.	Sum of Digits of a Number
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
