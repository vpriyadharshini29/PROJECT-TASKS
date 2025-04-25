// 1.	Inventory Management System Requirements
// •	Store Product Details: Maintain product ID, name, category, quantity, and price in an array of objects.
// •	2. Check Stock Availability: Allow searching for a product by ID or name to check stock status.
// •	3. Update Inventory: Enable adding or removing stock when new shipments arrive or products are sold.
// •	4️. Calculate Total Inventory Value: Compute the total worth of all products in stock.

const inventory = [
    { id: 101, name: "Hammer", category: "Tools", quantity: 50, price: 10 },
    { id: 102, name: "Screwdriver", category: "Tools", quantity: 30, price: 5 },
    { id: 103, name: "Drill", category: "Power Tools", quantity: 20, price: 45 },
  ];
  
  
  function checkStock(search) {
    const product = inventory.find(p =>
      p.id === search || p.name.toLowerCase() === search.toLowerCase()
    );
    if (product) {
      console.log(`Stock for "${product.name}": ${product.quantity}`);
    } else {
      console.log("Product not found.");
    }
  }
  
 
  function updateStock(productId, changeQty) {
    const product = inventory.find(p => p.id === productId);
    if (product) {
      product.quantity += changeQty;
      console.log(`Updated quantity for "${product.name}": ${product.quantity}`);
    } else {
      console.log("Product not found.");
    }
  }
  
  
  function calculateTotalValue() {
    const total = inventory.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    console.log(`Total Inventory Value: $${total}`);
  }
  
  
  console.log("Initial Inventory:", inventory);
  
 
  checkStock("Drill");         
  checkStock(102);             
  
 
  updateStock(101, 20);       
  updateStock(103, -5);        
  
  
  calculateTotalValue();
  