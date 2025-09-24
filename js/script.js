const carouselElement = document.getElementById('myCarousel');
const carousel = new bootstrap.Carousel(carouselElement, {
  interval: 3000,   // Auto-play every 3 seconds
  pause: false       // We will manually handle pause on hover
});

// Pause on mouse enter
carouselElement.addEventListener('mouseenter', () => {
  carousel.pause();
});

// Resume on mouse leave
carouselElement.addEventListener('mouseleave', () => {
  carousel.cycle();
});
