let btnLeft = document.querySelector('.btn__left');
let btnRight = document.querySelector('.btn__right');
let sliderWrapper = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');

let counter = 0;

// sliderWrapper.style.width = slides.length * 100 + "%";
sliderWrapper.style.width = slides.length * 100 + '%';

btnLeft.addEventListener('click', () => {
  if (counter >= 1) {
    sliderWrapper.style.transform += `translateX(${100 / slides.length}%)`;
    counter--;
  } else {
    return;
  }
});
btnRight.addEventListener('click', () => {
  if (counter < slides.length - 1) {
    sliderWrapper.style.transform += `translateX(-${100 / slides.length}%)`;
    counter++;
  } else {
    return;
  }
});
