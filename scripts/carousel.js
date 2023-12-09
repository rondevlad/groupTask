let currentIndex = 0;

function showSlide(index) {
  const carouselInner = document.querySelector('.carousel-inner');
  const itemWidth = document.querySelector('.carousel-item').offsetWidth;

  currentIndex = index;

  const translateValue = -currentIndex * itemWidth;
  carouselInner.style.transform = `translateX(${translateValue}px)`;
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + document.querySelectorAll('.carousel-item').length) % document.querySelectorAll('.carousel-item').length;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % document.querySelectorAll('.carousel-item').length;
  showSlide(currentIndex);
}