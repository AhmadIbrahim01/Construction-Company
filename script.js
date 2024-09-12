const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
});


window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;

    // Adjust the 100 value to the point where you want the color to change
    if (scrollPosition > 600) {
        navbar.classList.add('scrolled'); // Add scrolled class when user scrolls
    } else {
        navbar.classList.remove('scrolled'); // Remove scrolled class when at top
    }
});



let currentSlide = 0;

function showSlide(slideIndex) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    if (slideIndex >= totalSlides) {
        currentSlide = 0; // Reset to first slide if we go beyond the last one
    } else if (slideIndex < 0) {
        currentSlide = totalSlides - 1; // Go to the last slide if we're at the beginning
    }

    // Hide all slides
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    // Display the current slide
    slides[currentSlide].style.display = 'block';

    // Update slide counter
    document.getElementById('currentSlide').innerText = currentSlide + 1;
    document.getElementById('totalSlides').innerText = totalSlides;
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

// Show the first slide on page load
showSlide(currentSlide);

