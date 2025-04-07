let inventory=
[{product:"apple",
    quantity:3,
},
{
    product:"Samsung",
    quantity:2
}
]
function display(inventory){
inventory.forEach(
    (item)=>{
        console.log(`Product :${item.product},Quantity:${item.quantity}` );
        
    }
)
};

function addProduct(productName,quantity){
    inventory.push({product:productName,quantity:quantity});
    return inventory;
}
function removeProduct(productName){
    inventory=inventory.filter(item=>item.product!==productName);
    return inventory;
}
display(inventory);
addProduct("iPhone",4);
display(inventory);
removeProduct("apple");
display(inventory);


