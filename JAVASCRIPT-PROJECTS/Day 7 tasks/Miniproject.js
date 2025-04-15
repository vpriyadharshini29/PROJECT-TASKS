// 1.	Employee Management System
// Description: A simple system to manage employee records with a constructor function.
// Features:
// ✔ Create employee objects with name, position, and salary.
// ✔ Add a method to increase salary dynamically.
// ✔ Store employees in an array and display them in a table.

function Employee(name,position,salary){
    this.name=name;
    this.position=position;
    this.salary=salary;
    
     let increaseSalary = function(amount){
        
        this.salary+=amount;
        return salary;
     }

}
let employees=[];
employees.push(new Employee("Evie","Designer",25000));
employees.push(new  Employee("Grace","Developer",14000));
employees.push(new Employee("Jennifer","Developer",26000));
employees.push(new Employee("Gavriel","Manager",45000));

let tableHTML="<table border='1'> <tr> <th>Name</th>  <th>Position</th>   <th>Salary</th>    </tr>";
for(let i=0; i<employees.length;i++){
    tableHTML+=" <tr>   <td>"+employees[i].name+"</td>        <td>"+employees[i].position+"</td>        <td>"+employees[i].salary+"</td>    </tr>"
}
tableHTML+="</table>";

document.write(tableHTML);