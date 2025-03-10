function greeting() {
    const username = prompt("Введите имя пользователя");
    if (!username) { // проверка на пустое имя
      throw new Error("Имя обязательно для заполнения"); // вывод ошибки
    }
    alert(`Привет, ${username}!`); // приветствие, если имя введено
  }
  
  try { 
    greeting();
  } catch(error) { 
    alert(error.message); // сообщение ошибки
  }
  