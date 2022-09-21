const ham = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const items = document.querySelectorAll('.nav-item');

ham.addEventListener('click', () => {
  ham.classList.toggle('active');
  nav.classList.toggle('nav--active');
});

items.forEach(li => {
  li.addEventListener('click', () => {
    if (
      nav.classList.contains('nav--active') &&
      ham.classList.contains('active')
    ) {
      nav.classList.remove('nav--active');
      ham.classList.remove('active');
    } else {
      return;
    }
  });
});
