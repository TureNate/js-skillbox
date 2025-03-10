const list = document.querySelector('.list')
const addButton = document.querySelector('.add')
const removeButton = document.querySelector('.remove')

addButton.addEventListener('click', function(){
    const newLi = document.createElement('li')
    newLi.textContent = 'Новый элемент списка'
    list.append(newLi)
})

removeButton.addEventListener('click', function(){
    list.lastElementChild.remove()
})