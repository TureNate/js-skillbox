class Delivery {
    constructor(customerName, address, distance) {
        this.customerName = customerName; // Имя покупателя
        this.address = address; // Адрес доставки
        this.distance = distance; // Расстояние в км
        this.status = 'доставляется'; // Устанавливаем статус по умолчанию
    }

    createCard() {
        const card = document.createElement('div');
        card.className = `delivery-card ${this.status}`;
        card.innerHTML = `
            <h3>${this.customerName}</h3>
            <p>${this.address}</p>
            <p>${this.distance} км</p>
            <p>Статус: ${this.status}</p>
            <button class="edit-button">Изменить</button>
        `;
        card.querySelector('.edit-button').addEventListener('click', () => this.editDelivery(card));
        return card;
    }

    editDelivery(card) {
        const newName = prompt("Введите новое имя клиента:", this.customerName);
        const newAddress = prompt("Введите новый адрес:", this.address);
        const newDistance = prompt("Введите новое расстояние (км):", this.distance);
        const newStatus = prompt("Введите новый статус (доставляется, доставлен, отменён):", this.status);

        if (newName) this.customerName = newName;
        if (newAddress) this.address = newAddress;
        if (newDistance) this.distance = Number(newDistance);
        if (newStatus) this.status = newStatus;

        // Обновляем карточку
        card.innerHTML = this.createCard().innerHTML;
        this.updateCardStyle(card); // Обновляем стиль карточки
    }

    updateCardStyle(card) {
        card.className = `delivery-card ${this.status}`; // Обновляем класс карточки по статусу
    }
}

class EditDelivery extends Delivery {
    constructor(customerName, address, distance, status) {
        super(customerName, address, distance);
        this.status = status; // Устанавливаем статус
    }

    // Статический метод для расчета общего расстояния
    static getTotalDistance(deliveries) {
        return deliveries.reduce((total, delivery) => {
            if (delivery.status !== 'отменён') {
                return total + delivery.distance; // Суммируем расстояние только для активных доставок
            }
            return total; // Возвращаем общий итог, если статус отменён
        }, 0);
    }
}

// Экспорт классов
export { Delivery, EditDelivery };
