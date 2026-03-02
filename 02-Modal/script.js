'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
let buttons = document.querySelectorAll('.show-modal');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener(`click`, function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
})
  }
document.querySelector(`.close-modal`).addEventListener(`click`, function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

})

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
    }
  }
});