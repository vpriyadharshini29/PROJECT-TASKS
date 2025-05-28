window.addEventListener("DOMContentLoaded", () => {
  const data = JSON.parse(localStorage.getItem("payroll"));
  if (!data) return;

  // Convert strings to numbers safely
  const basicSalary = parseFloat(data.basicSalary) || 0;
  const additions = parseFloat(data.additions) || 0;
  const deductions = parseFloat(data.deductions) || 0;

  // Calculate Total Salary & Total Earnings
  const totalSalary = basicSalary + additions;
  const totalEarnings = totalSalary - deductions;

  // Fill top section
  document.querySelector(".left").innerHTML = `
    <div class="info-value"><span class="info-label">Employee Name</span> : ${data.name}</div>
    <div class="info-value"><span class="info-label">Employee I’D</span> : ${data.id}</div>
    <div class="info-value"><span class="info-label">Role</span> : ${data.role}</div>
  `;

  const month = new Date(data.date).toLocaleString('default', { month: 'long' });

  document.querySelector(".right").innerHTML = `
    <div class="info-value"><span class="info-label">Date</span> : ${data.date}</div>
    <div class="info-value"><span class="info-label">Month</span> : ${month}</div>
  `;

  // Fill table row
  document.querySelector("tbody").innerHTML = `
    <tr>
      <td>${data.id}</td>
      <td>${data.name}</td>
      <td>${basicSalary.toFixed(2)}</td>
      <td>${totalSalary.toFixed(2)}</td>
      <td>${additions.toFixed(2)}</td>
      <td>${deductions.toFixed(2)}</td>
    </tr>
  `;

  // Display total earnings
  document.querySelector(".total-earnings").innerText = `Total Earnings: ₹ ${totalEarnings.toFixed(2)}`;

});


 function downloadPayslip() {
  const originalContent = document.querySelector('.payslip-box');
  
  // Clone the payslip content
  const clone = originalContent.cloneNode(true);

  // Remove buttons from the cloned version
  const btnGroup = clone.querySelector('.btn-group-custom');
  if (btnGroup) btnGroup.remove();

  // Create a container div to render clone off-screen
  const hiddenContainer = document.createElement('div');
  hiddenContainer.style.position = 'absolute';
  hiddenContainer.style.left = '-9999px';
  hiddenContainer.appendChild(clone);
  document.body.appendChild(hiddenContainer);

  // Generate PDF from the clone
  html2pdf()
    .set({
      margin: 0.5,
      filename: 'Payslip.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    })
    .from(clone)
    .save()
    .then(() => {
      // Clean up: remove hidden clone
      document.body.removeChild(hiddenContainer);
    });
}

  document.getElementById("saveBtn").addEventListener("click", () => {
  // Get input values (adjust selectors based on your form IDs or classes)
  const name = document.getElementById("empName").value;
  const id = document.getElementById("empId").value;
  const role = document.getElementById("empRole").value;
  const date = document.getElementById("salaryDate").value;
  const basicSalary = document.getElementById("basicSalary").value;
  const additions = document.getElementById("additions").value;
  const deductions = document.getElementById("deductions").value;

  // Create object
  const payrollData = {
    name,
    id,
    role,
    date,
    basicSalary,
    additions,
    deductions
  };

  // Save to localStorage
  localStorage.setItem("payroll", JSON.stringify(payrollData));

  // Optional: Feedback to user
  alert("Payroll details saved successfully!");
});


document.querySelector('.sidebar-toggle').addEventListener('click', function() {
      document.querySelector('.sidebar').classList.toggle('active');
    });