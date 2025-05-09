function calculateEMI() {
    const amount = parseFloat(document.getElementById("amount").value);
    const interest = parseFloat(document.getElementById("interest").value);
    const years = parseFloat(document.getElementById("years").value);
    const resultDiv = document.getElementById("result");
  
    if (!amount || !interest || !years) {
      resultDiv.innerHTML = "<p>Please fill all fields correctly.</p>";
      return;
    }
  
    const monthlyInterest = interest / 12 / 100;
    const totalMonths = years * 12;
  
    const emi = (amount * monthlyInterest * Math.pow(1 + monthlyInterest, totalMonths)) /
                (Math.pow(1 + monthlyInterest, totalMonths) - 1);
  
    const totalPayment = emi * totalMonths;
  
    resultDiv.innerHTML = `
      <p><strong>Monthly EMI:</strong> ₹${emi.toFixed(2)}</p>
      <p><strong>Total Payment:</strong> ₹${totalPayment.toFixed(2)}</p>
    `;
  }
  