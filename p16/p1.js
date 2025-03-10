function hello() {
    console.log('Skill');
  }
  try { 
    hello(); // Корректное имя функции
  } catch (error) {
    console.error('Произошла ошибка:', error); // Вывод ошибки
  }
  console.log('complete');
  