let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  const filter = document.getElementById("filter").value;
  const tbody = document.getElementById("taskTable");
  tbody.innerHTML = "";

  const sorted = [...tasks].sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  const filtered = sorted.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  filtered.forEach((task, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="${task.completed ? 'completed' : ''}">${task.title}</td>
      <td>${task.category}</td>
      <td>${task.dueDate}</td>
      <td>${task.completed ? 'Completed' : 'Pending'}</td>
      <td>
        <button onclick="toggleStatus(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
        <button onclick="deleteTask(${index})">Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function addTask() {
  const title = document.getElementById("title").value.trim();
  const category = document.getElementById("category").value;
  const dueDate = document.getElementById("dueDate").value;

  if (!title || !dueDate) return alert("Enter title and due date");

  tasks.push({ title, category, dueDate, completed: false });
  saveTasks();
  renderTasks();

  document.getElementById("title").value = "";
  document.getElementById("dueDate").value = "";
}

function toggleStatus(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  if (confirm("Delete this task?")) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  }
}


renderTasks();
