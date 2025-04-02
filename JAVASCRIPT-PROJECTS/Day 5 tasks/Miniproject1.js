// Function to calculate grade
function calculateGrade(marks) {
    let total = 0;

   
    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    
    let average = total / marks.length;

   
    let grade;
    if (average >= 90) {
        grade = "A";
    } else if (average >= 75) {
        grade = "B";
    } else if (average >= 50) {
        grade = "C";
    } else {
        grade = "F";
    }

  
    console.log(`Total Marks: ${total}`);
    console.log(`Average Marks: ${average.toFixed(2)}`);
    console.log(`Grade: ${grade}`);
}


let studentMarks = [85, 90, 78, 92, 88]; 
calculateGrade(studentMarks);
