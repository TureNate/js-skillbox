// перевод Цельсия в градусы Фаренгейта
const celsiusToFahrenheit = celsius => celsius * 1.8 + 32;

// перевод Фаренгейта в градусы Цельсия
const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) / 1.8;

// вызовы
console.log(celsiusToFahrenheit(725), fahrenheitToCelsius(999));
