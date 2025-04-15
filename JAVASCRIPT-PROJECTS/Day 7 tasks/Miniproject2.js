
// 2.	Library Management System (Using Constructor)
// Description: A simple book catalog where users can add, filter, and display books.
// Features:
// ✔ Create a Book constructor with title, author, and year.
// ✔ Store books in an array and display them.
// ✔ Allow searching for books by title.

function Book(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;
}
let books=[];
function addBook(title,author,year){
    if(title&&author&&year){
        let book=new Book(title,author,year);
        books.push(book);
    }
    else{
        console.log("Fill every fields");
        
    }


}
function search(bookname){
    let lowercase= bookname.toLowerCase();
    let filtered=books.filter(
        (book)=>book.title.toLowerCase().includes(lowercase)

    )
return filtered;}

function display(books){
  let display= books.forEach(
    (book,index)=> console.log(`${index + 1}. ${book.title} by ${book.author} in the year ${book.year}`)
    

)
return display;
}
addBook("The Alchemist", "Paulo Coelho", 1988);
addBook("Atomic Habits", "James Clear", 2018);
addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925);

 display(books);

console.log("\nSearch Results for 'the':");
console.log(search("the"));
;
