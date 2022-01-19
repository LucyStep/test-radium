'use strict';

const changeTitle = document.querySelector('.title');

// При нажатии на кнопку мыши текст должен делаться невидимым
changeTitle.addEventListener('mousedown', (event) => {
  changeTitle.hidden = true;
});

document.addEventListener('mouseup', (event) => {
  changeTitle.removeAttribute('hidden');
});

// При нажатии на пробел текст должен удаляться со страницы
document.addEventListener('keydown', (event) => {
  if (event.code == 'Space') {
    changeTitle.innerHTML = '';
  }
});