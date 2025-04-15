let myLibrary = [];

const mainIndex = document.querySelector(".main-container");
const header = document.querySelector(".header");

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
        card.id = myLibrary[i].id;

        const titleBook = document.createElement("div");
        titleBook.textContent = myLibrary[i].title;

        const authorBook = document.createElement("div");
        authorBook.textContent = myLibrary[i].author;

        const pagesBook = document.createElement("div");
        pagesBook.textContent = myLibrary[i].pages;

        const readBook = document.createElement("div");
        readBook.textContent = myLibrary[i].read;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Remove Book";
        deleteButton.id = "deleteButton"

        deleteButton.addEventListener("click", () =>{
            console.log(deleteButton.parentElement.id);
            
            myLibrary = myLibrary.filter((book) =>
                book.id !== deleteButton.parentElement.id
            )

            
            mainIndex.removeChild(deleteButton.parentElement);

            console.table(myLibrary);
            
        })

        const readStatusButton = document.createElement("button");
        readStatusButton.textContent = "ReadStatus";
        readStatusButton.id = "read-status-button";

        readStatusButton.addEventListener("click", () =>{
            for (const book in myLibrary){
                console.log(myLibrary[book].id);
                if (readStatusButton.parentElement.id === myLibrary[book].id){
                    if (myLibrary[book].read === "yes"){
                        myLibrary[book].read = "no";
                        readBook.textContent = "no";
                    }
                    else{
                        myLibrary[book].read = "yes";
                        readBook.textContent = "yes";
                    }
                }
            }
            
        })
        
        card.appendChild(titleBook);
        card.appendChild(authorBook);
        card.appendChild(pagesBook);
        card.appendChild(readBook);
        card.appendChild(deleteButton);
        card.appendChild(readStatusButton);


        if (myLibrary[i].pages > 200){
            card.style.width = myLibrary[i].pages*0.6+"px";
        }
        
        mainIndex.appendChild(card);

    }
    
}


const newBookButton = document.querySelector("#new-book");

newBookButton.addEventListener("click", () =>{

    const form = document.createElement("form")
    for (let i = 0; i < 4; i ++){
        const input = document.createElement("input");
        input.type = "text";
        input.required = true;
        input.classList = "input"+i;

        form.appendChild(input);
    }
    
    const submit = document.createElement("button")
    submit.type = "submit";
    submit.textContent = "Submit";
    
    submit.addEventListener("click", (event) =>{
        event.preventDefault();
        console.log("IT WORKED");

        const inputs = document.querySelectorAll("form input");

        addBookToLibrary(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value);
        
        while (mainIndex.lastChild){
            mainIndex.removeChild(mainIndex.lastChild);
        }

        while (header.childElementCount > 1){
            header.removeChild(header.lastChild);
        }
        displayArray();
    });


    form.appendChild(submit);
    header.appendChild(form);

    
})




displayArray();

/* TEMP STUFF
const cards = document.querySelectorAll(".card");

*/