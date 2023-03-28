const addBtn = document.querySelector('#btn');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');



class book {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  addBooks(title, author, id) {
    let newBook = { id, title, author }
    this.books.push(newBook);
    localStorage.setItem('books', JSON.stringify(this.books))
  }

  deleteBook(id) {
    const books = this.books
    const filtered = books.filter((book) => book.id !== id);
    localStorage.setItem('books', JSON.stringify(filtered));
  }

  displayBooks() {
    return this.books;
  }
}

