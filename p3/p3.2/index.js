function calculateTransportTax(power) {
    const rates = [
        { maxPower: 100, rate: 12 },
        { maxPower: 125, rate: 25 },
        { maxPower: 150, rate: 35 },
        { maxPower: 175, rate: 45 },
        { maxPower: 200, rate: 50 },
        { maxPower: 225, rate: 65 },
        { maxPower: 250, rate: 75 },
        { maxPower: Infinity, rate: 150 }
    ];

    // Находим ставку налога
    const rate = rates.find(r => power < r.maxPower).rate;

    // Расчет налога
    return power * rate;
}

// Ввод мощности автомобиля
const powerInput = prompt("Введите мощность автомобиля (л.с.):");

if (powerInput !== null) {
    const power = parseFloat(powerInput);
    
    if (!isNaN(power) && power >= 0) {
        // Расчет налога
        const taxAmount = calculateTransportTax(power);
        console.log(`Сумма налога: ${taxAmount} рублей`);
    } else {
        console.log("Введите корректное неотрицательное значение мощности.");
    }
} else {
    console.log("Ввод отменен.");
}