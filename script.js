let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

// Create dots dynamically
const dotsContainer = document.querySelector('.dots');
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === currentIndex) {
    dot.classList.add('active');
  }
  dot.addEventListener('click', () => {
    showSlide(i);
    currentIndex = i;
  });
  dotsContainer.appendChild(dot);
}
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  const carouselContainer = document.querySelector('.carousel-container');
  const slideWidth = slides[0].clientWidth;
  carouselContainer.style.transform = `translateX(${-index * slideWidth}px)`;
  updateDots(index);
}

function updateDots(index) {
  dots.forEach((dot, i) => {
    dot.classList.remove('active');
    if (i === index) {
      dot.classList.add('active');
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// Initialize the carousel
showSlide(currentIndex);
