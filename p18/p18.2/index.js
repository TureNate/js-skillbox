function progress(time) {
    const contEl = document.createElement('div');
    const barEl = document.createElement('div');
    const timerEl = document.createElement('div'); // Элемент для таймера
    contEl.classList.add('cont');
    barEl.classList.add('progress-bar');
    timerEl.classList.add('timer'); // Класс для таймера
    contEl.appendChild(barEl);
    contEl.appendChild(timerEl); // Добавляем таймер в контейнер
    document.body.appendChild(contEl);

    if (time < 2) { time = 2; }

    barEl.style.transform = 'scaleX(0)'; // Начальное состояние

    // Устанавливаем таймер
    let remainingTime = time;
    const interval = setInterval(() => {
        remainingTime--;
        timerEl.textContent = `Осталось времени: ${remainingTime} секунд`;
        if (remainingTime <= 0) {
            clearInterval(interval);
        }
    }, 1000);

    setTimeout(() => {
        barEl.style.transition = `all ${time}s linear`; 
        barEl.style.transform = 'scaleX(1)'; 
        clearInterval(interval); // Останавливаем таймер после завершения
        timerEl.textContent = 'Время вышло!'; // Сообщение по окончании
    }, 0);
}

window.onload = () => {
    progress(5); 
}
