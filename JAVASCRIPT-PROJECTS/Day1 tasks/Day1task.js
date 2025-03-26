// JS1: Display 'Hello, JavaScript!' in console
console.log('Hello, JavaScript!');

// JS2: Create variables using var, let, and const
var name = "John";  
let age = 25;       
const isStudent = true; 

console.log("Name:", name);       
console.log("Age:", age);        
console.log("Is Student:", isStudent); 

// JS3: Difference between var, let, and const in terms of scope
function Scope() {
 {
    var varVariable = 'var';
    let letVariable = 'let ';
    const constVariable = 'const ';
    console.log(varVariable);   
    console.log(letVariable);   
    console.log(constVariable); 
  }
  console.log(varVariable); 
  // console.log(letVariable); 
  // console.log(constVariable); 
}
Scope();

// JS4: Check variable types using typeof
let namee = "Alice";          
let agee = 30;                
let isEmployed = false;       
let height;                  
let hobbies = ["reading", "coding"];  
let address = { city: "NY", zip: 10001 };  

console.log(typeof namee);        
console.log(typeof agee);         
console.log(typeof isEmployed);  
console.log(typeof height);      
console.log(typeof hobbies);     
console.log(typeof address); 

// JS5: Create a user profile object
const userProfile = {
  naame: 'John Doe',
  agge: 25,
  isStudent: false
};
console.log(userProfile);

// JS6: Store and display favorite colors using an array
let favoriteColors = ['Red', 'Blue', 'Green'];
console.log(favoriteColors);

// JS7: Type conversion
let strNumber = '100';
let num = 100;
console.log(Number(strNumber)); 
console.log(String(num)); // 

// JS8: Write a function that returns a Boolean based on condition
function isAdult(age) {
  return age >= 18;
}
console.log(isAdult(20)); 
// JS9: Null vs Undefined
let nullVar = null;
let undefinedVar;
console.log(typeof nullVar); 
console.log(typeof undefinedVar); 

// JS10: Use Symbol data type
let symbol1 = Symbol('one');
let symbol2 = Symbol('two');
console.log(symbol1 === symbol2); 

// JS11: BigInt data type
let bigIntNumber = BigInt(12345678901234567890);
console.log(typeof bigIntNumber); 



// JS13: Celsius to Fahrenheit conversion
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}
console.log(celsiusToFahrenheit(25)); // 77

// Mini Project 1: Online Food Ordering System

 let restaurantName= 'Pizza Palace';
  let orderNumber = 1234;
  let foodItems= ['Pizza', 'Pasta', 'Salad'];
  let totalPrice= 45.99;
  let status;
  let isDelivered=Delivered(status) ;
  let item;
  
  function Delivered(status) {
    if (status==="Delivered"){
        return true;
    }
    else{
        return false;
    }
  }
 
    console.log("Order:"+ orderNumber );
    console.log("Restaurant",restaurantName);
    console.log("Items:", foodItems);
    console.log("Total Price:",totalPrice);
    console.log("Delivery Status:", Delivered(status) );


  
  function addItem(item) {
    foodItems.push(item);
  }
  function removeItem(item) {
   foodItems = foodItems.filter(food => food !== item);
  }




// Mini Project 2: Online Quiz System

let quiz1= {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    correctAnswer: 'Paris',
    userAnswer: 'Paris',
  };
 let quiz2= {
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '4',
    userAnswer: 3,
  };


  console.log('Quiz 1 Question: ' + quiz1.question);
  console.log('Quiz 1 options: ' + quiz1.options);
  console.log('Quiz 1 Correct Answer: ' + quiz1.correctAnswer);
  console.log('Quiz 1 User Answer: ' + quiz1.userAnswer);

  console.log('Quiz 2 Question: ' + quiz2.question);
  console.log('Quiz 2 options: ' + quiz2.options);
  console.log('Quiz 2 Correct Answer: ' + quiz2.correctAnswer);
  console.log('Quiz 2 User Answer: ' + quiz2.userAnswer);
