const myLibrary = [];
const dialog = document.getElementById("add-book-dialog");
const addBookButton = document.getElementById("add-book-button");
const closeDialogButton = document.getElementById("close-dialog");
const addBookDialogButton = document.getElementById("add-book-dialog-button");

class Book {
  constructor(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

addBookButton.addEventListener("click", () => {
  addBookToLibrary();
})

closeDialogButton.addEventListener("click", () => {
  dialog.close();
  displayBooks();
  console.log("Dialog closed");
});

addBookDialogButton.addEventListener("click", () => {
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const read = document.getElementById("read");
  console.log(read.checked);
  if (title.value === "" || author.value === "" || pages.value === "") {
    alert("Please fill out all fields");
    return;
  }
  if (isNaN(pages.value) || pages.value <= 0) {
    alert("Pages must be a valid number");
    return;
  }
  const book = new Book(
    title.value,
    author.value,
    pages.value,
    read.checked
  );
  myLibrary.push(book);
  displayBooks();
  dialog.close();
  console.log("Book added");
  title.value = "";
  author.value = "";
  pages.value = "";
});

function addBookToLibrary() {
  dialog.showModal();
}

const removeBook = (id) => {
  for (let i = 0; i < myLibrary.length; i++) {
    const b = myLibrary[i];
    if (b.id === id) {
      myLibrary.splice(i, 1);
      break;
    }
  }
  displayBooks();
}

function displayBooks() {
  const bookContainer = document.getElementById("Display-Books");
  bookContainer.innerHTML = "";
  myLibrary.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.id = "Card"

    const BookTitle = document.createElement("h2");
    BookTitle.textContent = book.title;
    BookTitle.id = "BookTitle";
    const BookAuthor = document.createElement("h2");
    BookAuthor.textContent = book.author;
    BookAuthor.id = "BookAuthor";
    const BookPages = document.createElement("h3");
    BookPages.textContent = `${book.pages} Pages`;
    BookPages.id = "BookPages";
    const bookRead = document.createElement("button");
    bookRead.innerText = "Read";
    bookRead.id = "BookRead";
    bookRead.style.textDecoration = book.read ? "none" : "line-through";
    bookRead.addEventListener("click", () => {
      bookRead.style.textDecoration = bookRead.style.textDecoration === "none" ? "line-through" : "none";
      book.read = !book.read;
    });

    const delBtn = document.createElement("button");
    delBtn.innerHTML = '<i class="fas fa-trash"></i>';
    delBtn.id = "delBtn";
    delBtn.addEventListener("click", () => {
      removeBook(book.id);
    });
    
    bookDiv.appendChild(BookTitle);
    bookDiv.appendChild(BookAuthor);
    bookDiv.appendChild(BookPages);
    bookDiv.appendChild(bookRead);
    bookDiv.appendChild(delBtn);
    
    bookContainer.appendChild(bookDiv);
  });
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
const book2 = new Book("1984", "George Orwell", 328, false);
const book3 = new Book("To Kill a Mockingbird", "Harper Lee", 281, true);
const book4 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, false);
myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);
displayBooks();

