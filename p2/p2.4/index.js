// Массив
const users = [];

// Ввод данных
for (let i = 0; i < 3; i++) {
    const name = prompt(`Введите имя пользователя ${i + 1}:`);
    const birthYear = prompt(`Введите год рождения пользователя ${i + 1}:`);
    const age = new Date().getFullYear() - birthYear; // Рассчитываем возраст
    users.push({ name, age }); // Добавляем пользователя в массив
}

// Вывод списка пользователей с автоматической нумерацией
users.forEach((user, index) => {
    console.log(`${index + 1} '${user.name}' ${user.age}`);
});

// Расчет среднего возраста + вывод
const averageAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;
console.log(`Средний возраст пользователей: ${averageAge}`);