const myLibrary = [];

function Book(title, author, pages){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(title, author, pages){
    myLibrary.push(new Book(title, author, pages));
}

addBookToLibrary("J","j", 2);
console.table(myLibrary);