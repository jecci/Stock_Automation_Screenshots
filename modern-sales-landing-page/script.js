// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple form validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // You would typically send the form data to a server here
        // For this template, we'll just log to the console
        console.log('Form submitted!');
        alert('Thank you for your message. We\'ll get back to you soon!');
        
        // Reset the form
        this.reset();
    });
}

// Add an intersection observer for fade-in animations
const fadeInElements = document.querySelectorAll('.feature, .price-card');

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.1
});

fadeInElements.forEach(element => {
    fadeInObserver.observe(element);
});

// You can add more JavaScript functionality as needed