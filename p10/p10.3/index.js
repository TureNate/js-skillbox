const numbers = [100, 500, 250, 750, 300]

const list = document.querySelector('.list')
const sortupButton = document.querySelector('.sortup')
const sortdownButton = document.querySelector('.sortdown')

function renderList(array) {
    list.innerHTML = ''
    array.forEach(element => {
        const newLi = document.createElement('li')
        newLi.textContent = element
        list.append(newLi)
    });
}

sortupButton.addEventListener('click', function(){
    const result = numbers.sort((a, b) => a-b)
    renderList(result)
})

sortdownButton.addEventListener('click', function(){
    const result = numbers.sort((a, b) => b-a)
    renderList(result)
})

renderList(numbers)