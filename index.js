const myLibrary = [];

const mainIndex = document.querySelector(".main-container");

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
addBookToLibrary("L","j", 2);
addBookToLibrary("Z","j", 2);

console.table(myLibrary);

function displayArray(){
    for (let i = 0; i < myLibrary.length; i++){
        const card = document.createElement("div");
        card.textContent = myLibrary[i].title;
        mainIndex.appendChild(card);
        console.log("i")
    }
}

displayArray();