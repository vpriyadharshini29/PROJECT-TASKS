 // Task 2: Determine the Season Based on the Month
function Season(month) {
   
    switch (month) {
        case 12:
        case 1:
        case 2:
           console.log('Winter');
    
            break;
        case 3:
        case 4:
        case 5:
            console.log('Spring');
          
            break;
        case 6:
        case 7:
        case 8:
            console.log('Summer');
            
            break;
        case 9:
        case 10:
        case 11:
            console.log('Fall');
           
            break;
        default:
            console.log('Winter');
           
    }
    return 0;
}
Season(3);

// Task 3: Determine Type of Vehicle Based on Number of Wheels
function Vehicle(wheels) {
    
    switch (wheels) {
        case 2:
            console.log('Bicycle or Motorcycle');
            
           
            break;
        case 4:
            console.log( 'Car');
            
           
            break;
        case 6:
        case 8:
             console.log('Truck');
             
            
            break;
        default:
            console.log( 'Unknown vehicle type');
            
            
    }
    return 0;
}
Vehicle(4);

// Task 4: Menu Selection in a Restaurant
function menuSelection(menuOption) {
   
    switch (menuOption) {
        case 'Pizza':
            console.log('Delicious cheesy pizza with various toppings.');
            
           
            break;
        case 'Burger':
            console.log('Juicy burger with fresh veggies and sauce.');
           
            break;
        case 'Pasta':
            console.log( 'Italian pasta with rich, flavorful sauce.');
           
            break;
        case 'Salad':
            console.log('Fresh garden salad with a light dressing.');
           
            break;
        default:
            console.log('Option not available.');
          
    }
    return 0;
}
menuSelection('Pasta');

// Task 5: Day of the Week Planner
let day;
function dayPlanner(day) {
   
    switch (day) {
        case 'monday':
            console.log('Start the week with a workout!');
            
            break;
        case 'tuesday':
            console.log('Plan your work tasks.');
            
            break;
        case 'wednesday':
            console.log( 'Mid-week relaxation.');
           
            break;
        case 'thursday':
            console.log('Catch up on reading.');
          
            break;
        case 'friday':
            console.log('Prepare for the weekend!');
           
            break;
        case 'saturday':
            console.log('Enjoy outdoor activities.');
          
            break;
        case 'sunday':
            console.log('Relax and recharge.');
           
            break;
        default:
            console.log('Invalid day.');
          
    }
    return 0;
}
dayPlanner('wednesday');

// TASK 1
let membershipLevel;
let price;

function calculateDiscountedPrice(membershipLevel, price) {
    let discountPercentage;
    switch (membershipLevel) {
        case 'Bronze':
            discountPercentage = 5; 
            break;
        case 'Silver':
            discountPercentage = 10; 
            break;
        case 'Gold':
            discountPercentage = 15; 
            break;
        case 'Platinum':
            discountPercentage = 20; 
            break;
        default:
            discountPercentage = 0; 
    }
    
   
    const discountAmount = (price * discountPercentage) / 100;
    const discountedPrice = price - discountAmount;
    
    return console.log("The discounted amount is"+ discountedPrice);
}

calculateDiscountedPrice("Silver",50000);