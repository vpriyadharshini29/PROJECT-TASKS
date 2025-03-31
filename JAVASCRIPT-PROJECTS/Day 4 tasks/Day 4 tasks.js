// JS40. Print numbers from 1 to 10 using a for loop.
let i; 
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// JS41. Print even numbers from 2 to 20 using a for loop.
let i1;
for (let i1 = 2; i1 <= 20; i1 += 2) {
    console.log(i1);
}

//  JS42. Print numbers from 10 to 1 using a while loop.
let i2 = 10;
while (i2 >= 1) {
    console.log(i2);
    i2--;
}

// JS43. Print "Hello World!" 5 times using a do-while loop.
let count = 0;
do {
    console.log("Hello World!");
    count++;
} while (count < 5);

// JS44. Iterate over an array and print each element using a for...of loop.
const arr = [1, 2, 3, 4, 5];
for (let element of arr) {
    console.log(element);
}

//  JS45. Iterate over an object and print its properties using a for...in loop. 
const obj = { name: "Alice", age: 25, city: "New York" };
for (let property in obj) {
    console.log(property + ": " + obj[property]);
}

// JS46. Sum numbers from 1 to 10 using a for loop.
let sum = 0;
for (let i3 = 1; i3 <= 10; i3++) {
    sum = sum+ i3;
}
console.log(sum);

// JS47. Find the first number greater than 50 in an array using break.
const numbers = [12, 45, 60, 32, 89];
for (let num of numbers) {
    if (num > 50) {
        console.log("First number greater than 50:", num);
        break;
    }
}
//  JS48. Skip printing numbers divisible by 3 using continue.
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}

// JS49. Create a multiplication table for 5 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// JS50. Reverse a string using a loop.
const str = "hello";
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversedStr = reversedStr+ str[i];
}
console.log(reversedStr);

 
// JS51. Count the number of vowels in a string using a loop.
const vowels = "aeiouAEIOU";
let str1 = "hello world";
let vowelCount = 0;
for (let char of str1) {
    if (vowels.includes(char)) {
        vowelCount++;
    }
}
console.log("Number of vowels:", vowelCount);

// JS52. Find the largest number in an array using a loop.
const arr1 = [12, 5, 8, 130, 44];
let largest = arr1[0];
for (let num of arr1) {
    if (num > largest) {
        largest = num;
    }
}
console.log("Largest number:", largest);


