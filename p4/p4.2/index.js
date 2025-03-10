function celsiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}

// Фаренгейт в Цельсий
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}

// вызов
console.log(`333°C = ${celsiusToFahrenheit(333)}°F`);       
console.log(`20°C = ${celsiusToFahrenheit(20)}°F`);   
console.log(`1337°F = ${fahrenheitToCelsius(1337)}°C`);     