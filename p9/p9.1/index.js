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

// Функция для поиска автомобиля по марке
const getCar = (carName) => {
    if (cars[carName]) {
        return cars[carName]; // Возвращаем объект автомобиля, если он найден
    } else {
        return `Автомобиль с маркой "${carName}" не найден.`; // Сообщение, если автомобиль не найден
    }
};

console.log(getCar("Nissan")); 
console.log(getCar("Dodge"));   
console.log(getCar("Mazda"));  