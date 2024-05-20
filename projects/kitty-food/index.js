'use strict';

const menu = document.querySelector('nav ul');
const openBtn = document.querySelector('.menu-open');
const closeBtn = document.querySelector('.menu-close');

/* openBtn.addEventListener('click', function () {
  menu.style.transform = 'translateX(0%)';
});

closeBtn.addEventListener('click', () => {
  menu.style.transform = 'translateX(100%)';
}); */

openBtn.addEventListener('click', function () {
  menu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('open');
});
