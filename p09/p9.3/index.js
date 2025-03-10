const createCar = (additionalProperties) => {
    const car = {
        wheels: 4,
        doors: 4,
        isStarted: false,
    };

    // Объединяем основной объект с дополнительными свойствами
    return { ...additionalProperties, ...car };
};

console.log(createCar({ name: 'Haval', hp: 1337 }));