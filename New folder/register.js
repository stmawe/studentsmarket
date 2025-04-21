document.addEventListener('DOMContentLoaded', () => {
    // Form validation
    const form = document.querySelector('.register-form');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    // Password match validation
    confirmPassword.addEventListener('input', () => {
        if (password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity('Passwords do not match');
        } else {
            confirmPassword.setCustomValidity('');
        }
    });

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Add loading state to button
        const submitBtn = document.querySelector('.submit-btn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnIcon = submitBtn.querySelector('i');
        
        btnText.textContent = 'Creating Account...';
        btnIcon.classList.add('fa-spinner', 'fa-spin');
        submitBtn.disabled = true;

        // Simulate form submission
        setTimeout(() => {
            // Reset button state
            btnText.textContent = 'Create Account';
            btnIcon.classList.remove('fa-spinner', 'fa-spin');
            submitBtn.disabled = false;

            // Show success message (in a real app, this would redirect or show a success modal)
            alert('Account created successfully!');
        }, 2000);
    });

    // Input focus effects
    const inputs = document.querySelectorAll('.input-wrapper input, .input-wrapper select');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.style.transform = 'translateY(-2px)';
        });

        input.addEventListener('blur', () => {
            input.parentElement.style.transform = 'translateY(0)';
        });
    });

    // Phone number formatting
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 0) {
            if (value.length <= 4) {
                value = value.replace(/(\d{3})/, '$1 ');
            } else if (value.length <= 7) {
                value = value.replace(/(\d{3})(\d{3})/, '$1 $2 ');
            } else {
                value = value.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
            }
        }
        e.target.value = value;
    });
}); 