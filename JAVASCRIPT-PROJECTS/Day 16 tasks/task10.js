let employees = [
    { id: 1, name: "John Doe", department: "HR", status: "Present" },
    { id: 2, name: "Jane Smith", department: "IT", status: "Absent" },
    { id: 3, name: "Mark Johnson", department: "Sales", status: "Present" },
    { id: 4, name: "Emily Davis", department: "HR", status: "Absent" },
  ];
  
  const employeeTable = document.getElementById("employeeTable").getElementsByTagName('tbody')[0];
  const departmentFilter = document.getElementById("department");
  const statusFilter = document.getElementById("status");
  
  function renderEmployees(filteredEmployees) {
    employeeTable.innerHTML = "";
    filteredEmployees.forEach(employee => {
      const row = employeeTable.insertRow();
      row.innerHTML = `
        <td>${employee.name}</td>
        <td>${employee.id}</td>
        <td>${employee.department}</td>
        <td>${employee.status}</td>
        <td>
          <button onclick="toggleStatus(${employee.id})">Toggle Status</button>
        </td>
      `;
    });
  }
  
  function filterEmployees() {
    const department = departmentFilter.value;
    const status = statusFilter.value;
  
    let filteredEmployees = [...employees];
  
    if (department !== "all") {
      filteredEmployees = filteredEmployees.filter(e => e.department === department);
    }
  
    if (status !== "all") {
      filteredEmployees = filteredEmployees.filter(e => e.status === status);
    }
  
    renderEmployees(filteredEmployees);
  }
  
  function addEmployee() {
    const name = prompt("Enter employee's name:");
    const department = prompt("Enter employee's department (HR, IT, Sales):");
    const status = prompt("Enter attendance status (Present/Absent):");
  
    const newEmployee = {
      id: employees.length + 1,
      name: name,
      department: department,
      status: status,
    };
  
    employees.push(newEmployee);
    filterEmployees(); // Re-render with new data
  }
  
  function toggleStatus(employeeId) {
    const employee = employees.find(e => e.id === employeeId);
    employee.status = employee.status === "Present" ? "Absent" : "Present";
    filterEmployees(); // Re-render with updated data
  }
  
  
  renderEmployees(employees);
  