document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы формы и таблицы
    const productName = document.getElementById('productName');
    const productWeight = document.getElementById('productWeight');
    const deliveryDistance = document.getElementById('deliveryDistance');
    const productForm = document.getElementById('productForm');
    const productList = document.getElementById('productList');

    // Функция для валидации формы
    function validateForm() {
        let isValid = true;
        // Сброс ошибок
        document.getElementById('nameError').textContent = '';
        document.getElementById('weightError').textContent = '';
        document.getElementById('distanceError').textContent = '';

        // Проверка названия товара
        if (!productName.value.trim()) {
            document.getElementById('nameError').textContent = 'Название товара обязательно для заполнения.';
            isValid = false;
        }

        // Проверка веса товара
        if (productWeight.value <= 0) {
            document.getElementById('weightError').textContent = 'Вес товара должен быть положительным.';
            isValid = false;
        }

        // Проверка расстояния доставки
        if (deliveryDistance.value <= 0) {
            document.getElementById('distanceError').textContent = 'Расстояние доставки должно быть положительным.';
            isValid = false;
        }

        return isValid;
    }

    // Обработчик события отправки формы
    productForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение формы

        if (validateForm()) {
            // Сбор данных о товаре
            const name = productName.value;
            const weight = parseFloat(productWeight.value);
            const distance = parseFloat(deliveryDistance.value);
            const deliveryCost = (weight * distance) / 10;

            // Создание строки для таблицы
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${name}</td>
                <td>${weight.toFixed(1)}</td>
                <td>${distance.toFixed(1)}</td>
                <td>${deliveryCost.toFixed(2)} ₽</td>
            `;

            // Добавление строки в таблицу
            productList.appendChild(newRow);

            // Сброс формы
            productForm.reset();
        }
    });
});
