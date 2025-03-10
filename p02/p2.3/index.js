let index = 0; // Счетчик
const runners = ["Денис", "Виктория", "Антон", "Лена", "Никита"]; // Массив

// Перебираем массив бегунов и выводим 
for (let runner of runners) {
    index++; 
    console.log(index, runner); // Выводим номер и имя бегуна
}