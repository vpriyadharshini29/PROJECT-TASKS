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
