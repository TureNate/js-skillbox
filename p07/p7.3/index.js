const cart = ["Яблоки", "Арбуз", "Книга", "Молоко", "Сахар", "Кофе", "Макароны"]

const addButton = document.querySelector('.add-button')
const list = document.querySelector('.list')

function sortArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j+1]) {
                const temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
}

function renderList(array) {
    list.innerHTML = ""
    sortArray(array)
    for (const element of array) {
        const newLi = document.createElement('li')
        newLi.textContent = element
        list.append(newLi)
    }
}

addButton.onclick = function() {
    const newLi = document.createElement('li')
    let newItem = prompt('Введите название товара')
    if (newItem != "") {
        cart.push(newItem)
        renderList(cart)
    } else {
        alert('Название товара не введено!')
    }
}

renderList(cart)