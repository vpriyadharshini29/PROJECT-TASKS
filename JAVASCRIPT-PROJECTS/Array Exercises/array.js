let fruits = ["Apple", "Banana", "Orange"];

// 1. Add "Mango" to the end
fruits.push("Mango");
console.log("After adding Mango:", fruits);



// 2. Remove "Orange"
let fruits1 = ["Apple", "Banana", "Orange"];

  fruits1.pop();

console.log("After removing Orange:", fruits1);

// 3. Add "Pineapple" to the beginning
let fruits2 = ["Apple", "Banana", "Orange"];
fruits2.unshift("Pineapple");
console.log("After adding Pineapple at start:", fruits2);

// 4. Remove "Apple"
let fruits3 = ["Apple", "Banana", "Orange"];
 fruits3.shift("Apple");

console.log("After removing Apple:", fruits3);

// 5. Find position of "Banana"
let fruits4 = ["Apple", "Banana", "Orange"];
let bananaIndex = fruits4.indexOf("Banana");
console.log("Index of Banana:", bananaIndex);

// 6. Check if "Grapes" is in the array
let fruits5 = ["Apple", "Banana", "Orange"];
let hasGrapes = fruits5.includes("Grapes");
console.log("Contains Grapes?", hasGrapes);

// 7. Create shallow copy
let fruits6 = ["Apple", "Banana", "Orange"];
let fruitsCopy = fruits6.slice();
console.log("Shallow copy of fruits:", fruitsCopy);

// 8. Combine with ["Grapes", "Kiwi"]
let fruits7 = ["Apple", "Banana", "Orange"];
let moreFruits = ["Grapes", "Kiwi"];
let combinedFruits = fruits7.concat(moreFruits);
console.log("Combined fruits:", combinedFruits);

// 9. Extract first two elements
let fruits8 = ["Apple", "Banana", "Orange"];
let firstTwo = fruits8.slice(0, 2);
console.log("First two fruits:", firstTwo);

// 10. Replace "Banana" with "Strawberry"
let fruits9 = ["Apple", "Banana", "Orange"];
let bananaPos = fruits9.indexOf("Banana");

  fruits9[bananaPos] = "Strawberry";

console.log("After replacing Banana with Strawberry:", fruits9);

// 11. Reverse the order
let fruits10 = ["Apple", "Banana", "Orange"];
fruits10.reverse();
console.log("Reversed fruits:", fruits10);

// 12. Sort alphabetically
let fruits11 = ["Apple", "Banana", "Orange"];
fruits11.sort();
console.log("Sorted fruits:", fruits11);

// 13. Uppercase each fruit name
let fruits12 = ["Apple", "Banana", "Orange"];
let upperFruits = fruits12.map(function(fruit) {
  return fruit.toUpperCase();
});
console.log("Uppercase fruits:", upperFruits);

// 14. Filter fruits with "a"

let fruits13 = ["Apple", "Banana", "Orange"];
let fruitsWithA = fruits13.filter(function(fruit) {
  return fruit.toLowerCase().includes("a");
});
console.log("Fruits with letter 'a':", fruitsWithA);

// 15. Print each fruit using forEach

let fruits14 = ["Apple", "Banana", "Orange"];
console.log("Fruits using forEach:");
fruits14.forEach(function(fruit) {
  console.log(fruit);
});

// 16. Check if all have more than 3 characters
let fruits15 = ["Apple", "Banana", "Orange"];
let allMoreThan3 = fruits15.every(function(fruit) {
  return fruit.length > 3;
});
console.log("All fruits have more than 3 letters?", allMoreThan3);

// 17. Find first fruit starting with "O"
let fruits16 = ["Apple", "Banana", "Orange"];
let startsWithO = fruits16.find(function(fruit) {
  return fruit.startsWith("O");
});
console.log("First fruit starting with 'O':", startsWithO);

// 18. Join all fruits into a string
let fruits17 = ["Apple", "Banana", "Orange"];
let fruitString = fruits17.join(", ");
console.log("Joined fruits string:", fruitString);

// 19. Remove the second element
let fruits18 = ["Apple", "Banana", "Orange"];
fruits18.splice(1, 1);
console.log("After removing second element:", fruits18);

// 20. Flatten a nested array
let nestedFruits = ["Apple", ["Banana", "Orange"], "Grapes"];
let flatFruits = nestedFruits.flat();
console.log("Flattened fruits:", flatFruits);
