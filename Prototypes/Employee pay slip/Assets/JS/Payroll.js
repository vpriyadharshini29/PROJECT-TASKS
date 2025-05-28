
document.getElementById("payrollForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  // Get form values
  const name = document.getElementById("employeeName").value.trim();
  const role = document.getElementById("employeeRole").value.trim();
  const id = document.getElementById("employeeID").value.trim();
  const date = document.getElementById("payDate").value;
  const basicSalary = document.getElementById("basicSalary").value;
  const totalSalary = document.getElementById("totalSalary").value;
  const workingDays = document.getElementById("workingDays").value;
  const presentDays = document.getElementById("presentDays").value;
  const leaveDays = document.getElementById("leaveDays").value;
  const additions = document.getElementById("additions").value;
  const deductions = document.getElementById("deductions").value;

  // Validate all required fields
  if (
    !name || !role || !id || !date ||
    !basicSalary || !totalSalary || !workingDays ||
    !presentDays || !leaveDays || !additions || !deductions
  ) {
    alert("Please fill in all the fields before submitting the payroll.");
    return; // Stop submission if any field is empty
  }

  // Prepare data
  const payrollData = {
    name,
    role,
    id,
    date,
    basicSalary: parseFloat(basicSalary),
    totalSalary: parseFloat(totalSalary),
    workingDays: parseInt(workingDays),
    presentDays: parseInt(presentDays),
    leaveDays: parseInt(leaveDays),
    additions: parseFloat(additions),
    deductions: parseFloat(deductions),
  };

  // Save to localStorage
  localStorage.setItem("payroll", JSON.stringify(payrollData));

  // Navigate to payslip page
  window.location.href = "Payslip page.html";
});

