import { EditDelivery } from './delivery.js';

const deliveryArr = [
    new EditDelivery("Ольга", "ул. Вымыслов, д. 12", 8, "доставляется"),
    new EditDelivery("Дмитрий", "ул. Задачная, д. 7", 3, "доставлен"),
    new EditDelivery("Оля", "ул. Ткачей, д. 43", 11, "отменён")
];

const deliveryContainer = document.getElementById('delivery-list');

deliveryArr.forEach(delivery => {
    deliveryContainer.appendChild(delivery.createCard());
});

// Добавляем кнопку для расчета общего расстояния
const totalDistanceButton = document.createElement('button');
totalDistanceButton.textContent = 'Рассчитать общее расстояние';
document.body.appendChild(totalDistanceButton);

totalDistanceButton.addEventListener('click', () => {
    const totalDistance = EditDelivery.getTotalDistance(deliveryArr);
    alert(`Общее расстояние: ${totalDistance} км`);
});
