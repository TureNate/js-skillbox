const cars = {
    "Nissan": {
        name: "Nissan",
        wheels: 4,
        doors: 4,
        isStarted: false,
        hp: 154
    },
    "Dodge": {
        name: "Dodge",
        wheels: 4,
        doors: 4,
        isStarted: true,
        hp: 230
    },
    "Mazda": {
        name: "Mazda",
        wheels: 4,
        doors: 2,
        isStarted: false,
        hp: 333
    },
    "Audi": {
        name: "Audi",
        wheels: 4,
        doors: 4,
        isStarted: true,
        hp: 177
    }
};

// Функция для вывода названий автомобилей
const printCarNames = () => {
    for (const car in cars) {
        if (cars.hasOwnProperty(car)) { // Проверяем, что свойство принадлежит объекту
            console.log(car); // Выводим название автомобиля
        }
    }
};

printCarNames();