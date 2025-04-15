// JS79. Create a Person constructor with properties name and age, and create multiple instances.
function Person(name, age) {
    this.name = name;
    this.age = age;
  
  }
  
  let p12 = new Person("Alice", 25);
  let p22= new Person("Bob",22);
  
  


// JS80. Add a method to the Person constructor that returns a greeting message. 
p12.greet = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  };

console.log(p12.greet());
 

// JS81. Create a Car constructor with brand, model, and year, and display the details.
function Car1(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  
    this.displayDetails = function() {
      console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    };
  }
  
  let myCar1 = new Car1("Toyota", "Camry", 2015);
  myCar1.displayDetails(); 
  

// JS82. Modify the Car constructor to include a method that calculates the car's age.
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  
    this.getCarAge = function() {
      let currentYear = new Date().getFullYear();
      return currentYear - this.year;
    };
  }
  
  let myCar = new Car("Toyota", "Camry", 2015);
  console.log(`Car Age: ${myCar.getCarAge()} years`); 
  

// JS83. Use this inside a constructor function to refer to an object and modify properties dynamically.
function Name(name,age){
this.name = name;
this.age =age;
this.rename=function(rename){
    this.name=rename;
}
}
let p1= new Name("Charlie",28);
console.log(p1.name);

p1.rename("Jack");
console.log(p1.name);

// JS84. Create a BankAccount constructor with accountNumber, balance, and methods to deposit and withdraw money.
function BankAccount(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  
    this.deposit = function(amount) {
      this.balance += amount;
    };
  
    this.withdraw = function(amount) {
      if (amount <= this.balance) this.balance -= amount;
      else console.log("Insufficient funds");
    };
  }
  
  let acc1 = new BankAccount("12345", 1000);
  acc1.deposit(500);
  acc1.withdraw(300);
  console.log("Balance:", acc1.balance);
  

// JS85. Implement default values in a constructor function when no parameters are provided.
function User(name="Guest",age=30){
    this.name=name;
    this.age=age;
    this.fun=function(){
        console.log(`My name is ${this.name} and ${this.age} years old`);
        
    }
}
let p2 = new User();
p2.fun();
p3= new User("John",20);
p3.fun();


// JS86. Create a Student constructor with an array property grades and a method to calculate the average grade.
function Student(name,grades){
    this.name=name;
    this.grades=grades;
    this.average=function(grade){
        let total=grade.reduce((sum,p)=>sum+p,0);
        let averageMark = total/grade.length;
        return averageMark;
    }

    }
    let s1= new Student("Priya",[45,78,65,45,65]);
    console.log(s1.average([45,78,65,45,65]));
    

// JS87. Use prototype to add a new method to a constructor function dynamically.
function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.speak = function() {
    return `${this.name} makes a sound.`;
  };
  
  let a1 = new Animal("Leo");
  console.log(a1.speak());
  
 
// JS88. Create a Book constructor function with title, author, and price, and filter books based on price.
function Book(title,author,price){
    this.title=title;
    this.author=author;
    this.price =price;

}

let b1= new Book("The Alchemist", "Paulo Coelho", 1999);

let b2= new Book("Atomic Habits", "James Clear", 2018);
let b3= new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
let Books=[b1,b2,b3];

let cheapBooks=Books.filter((book)=>book.price < 2000);
 console.log(cheapBooks);
 
 

// JS89. Implement inheritance in constructor functions where a Manager extends an Employee constructor.000000
 function Employee(name,salary){
    this.name=name;
    this.salary=salary;
 }
 function Manager(name,salary,department){
    Employee.call(this,name,salary);
    this.department=department;
 }
 let m1= new Manager("Aish",43000,"Development");
 console.log(m1.name);
 console.log(m1.department);
 
 

// JS90. Create a ShoppingCart constructor with an array of products and methods to add, remove, and calculate total price.

function ShoppingCart(products){
    this.products=[];
    

    this.addProduct = function(product){
        this.products.push( product)
        return this.products;
        
    }
    this.removeProduct =function(name){
        this.products=this.products.filter(p => p.name!==name)
        return this.products;
    }
    this.getTotal = function(){
        let total = this.products.reduce((sum,p)=>sum+p.price,0)
        return total;
    }
    

}
let cart = new ShoppingCart();
cart.addProduct({ name: "Phone", price: 700 });
cart.addProduct({ name: "Case", price: 50 });
cart.removeProduct("Case");
console.log("Total:", cart.getTotal());

// JS91. Use new keyword inside a function to create an instance of another constructor function.
 function CreatePerson(name,age){
    return new Person(name,age);
 }
 Person.prototype.greet = function () {
    return `Hello, I'm ${this.name}`;
  };
 let p4= new CreatePerson("Eve",24)
console.log(p4.greet());
