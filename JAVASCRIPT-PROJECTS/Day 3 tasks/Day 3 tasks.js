// JS27. Write an if condition to check if a number is positive.
let num;
function positive(num){
    if(num>0){
        console.log("The Number is positive");
        
    }
    else{
        console.log("The Number is negative");
        
    }
};
positive(4);
//  JS28. Use if-else to check if a person is an adult.
let age;
function adult(age){
    if(age>18){
        console.log("The person is Adult");
        
    }
    else{
        console.log("The Person is not Adult");
        
    }
};
adult(14);

// JS29. Check if a number is even or odd using if-else.
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
//  JS30. Use if-else if-else to check grade categories.
let stu_Marks;
function grade(stu_Marks){
    if(stu_Marks>90 && stu_Marks <=100 ){
        console.log("The Grade is -A-");
        
    }
    else if(stu_Marks>80 && stu_Marks <=90 ){
        console.log("The Grade is -B-");
        
    }
    else if(stu_Marks>70 && stu_Marks <=80 ){
        console.log("The Grade is -C-");
        
    }
    else if(stu_Marks>60 && stu_Marks <=70 ){
        console.log("The Grade is -D-");
        
    }
    else if (stu_Marks>50 && stu_Marks <=60 ){
        console.log("The Grade is -E-");
        
    }
    else  if(stu_Marks>40 && stu_Marks <=50 ){
        console.log(" -FAIL-");
        
    }
};
grade(74);
//  JS31. Check if a person is eligible for a driver's license.
let condition;
function licenseCheck(condition){
    if(condition="Completed the Process"){
        console.log("The  Person is Eligible for Driver's License");
        
    }
    else{
        console.log("The  Person is Not Eligible for Driver's License");
        
    }
};
licenseCheck("Completed the process");

// JS32. Create a nested if condition to check both login and admin status.

let status;
function statusCheck(status){
    if(status="admin"){
        console.log("Access granted as Admin");
        
    }
    else if(status="Member"){
        console.log("Access granted as Member");
        
    }
    else{
        console.log("Access denied");
        
    }
};
statusCheck("admin");


// JS33. Use a switch statement to print messages for different days.
let Day="Sunday";
switch(Day){
    case"Monday":
    console.log("First Day of the Week");
    
    break;

    case"TUESDAY":
    console.log("Second Day of the Week");
    
    break;

    case"Wednesday":
    console.log("Third Day of the Week");
    
    break;

    case"Thursday":
    console.log("Fourth Day of the Week");
    
    break;

    case"Friday":
    console.log("Fifth Day of the Week");
    
    break;

    case"Saturday":
    console.log("Sixth Day of the Week");
    
    break;

    case"Sunday":
    console.log("Seventh Day of the Week");
    
    break;
}

// JS34. Use a ternary operator to check if a person is eligible for a senior citizen discount.
let age1;
(age1>=60)?(console.log("The Person is senior Citizen")):(console.log("The Person is not a Senior citizen"));

// JS35. Check if a user is logged in using &&.
let email;
let password;

function statusCheck1(email,password){
    if(email&&password){
        console.log("Logged In");
        
    }
    else{
        console.log("Access denied");
        
    }
};
statusCheck1("mail@gmail.com","password");

 
// JS36. Use || to check if a username or email is provided. 
let username = "";
let email2 = "example@example.com";
function checkInput(username, email2) {
    if (username || email2) {
      console.log("Input provided");
    } else {
      console.log("No input provided");
    }
  }
  
  
  
  checkInput(username, email2);

// JS37. Use ! to negate a boolean variable.
let value=true;
console.log(!value);

// JS38. Check if the current year is a leap year.
let year;
function checkLeapYear(year){
if(  year%4 == 0){
    console.log("The Year is Leap Year");
}
else{
    console.log("The Year is not Leap Year");
}


};
checkLeapYear(2025);
// JS39. Validate a password length using an if statement.
let password2="Nandhini2908";
if(password2.length>8){
    console.log("VALID PASSWORD");
    
}
else{
    console.log("PASSWORD INVALID");
    
};



















