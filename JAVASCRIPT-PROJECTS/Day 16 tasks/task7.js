let students = JSON.parse(localStorage.getItem("students")) || [];
let editIndex = -1;

function saveToStorage() {
  localStorage.setItem("students", JSON.stringify(students));
}

function renderStudents(data = students) {
  const table = document.getElementById("studentTable");
  table.innerHTML = "";
  data.forEach((student, index) => {
    table.innerHTML += `
      <tr>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.class}</td>
        <td>${student.grade}</td>
        <td>
          <button onclick="editStudent(${index})">Edit</button>
          <button onclick="deleteStudent(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}

function addStudent() {
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value;
  const studentClass = document.getElementById("class").value.trim();
  const grade = document.getElementById("grade").value.trim();

  if (!name || !age || !studentClass || !grade) return alert("Fill all fields");

  const newStudent = { name, age: Number(age), class: studentClass, grade };

  if (editIndex === -1) {
    students.push(newStudent);
  } else {
    students[editIndex] = newStudent;
    editIndex = -1;
  }

  saveToStorage();
  renderStudents();
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("class").value = "";
  document.getElementById("grade").value = "";
}

function editStudent(index) {
  const s = students[index];
  document.getElementById("name").value = s.name;
  document.getElementById("age").value = s.age;
  document.getElementById("class").value = s.class;
  document.getElementById("grade").value = s.grade;
  editIndex = index;
}

function deleteStudent(index) {
  if (confirm("Are you sure to delete this student?")) {
    students.splice(index, 1);
    saveToStorage();
    renderStudents();
  }
}

function searchStudent() {
  const query = document.getElementById("search").value.toLowerCase();
  const filtered = students.filter(s => s.name.toLowerCase().includes(query));
  renderStudents(filtered);
}


renderStudents();
