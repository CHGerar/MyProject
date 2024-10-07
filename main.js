const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button-right');
const prevButton = document.querySelector('.carousel-button-left');

let currentSlideIndex = 0;

function moveToSlide(index) {
  const amountToMove = -slides[index].getBoundingClientRect().width * index;
  track.style.transform = `translateX(${amountToMove}px)`;
}

nextButton.addEventListener('click', () => {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  moveToSlide(currentSlideIndex);
});

prevButton.addEventListener('click', () => {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  moveToSlide(currentSlideIndex);
});