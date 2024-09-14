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


// Scroll different sections without changing the link
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      navLinks.classList.toggle('active');
      burger.classList.toggle('active');
  
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    });
  });

// Scroll different sections without changing the link for button
const button = document.getElementById('button')
button.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
    top: targetSection.offsetTop,
    behavior: 'smooth'
    });
});
  

// Dark Mode & Light Mode

const dark_button = document.getElementById('dark-mode')
const light_button = document.getElementById('light-mode')
const dark = document.getElementById('li_dark')
const light = document.getElementById('li_light')

dark_button.addEventListener('click', function(){
    light.classList.toggle('display-sun');
    dark.classList.toggle('display-moon');
    document.body.classList.toggle('dark-mode');

});
light_button.addEventListener('click', function(){
    light.classList.toggle('display-sun');
    dark.classList.toggle('display-moon');

});




// script.js
const toggleButton = document.getElementById('toggleButton');
const themeImages = document.querySelectorAll('.theme-image');

dark_button.addEventListener('click', () => {
  
  themeImages.forEach(image => {
    // Toggle between the light and dark image
    if (document.body.classList.contains('dark-mode')) {
      image.src = image.getAttribute('data-dark');  // Set dark mode image
    } else {
      image.src = image.getAttribute('data-light');  // Set light mode image
    }
  });
});
