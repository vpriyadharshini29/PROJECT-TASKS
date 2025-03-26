//  JS14. Write a program that calculates the total price of 3 products. 
let a = 10;
let b = 40;
let c = 20;
const totalPrice= a+b+c;
console.log(totalPrice);

//  JS15. Create a script that checks if a number is even or odd using the modulus operator.
let num=12;
(num%2==0)? (console.log("Even")):(console.log("odd"));

// JS16. Write a program that increments a number from 1 to 10 using ++. 
let numb=1;
function increment(numb){
if( numb<=10){
    console.log(numb);
    numb++;
    
}
else{
    return 0;
}};
increment();


// JS17. Check if a user is eligible to vote using comparison operators.
let age=14;
(age>=18)? (console.log("Eligible")):(console.log("Not Eligible"));

// JS18. Write a program to compare two strings using == and ===. 
let string1="one";
let string2="two";
if(string1==string2){
    console.log("Same Strings");
}
else{
    console.log("Not same strings");
}
if(string1===string2){
    console.log("Same Strings");
}
else{
    console.log("Not same strings");
}


// JS19. Use && to check if a user has a valid email and password.
const userEmail = "mail@mail.com";
const userPassword = "password";
let email1;
let password1;
function User(email1, password1) {
    if (email1 && password1) {
        console.log("Valid email and password.");
        return true;
    } else {
        console.log("Invalid email or password.");
        return false;
    }
}




User(userEmail, userPassword);

// JS20. Write a program to update wallet balance using assignment operators.

let walletBalance=10000;
let newAmount;
function addAmount(newAmount){
    walletBalance += newAmount;
    console.log(walletBalance);
}
addAmount(2000);


//  JS21. Use a ternary operator to check if a product is available in stock.
let stock=2;
(stock>=0)?(console.log("The Product is available")):(console.log("The Product is unavailable"));


// JS22. Create a simple "greater than" condition to compare two numbers. 
let num1;
let num2;
function compare(num1,num2){
    if(num1>num2){
        console.log("Number1 is greater");
    }
    else{
        console.log("Number2 is greater");
    }

}
compare(100,200);
// JS23. Write a JavaScript program to apply discounts if a cart total exceeds $50.
let a1 = 10;
let b1 = 40;
let c1 = 20;
const totalPrice1= a+b+c;
function discount(totalPrice1){
    if(totalPrice1>50){
        totalPrice1-+(0.5*totalPrice1);
    }
    else{
        return 0;
    }
}
discount();

//  JS24. Use || to allow login using email or phone number.
const userEmail1 = "mail@mail.com";
const userPassword1 = "password";
function User1(email, password) {
    if (email || password) {
        console.log("Valid User");
        return true;
    } else {
        console.log("Invalid User");
        return false;
    }
}




User1(userEmail1, userPassword1);

// JS25. Implement a "Buy 1 Get 1 Free" condition using if and &&.
let quantity;
function buyOneGetOne(quantity) {
    let totalItems = 0;

    
    if (quantity > 0 && quantity % 2 === 0) {
        totalItems = quantity*2; 
    } else if (quantity > 0) {
        totalItems = quantity *2; 
    }

    console.log("Total items after applying Buy 1 Get 1 Free: " + totalItems);
    return totalItems;
}


buyOneGetOne(3); 
//  JS26. Check if a year is a leap year using the modulus operator.
let year;
function checkLeapYear(year){
if(  year%4 == 0){
    console.log("The Year is Leap Year");
}
else{
    console.log("The Year is not Leap Year");
}


};
checkLeapYear(2404);
