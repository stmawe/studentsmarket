document.addEventListener('DOMContentLoaded', () => {
    // Password visibility toggle
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');
    const eyeIcon = togglePassword.querySelector('i');

    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Toggle eye icon
        eyeIcon.classList.toggle('fa-eye');
        eyeIcon.classList.toggle('fa-eye-slash');
    });

    // Form submission
    const form = document.querySelector('.login-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Add loading state to button
        const submitBtn = document.querySelector('.submit-btn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnIcon = submitBtn.querySelector('i');
        
        btnText.textContent = 'Logging in...';
        btnIcon.classList.add('fa-spinner', 'fa-spin');
        submitBtn.disabled = true;

        // Simulate form submission
        setTimeout(() => {
            // Reset button state
            btnText.textContent = 'Login';
            btnIcon.classList.remove('fa-spinner', 'fa-spin');
            submitBtn.disabled = false;

            // Show success message (in a real app, this would redirect or show a success modal)
            alert('Login successful!');
        }, 2000);
    });

    // Social login buttons
    const socialButtons = document.querySelectorAll('.social-btn');
    socialButtons.forEach(button => {
        button.addEventListener('click', () => {
            const platform = button.classList.contains('google') ? 'Google' : 'Facebook';
            alert(`Redirecting to ${platform} login...`);
        });
    });

    // Input focus effects
    const inputs = document.querySelectorAll('.input-wrapper input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.style.transform = 'translateY(-2px)';
        });

        input.addEventListener('blur', () => {
            input.parentElement.style.transform = 'translateY(0)';
        });
    });
}); 