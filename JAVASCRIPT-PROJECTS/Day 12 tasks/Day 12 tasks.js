// JS145: Create an array of employees with name, age, and position
const employees = [
    { name: "Alice", age: 25, position: "Developer" },
    { name: "Bob", age: 30, position: "Designer" },
    { name: "Charlie", age: 28, position: "Manager" }
  ];
  console.log("JS145:", employees);
  
  // JS146: Fetch and display a list of products from an API
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
      console.log("JS146: Products from API", data);
    });
  
  // JS147: Sort an array of objects by age in ascending order
  const sortedByAge = [...employees].sort((a, b) => a.age - b.age);
  console.log("JS147: Sorted by age", sortedByAge);
  
  // JS148: Filter an array to show only students with grade 'A'
  const students = [
    { name: "Sam", grade: "A" },
    { name: "Tom", grade: "B" },
    { name: "Lily", grade: "A" }
  ];
  const gradeAStudents = students.filter(s => s.grade === "A");
  console.log("JS148: Grade A students", gradeAStudents);
  
  // JS149: Find a specific product in an array by name
  const products = [
    { name: "Laptop", price: 800 },
    { name: "Phone", price: 500 }
  ];
  const foundProduct = products.find(p => p.name === "Phone");
  console.log("JS149: Found product", foundProduct);
  
  // JS150: Convert an array of objects to only an array of names
  const employeeNames = employees.map(e => e.name);
  console.log("JS150: Employee names", employeeNames);
  
  // JS151: Modify an object inside an array and update its value
  employees[1].position = "Lead Designer";
  console.log("JS151: Updated employee", employees);
  
  // JS152: Count how many objects meet a specific condition
  const countDevelopers = employees.filter(e => e.position === "Developer").length;
  console.log("JS152: Number of Developers", countDevelopers);
  
  // JS153: Implement a search function to find objects dynamically
  function searchByName(arr, searchTerm) {
    return arr.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  console.log("JS153: Search 'li'", searchByName(employees, "li"));
  
  // JS154: Group objects based on a property value
  function groupByPosition(arr) {
    return arr.reduce((grouped, item) => {
      const key = item.position;
      grouped[key] = grouped[key] || [];
      grouped[key].push(item);
      return grouped;
    }, {});
  }
  console.log("JS154: Grouped by position", groupByPosition(employees));
  
  // JS155: Remove a specific object from an array by property
  const filteredEmployees = employees.filter(e => e.name !== "Bob");
  console.log("JS155: Removed 'Bob'", filteredEmployees);
  
  // JS156: Add new objects dynamically to an array
  employees.push({ name: "David", age: 22, position: "Intern" });
  console.log("JS156: Added new employee", employees);
  
  // JS157: Display the highest-priced product in an array
  const maxPriceProduct = products.reduce((max, item) => item.price > max.price ? item : max, products[0]);
  console.log("JS157: Highest priced product", maxPriceProduct);
  