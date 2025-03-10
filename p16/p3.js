function globalError() {
    const error = Error('Глобальная ошибка');
    error.name = 'GlobalError';
    throw error; 
  }
  
  function localError() {
    const error = Error('Локальная ошибка');
    error.name = 'LocalError';
    throw error; 
  }
  
  function testErrorScope(fn) {
    try {
      fn();
    } catch (error) {
      if (error.name === 'LocalError') {
        console.log('Обнаружена локальная ошибка'); 
      } else {
        console.log('Обнаружена глобальная ошибка'); 
      }
      console.error(error);
    }
  }
  
  // тест
  testErrorScope(localError); // локальная ошибка
  testErrorScope(globalError); // глобальная ошибка  