// JS158
const person = { name: "Alice", age: 30 };
const jsonString = JSON.stringify(person);
console.log("JS158:", jsonString);

// JS159
const parsedObject = JSON.parse(jsonString);
console.log("JS159:", parsedObject);

// JS160 (Fetch local JSON file)
fetch('data.json')
  .then(response => response.json())
  .then(data => console.log("JS160:", data));

// JS161
const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 28 }
];
localStorage.setItem('users', JSON.stringify(users));
const storedUsers = JSON.parse(localStorage.getItem('users'));
console.log("JS161:", storedUsers);

// JS162
fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => {
    const table = document.createElement("table");
    data.forEach(user => {
      const row = table.insertRow();
      row.innerHTML = `<td>${user.name}</td><td>${user.email}</td>`;
    });
    document.body.appendChild(table);
  });

// JS163
storedUsers[0].age = 26;
localStorage.setItem('users', JSON.stringify(storedUsers));
console.log("JS163 (Modified):", storedUsers);

// JS164
const filtered = storedUsers.filter(user => user.age > 25);
console.log("JS164:", filtered);

// JS165
const sorted = [...storedUsers].sort((a, b) => a.age - b.age);
console.log("JS165 (Sorted by age):", sorted);

// JS166
const found = storedUsers.find(user => user.name === "Jane");
console.log("JS166:", found);

// JS167
function addUser(newUser) {
  const data = JSON.parse(localStorage.getItem('users')) || [];
  data.push(newUser);
  localStorage.setItem('users', JSON.stringify(data));
}
addUser({ name: "Tom", age: 32 });
console.log("JS167:", JSON.parse(localStorage.getItem('users')));

// JS168
function removeUserByName(name) {
  let data = JSON.parse(localStorage.getItem('users')) || [];
  data = data.filter(user => user.name !== name);
  localStorage.setItem('users', JSON.stringify(data));
}
removeUserByName("Tom");
console.log("JS168:", JSON.parse(localStorage.getItem('users')));

// JS169 (Dropdown)
fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const select = document.createElement("select");
    data.forEach(item => {
      const option = document.createElement("option");
      option.value = item.id;
      option.textContent = item.name;
      select.appendChild(option);
    });
    document.body.appendChild(select);
  });

// JS170 (Fetch with .catch)
fetch('data.json')
  .then(res => res.json())
  .then(data => console.log("JS170:", data))
  .catch(error => console.error("JS170 Error:", error));
