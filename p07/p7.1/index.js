const books = ["Мастер и Маргарита", "Гарри Поттер", "За пропастью во ржи", "Властелин колец", "Дюна", "Отцы и дети"]

const addButton = document.querySelector('.add-button')
const findButton = document.querySelector('.find-button')
const bookList = document.querySelector('.book-list')

function findInArray(array, search) {
    result = -1
    for (let i = 0; i < array.length; i++) {
        if (array[i] == search) {
            result = i
            break
        }
    }
    return result
}

for (const book of books) {
    const newLi = document.createElement('li')
    newLi.textContent = book
    bookList.append(newLi)
}

addButton.onclick = function() {
    const newLi = document.createElement('li')
    let newBook = prompt('Введите название книги')
    if (newBook != "") {
        newLi.textContent = newBook
        bookList.append(newLi)
        books.push(newBook)
    } else {
        alert('Название книги не введено!')
    }
}

findButton.onclick = function() {
    let search = prompt('Введите название книги')
    bookId = findInArray(books, search)
    if (bookId !== -1) {
        document.querySelector(`.book-list li:nth-child(${bookId + 1})`).style.color = "blue"
    } else {
        alert('Книга не найдена!')
    }
}