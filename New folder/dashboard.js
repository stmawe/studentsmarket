document.addEventListener('DOMContentLoaded', () => {
    // Sidebar Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    menuToggle?.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        mainContent.style.marginLeft = sidebar.classList.contains('active') ? '0' : '250px';
    });

    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    themeToggle?.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const icon = themeToggle.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });

    // Profile Dropdown
    const profileDropdown = document.querySelector('.profile-dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    profileDropdown?.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', () => {
        dropdownMenu.style.display = 'none';
    });

    // Notification Badge
    const notificationBtn = document.querySelector('.notification-btn');
    const notificationBadge = document.querySelector('.notification-badge');

    notificationBtn?.addEventListener('click', () => {
        // In a real app, this would mark notifications as read
        notificationBadge.style.display = 'none';
    });

    // Listing Card Actions
    const listingCards = document.querySelectorAll('.listing-card');
    const actionButtons = document.querySelectorAll('.action-btn');

    listingCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = 'var(--shadow-lg)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'var(--shadow-md)';
        });
    });

    actionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const action = button.classList.contains('edit') ? 'edit' :
                          button.classList.contains('delete') ? 'delete' : 'view';
            
            // In a real app, this would trigger the appropriate action
            console.log(`Action: ${action}`);
        });
    });

    // New Item Button
    const newItemBtn = document.querySelector('.new-item-btn');
    const fab = document.querySelector('.fab');

    [newItemBtn, fab].forEach(button => {
        button?.addEventListener('click', () => {
            // In a real app, this would open a new item form
            console.log('Open new item form');
        });
    });

    // University Selector
    const universitySelector = document.querySelector('.university-selector select');

    universitySelector?.addEventListener('change', (e) => {
        // In a real app, this would filter listings by university
        console.log(`Selected university: ${e.target.value}`);
    });

    // Animate Summary Cards
    const summaryCards = document.querySelectorAll('.summary-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.5s ease-out forwards';
            }
        });
    }, { threshold: 0.1 });

    summaryCards.forEach(card => {
        observer.observe(card);
    });

    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;

            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Active Navigation Link
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');

    const setActiveNavItem = () => {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 60) {
                currentSection = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.querySelector('a').getAttribute('href') === `#${currentSection}`) {
                item.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', setActiveNavItem);
}); 
    // Sidebar Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    menuToggle?.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        mainContent.style.marginLeft = sidebar.classList.contains('active') ? '0' : '250px';
    });

    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    themeToggle?.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const icon = themeToggle.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });

    // Profile Dropdown
    const profileDropdown = document.querySelector('.profile-dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    profileDropdown?.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', () => {
        dropdownMenu.style.display = 'none';
    });

    // Notification Badge
    const notificationBtn = document.querySelector('.notification-btn');
    const notificationBadge = document.querySelector('.notification-badge');

    notificationBtn?.addEventListener('click', () => {
        // In a real app, this would mark notifications as read
        notificationBadge.style.display = 'none';
    });

    // Listing Card Actions
    const listingCards = document.querySelectorAll('.listing-card');
    const actionButtons = document.querySelectorAll('.action-btn');

    listingCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = 'var(--shadow-lg)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'var(--shadow-md)';
        });
    });

    actionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const action = button.classList.contains('edit') ? 'edit' :
                          button.classList.contains('delete') ? 'delete' : 'view';
            
            // In a real app, this would trigger the appropriate action
            console.log(`Action: ${action}`);
        });
    });

    // New Item Button
    const newItemBtn = document.querySelector('.new-item-btn');
    const fab = document.querySelector('.fab');

    [newItemBtn, fab].forEach(button => {
        button?.addEventListener('click', () => {
            // In a real app, this would open a new item form
            console.log('Open new item form');
        });
    });

    // University Selector
    const universitySelector = document.querySelector('.university-selector select');

    universitySelector?.addEventListener('change', (e) => {
        // In a real app, this would filter listings by university
        console.log(`Selected university: ${e.target.value}`);
    });

    // Animate Summary Cards
    const summaryCards = document.querySelectorAll('.summary-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.5s ease-out forwards';
            }
        });
    }, { threshold: 0.1 });

    summaryCards.forEach(card => {
        observer.observe(card);
    });

    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;

            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Active Navigation Link
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');

    const setActiveNavItem = () => {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 60) {
                currentSection = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.querySelector('a').getAttribute('href') === `#${currentSection}`) {
                item.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', setActiveNavItem);
}); 