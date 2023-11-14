let intervalId;

const checkForElement = () => {
  const myClassElement = document.querySelector('.myclss');

  if (!myClassElement) {
    console.log('Элемент не найден, SetInterval продолжает работать');
  } else {
    clearInterval(intervalId);
    console.log('Элемент найден, SetInterval остановлен');
  }
};

// Запускаем проверку при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  checkForElement();

  // Запускаем setInterval
  intervalId = setInterval(checkForElement, 1000);
});
