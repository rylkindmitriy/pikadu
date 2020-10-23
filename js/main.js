// Создаем переменную, в которую положим кнопку меню
let menutoggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положи меню
let menu = document.querySelector('.sidebar');
// Отслеживаем клие по кнопке меню и запуску функции
menutoggle.addEventListener('click', function (event) {
// Отменяем стандартное поведение ссылки
  event.preventDefault();
// Вешаем класс на меню, когда кликнули по кнопке меню
  menu.classList.toggle('visible');
})