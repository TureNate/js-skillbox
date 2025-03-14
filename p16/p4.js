const notificationContainer = document.createElement('div');
notificationContainer.style.position = 'fixed';
notificationContainer.style.top = '10px';
notificationContainer.style.right = '10px';
notificationContainer.style.padding = '10px';
notificationContainer.style.backgroundColor = 'rgba(255, 0, 0, 0.8)';
notificationContainer.style.color = 'white';
notificationContainer.style.display = 'none';
document.body.appendChild(notificationContainer);

let isNetworkIssue = false;
let isSlowConnection = false;

async function checkNetwork() {
  const startTime = Date.now();

  try {
    const response = await fetch('https://sb-film.skillbox.cc/ping', { method: 'POST' });

    // Проверяем, что запрос завершился успешно
    if (response.ok) {
      const duration = Date.now() - startTime;

      // Проверка на медленное соединение
      if (duration > 500) {
        showNotification('Медленное соединение');
        isSlowConnection = true;
      } else {
        // Если соединение в порядке, скрываем уведомления
        hideNotification();
        isSlowConnection = false;
      }
    }
  } catch (error) {
    if (!isNetworkIssue) {
      showNotification('Неполадки с сетью');
      isNetworkIssue = true;
    }
  }
}

function showNotification(message) {
  notificationContainer.textContent = message;
  notificationContainer.style.display = 'block';
}

function hideNotification() {
  notificationContainer.style.display = 'none';
  isNetworkIssue = false; // Сброс состояния
}

setInterval(checkNetwork, 5000);