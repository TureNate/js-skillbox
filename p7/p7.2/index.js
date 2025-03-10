const heights = [155, 163, 167, 171, 184]; // Массив с ростом учеников

const displayHeights = (heightsToDisplay) => {
    const hList = document.querySelector('.height-list');
    hList.innerHTML = heightsToDisplay.map(height => `<li>${height} см</li>`).join(''); // Генерация списка
};

const addHeight = () => {
    const height = prompt("Введите рост ученика:");
    if (height) {
        const heightNumber = Number(height);
        if (!isNaN(heightNumber) && heightNumber > 0) {
            heights.push(heightNumber);
            displayHeights(heights);
        } else {
            alert("Dведите корректное значение роста");
        }
    } else {
        alert("Рост не введён");
    }
};

const filterHeights = () => {
    const minHeight = prompt("Введите минимальный рост для фильтрации:");
    if (minHeight) {
        const minHeightNumber = Number(minHeight);
        if (!isNaN(minHeightNumber) && minHeightNumber > 0) {
            const filteredHeights = heights.filter(height => height >= minHeightNumber);
            displayHeights(filteredHeights);
        } else {
            alert("Dведите корректное значение для фильтрации");
            displayHeights(heights); // Отображаем весь список, если введено некорректное значение
        }
    } else {
        displayHeights(heights); // Отображаем весь список, если ничего не введено
    }
};

document.getElementById('addHeight').onclick = addHeight;
document.getElementById('addFilter').onclick = filterHeights;

displayHeights(heights); // Инициализация отображения ростов
