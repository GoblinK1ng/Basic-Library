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

addBookToLibrary("Joe the Terrible","Lingus", 300);
addBookToLibrary("Liza Shmeeza","Bingus", 150);
addBookToLibrary("Zoey to Zackery","Dingus", 227);

console.table(myLibrary);

function displayArray(){
    for (let i = 0; i < myLibrary.length; i++){

        const card = document.createElement("div");
        
        card.classList.add("card");
        card.style.backgroundColor = "rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")";


        card.textContent = myLibrary[i].title + " " + myLibrary[i].author + " " + myLibrary[i].pages;
        mainIndex.appendChild(card);
        console.log("i")
    }
    
}



displayArray();

/* TEMP STUFF
const cards = document.querySelectorAll(".card");

*/