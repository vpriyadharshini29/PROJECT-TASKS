// 1.	Movie Booking System
// Manages a list of available movies and allows users to book tickets.
// Requirements:
// 1.	Movie List Storage: Maintain a list of available movie names in an array.
// 2.	User Input: Accept the movie name that the user wants to book.
// 3.	Check Availability: Validate if the movie exists in the list.
// 4.	Booking Confirmation: If available, display "Ticket booked", otherwise "Movie not available".
let movies = ["run1","saamy","Nani1","pokiri"];
let Userinput =prompt(" Enter the movie name");
function search(movieName){
    let index=movies.indexOf(movieName);
    if(index<=-1){
        console.log("The Movie is not available");
        
    }
    else{
        console.log("Ticket booked");
        
        
    }
}
search(Userinput);
