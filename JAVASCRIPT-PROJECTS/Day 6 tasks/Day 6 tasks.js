// JS66. Create an array of 5 student names.
let studentNames=["Aarav","Viswa","Jishnu","Shravan","Janmesh"];
console.log(studentNames);
// JS67. Add a new student name to the array using push().
studentNames.push("Sasvikaa Sri");
console.log(studentNames);
//  JS68. Remove the last student using pop().
studentNames.pop();
console.log(studentNames);
// JS69. Use map() to convert all names to uppercase.

const Names1 = (studentNames => studentNames.map(value => value.toUpperCase()));
console.log(Names1(studentNames));



// JS70. Use filter() to get students whose names start with "A".
const students = ["Alice", "Bob", "Andrew", "Charlie", "Angela"];

const studentsStartingWithA = students.filter(name => name.startsWith("A"));

console.log(studentsStartingWithA); 
//  JS71. Use forEach() to print each student name.
 
studentNames.forEach((item,index)=>
    console.log(`${index+1}.${item}`)
);
// JS72. Create an object for a book
let book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 15
  };
  console.log("Book object:", book);
  
  // JS73. Use Object.keys() to get all book properties
  let keys = Object.keys(book);
  console.log("Book properties:", keys);
  
  // JS74. Use Object.values() to get all book values
  let values = Object.values(book);
  console.log("Book values:", values);
  
  // JS75. Add a new property genre to the book object
  book.genre = "Fiction";
  console.log("After adding genre:", book);
  
  // JS76. Use delete to remove price from the book
  delete book.price;
  console.log("After deleting price:", book);
  
  // JS77. Merge a publisher object into the book object
  let publisher = {
    publisher: "HarperOne",
    year: 1988
  };
  
  Object.assign(book, publisher);
  console.log("After merging publisher:", book);
  
  // JS78. Convert the book object into an array of key-value pairs
  let entries = Object.entries(book);
  console.log("Book as entries:", entries);
  
