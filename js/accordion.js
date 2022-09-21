const btns = document.querySelectorAll('.question');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const panel = btn.nextElementSibling;

    panel.classList.toggle('answer--active');
    btn.classList.toggle('question--active');
  });
});
