// 1. Syntax Error handling
try {
    eval('alert("Hello)'); // invalid JS
  } catch (err) {
    console.error("Syntax Error caught:", err.message);
  }
  
  // 2. Reference Error handling
  try {
    console.log(nonExistentVar);
  } catch (err) {
    console.error("Reference Error:", err.message);
  }
  
  // 3. Division by zero (in JS, this is Infinity, but we can handle it)
  function divide(a, b) {
    try {
      if (b === 0) throw new Error("Cannot divide by zero");
      console.log("Result:", a / b);
    } catch (err) {
      console.error(err.message);
    }
  }
  divide(10, 0);
  
  // 4. Custom error for invalid age
  function checkAge(age) {
    try {
      if (age < 0 || age > 120) throw new Error("Invalid age entered.");
      console.log("Valid age:", age);
    } catch (err) {
      console.error("Age Error:", err.message);
    }
  }
  checkAge(-5);
  
  // 5. Throw TypeError if input is not a number
  function square(x) {
    if (typeof x !== "number") throw new TypeError("Input must be a number.");
    return x * x;
  }
  try {
    console.log(square("text"));
  } catch (err) {
    console.error(err.message);
  }
  
  // 6. Nested try...catch
  try {
    try {
      let obj = null;
      obj.name = "test"; // TypeError
    } catch (innerErr) {
      console.error("Inner Error:", innerErr.message);
      throw new Error("Outer error triggered.");
    }
  } catch (outerErr) {
    console.error("Outer Error:", outerErr.message);
  }
  
  // 7. console.table
  const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
  ];
  console.table(users);
  
  // 8. Debugging with warn and error
  console.warn("This is a warning");
  console.error("This is an error");
  
  // 9. Debugger in a loop
  for (let i = 0; i < 3; i++) {
    debugger; // Open browser dev tools to use
    console.log("Loop iteration:", i);
  }
  
  // 10. API call failure handling
  async function fetchUser() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/invalid-url");
      if (!res.ok) throw new Error("API call failed");
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error("API Error:", err.message);
    }
  }
  fetchUser();
  
  // 11. finally block example
  try {
    throw new Error("Some error");
  } catch (err) {
    console.error(err.message);
  } finally {
    console.log("Cleanup code runs no matter what.");
  }
  
  // 12. Prevent infinite recursion
  let count = 0;
  function recurse() {
    try {
      if (count > 10) throw new Error("Recursion limit exceeded");
      count++;
      recurse();
    } catch (err) {
      console.error(err.message);
    }
  }
  recurse();
  
  // 13. Error logging using LocalStorage
  function logError(error) {
    const logs = JSON.parse(localStorage.getItem("errorLogs")) || [];
    logs.push({ message: error.message, time: new Date().toISOString() });
    localStorage.setItem("errorLogs", JSON.stringify(logs));
  }
  try {
    throw new Error("Something went wrong!");
  } catch (err) {
    logError(err);
    console.log("Error logged to LocalStorage.");
  }
  