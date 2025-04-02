
let groceryList = [];


function addItem(item) {
    groceryList.push(item);
    console.log(`${item} added to the grocery list.`);
}


function viewItems() {
    if (groceryList.length === 0) {
        console.log("The grocery list is empty.");
    } else {
        console.log("Grocery List:");
        groceryList.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
}


function removeItem(item) {
    let index = groceryList.indexOf(item);
    if (index !== -1) {
        groceryList.splice(index, 1);
        console.log(`${item} removed from the grocery list.`);
    } else {
        console.log(`${item} not found in the grocery list.`);
    }
}


addItem("Milk");
addItem("Eggs");
addItem("Bread");

viewItems(); 

removeItem("Eggs");

viewItems(); 
