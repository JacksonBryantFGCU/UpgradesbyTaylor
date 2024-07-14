// JavaScript for responsive header

const navMenu = document.getElementById("nav-menu");
const toggleMenu = document.getElementById("toggle-menu");
const closeMenu = document.getElementById("close-menu");

toggleMenu.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});
closeMenu.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});



// JavaScript for testimonial carousel

// Get testimonial elements and navigation buttons
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

// Display initial testimonial
showTestimonial(currentIndex);

// Function to display the testimonial at a given index
function showTestimonial(index) {
    // Hide all testimonials
    testimonials.forEach(testimonial => {
        testimonial.classList.remove('active');
    });

    // Display the testimonial at the specified index
    testimonials[index].classList.add('active');
}

// Event listener for previous button
prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = testimonials.length - 1;
    }
    showTestimonial(currentIndex);
});

// Event listener for next button
nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= testimonials.length) {
        currentIndex = 0;
    }
    showTestimonial(currentIndex);
});