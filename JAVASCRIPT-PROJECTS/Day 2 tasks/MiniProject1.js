let age;
let country;
function checkCitizenShip(age,country){
    if(age>=18 && country==="India"){
        console.log("This person is Indian");
    }
    else{
        console.log("This person is not Indian");
    }
}
checkCitizenShip(19,"India");