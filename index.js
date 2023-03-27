
const addBtn = document.querySelector('#btn');
const bookList = document.querySelector('.books-container');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const removeBtn = document.querySelectorAll('.remove-btn')

const books = JSON.parse(localStorage.getItem('books')) || []

addBtn.addEventListener('click', function () {
    let size;
    if (books.length == null) {
        size = 0
    } else {
        size = books.length
    }

    books.push({ id: size, title: titleInput.value, author: authorInput.value })
    localStorage.setItem('books', JSON.stringify(books))
    location.reload()
})

function removeBook(id) {
    const filtered = books.filter(book => book.id !== id);
    localStorage.setItem('books', JSON.stringify(filtered))
    location.reload()
}

function showBooks() {
    const booksContainer = document.querySelector('.books-container');
    for (let i = 0; i < books.length; i++) {
        booksContainer.innerHTML += `<div><p>
        ${books[i].title} <br />
        ${books[i].author} 
      </p>
      <button onclick="removeBook(${books[i].id})">Remove</button>
      <hr />
    </div>`
    }
}

window.addEventListener('load', (e) => {
    showBooks();
})