// JS53. Create a function that prints "Hello, World!".
function world(){
    console.log("HELLO WORLD!");
}
world();
// JS54. Write a function that takes a number and returns its cube.
function cube(num){
    return num*num*num;
}
console.log(cube(7));
//  JS55. Write a function to check if a number is even or odd.
let num1;
function even(num1){
    if(num1%2==0){
        console.log("The Number is Even");
        
    }
    else{
        console.log("The Number is Odd");
        
    }
};
even(7);
// JS56. Write a function to find the factorial of a number.
function factoial(n){
    if(n==0||n==1){
        return 1;
    }
    else{
        return (n * factoial(n-1));
    }
}
console.log(factoial(5));
//  JS57. Create a function to return the sum of two numbers.
function add(a,b){
    return a+b;
}
console.log(add(9,7));

// JS58. Write a function that returns the largest of three numbers.
function largest(num1,num2,num3){
    if(num1>num2 && num1>num3){
        return num1;
    }
    if(num2>num3 && num2>num1){
        return num1;
    }
    if(num3>num2 && num3>num1){
        return num1;
    }
}
console.log(largest(789,654,897));

//  JS59. Write a function that checks if a string is a palindrome.
let str;
let reversedstr="";
function palindrome(str){
  

        for(i=str.length-1;i>=0;i--){
reversedstr= reversedstr+str[i];
        }
        if(str==reversedstr){
            return "Yes the word is Palindrome"
        }
        else{
            return "No the word is not Palindrome"
        }
   
}
console.log(palindrome("malayalam"));

// JS60. Create a function to convert Celsius to Fahrenheit. 
let celsius;
let Fahrenheit
function celsiusToFahrenheit(celsius) {
    Fahrenheit= (celsius * 9/5) + 32;
    console.log(Fahrenheit);
    return Fahrenheit;
  }
  celsiusToFahrenheit(25); 
// JS61. Write a function to calculate the simple interest.
function simpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}

console.log(simpleInterest(1000, 5, 2)); 

//  JS62. Create a function that reverses an array.
function reverseArray(arr) {
    return arr.reverse();
}


console.log(reverseArray([1, 2, 3, 4, 5])); 


// JS63. Write a function that counts the number of vowels in a string.
let vowel="aeiouAEIOU";
let str1="Shanmugapriyadharshini";
let vowelsCount=0;
function vowelCount(str1){
    for(let char of str1){
        if (vowel.includes(char))
       { vowelsCount++;}
    }
    return vowelsCount;
}
console.log(vowelCount(str1));


// JS64. Write an arrow function that doubles each number in an array. 
const doubleNumbers = arr => arr.map(num => num * 2);


console.log(doubleNumbers([1, 2, 3, 4, 5])); 

// JS65. Create a function that takes a callback and calls it.
function callMe(callback) {
    callback(); 
}


function sayHello() {
    console.log("Hello, Callback!");
}

callMe(sayHello);

