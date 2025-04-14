const myLibrary = [];

const mainIndex = document.querySelector(".main-container");

function Book(title, author, pages, read){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read){
    myLibrary.push(new Book(title, author, pages, read));
}

addBookToLibrary("Joe the Terrible","Lingus", 300, "yes");
addBookToLibrary("Liza Shmeeza","Bingus", 150, "no");
addBookToLibrary("Zoey to Zackery","Dingus", 227, "yes");

console.table(myLibrary);

function displayArray(){
    for (let i = 0; i < myLibrary.length; i++){

        const card = document.createElement("div");
        
        card.classList.add("card");
        card.style.backgroundColor = "rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")";

        const titleBook = document.createElement("div");
        titleBook.textContent = myLibrary[i].title;

        const authorBook = document.createElement("div");
        authorBook.textContent = myLibrary[i].author;

        const pagesBook = document.createElement("div");
        pagesBook.textContent = myLibrary[i].pages;

        const readBook = document.createElement("div");
        readBook.textContent = myLibrary[i].read;
        
        card.appendChild(titleBook);
        card.appendChild(authorBook);
        card.appendChild(pagesBook);
        card.appendChild(readBook);


        if (myLibrary[i].pages > 200){
            card.style.width = myLibrary[i].pages*0.6+"px";
        }
        
        mainIndex.appendChild(card);

    }
    
}


const newBookButton = document.querySelector("#new-book");

newBookButton.addEventListener("click", () =>{
    console.log("HI")
})



displayArray();

/* TEMP STUFF
const cards = document.querySelectorAll(".card");

*/