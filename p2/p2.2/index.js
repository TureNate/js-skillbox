let fullSum = 0;

//товар 1
let prod1 = prompt("Введите название 1-го товара");
let price1 = parseFloat(prompt("Введите стоимость 1-го товара")); // Преобразуем введённое значение в число
let count1 = parseInt(prompt("Введите кол-во 1-го товара:")); // Преобразуем введённое значение в целое число

//стоимость товара 1 + вывод
let cost1 = price1 * count1;
console.log(prod1, cost1);
fullSum += cost1; //первый товар к сумме

// товар 2
let prod2 = prompt("Введите название 2-го товара:");
let price2 = parseFloat(prompt("Введите стоимость 2-го товара:"));
let count2 = parseInt(prompt("Введите кол-во 2-го товара:"));

let cost2 = price2 * count2;
console.log(prod2, cost2);
fullSum += cost2; //второй товар к сумме

//товар 3
let prod3 = prompt("Введите название 3-го товара:");
let price3 = parseFloat(prompt("Введите стоимость 3-го товара:"));
let count3 = parseInt(prompt("Введите кол-во 3-го товара:"));

let cost3 = price3 * count3;
console.log(prod3, cost3);
fullSum+= cost3; // третий товар к сумме

//вывод суммы товаров
console.log("Сумма всех товаров:", fullSum);