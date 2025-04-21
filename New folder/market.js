// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    themeToggle.textContent = body.classList.contains('dark-theme') ? '☀️' : '🌙';
});

// Mobile Menu
const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const navRight = document.querySelector('.nav-right');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    navRight.classList.toggle('show');
    hamburger.classList.toggle('active');
});

// Product Card Hover Animation
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Action Buttons Click Effects
const actionButtons = document.querySelectorAll('.action-btn');

actionButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Add click animation
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);

        // Handle different actions
        if (button.classList.contains('call')) {
            console.log('Calling...');
        } else if (button.classList.contains('whatsapp')) {
            console.log('Opening WhatsApp...');
        } else if (button.classList.contains('chat')) {
            console.log('Opening chat...');
        }
    });
});

// Floating Post Button Animation
const floatingBtn = document.querySelector('.floating-post-btn');

floatingBtn.addEventListener('mouseenter', () => {
    floatingBtn.style.transform = 'translateY(-8px) scale(1.1)';
});

floatingBtn.addEventListener('mouseleave', () => {
    floatingBtn.style.transform = 'translateY(0) scale(1)';
});

// Filter Selects
const filterSelects = document.querySelectorAll('.filter-select');

filterSelects.forEach(select => {
    select.addEventListener('change', () => {
        console.log(`Filter changed: ${select.value}`);
        // Add filter logic here
    });
});

// Search Functionality
const searchInput = document.querySelector('.search-bar input');
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        console.log(`Searching for: ${searchTerm}`);
        // Add search logic here
    }
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            console.log(`Searching for: ${searchTerm}`);
            // Add search logic here
        }
    }
}); 