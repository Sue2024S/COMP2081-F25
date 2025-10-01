// Custom JavaScript
// STEP 15: Call up the carousel using the id, and use the .carousel() method create the options object
const carouselCars = document.querySelector("#carouselExample");

const carousel = new bootstrap.Carousel(carouselCars, {
    interval: 1500,
    wrap: false
});

// STEP 16: Change the interval to 5 seconds (set in milliseconds)
// STEP 17: Try an event handler to zoom up the .carousel-caption after the slide completes sliding - by adding a class when the slide has finished animating, and removing it when it begins
carouselCars.addEventListener('slide.bs.carousel', event => {
    carouselCars.classList.add("zoomit");
});
carouselCars.addEventListener('slid.bs.carousel', event => {
    carouselCars.classList.remove("zoomit");
});

// LAB 2-
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector('#carouselExample');

  if (carousel) {
    // Re-initialize the carousel 
    new bootstrap.Carousel(carousel, {
      keyboard: false // disable both arrow keys
    });
  }
});
