document.addEventListener('DOMContentLoaded', () => {
    initPhotoUpload();
    initCharCount();
    initFormValidation();
    initTooltips();
    initBackButton();
});

// Photo Upload Preview
function initPhotoUpload() {
    const photoBoxes = document.querySelectorAll('.photo-upload-box');
    
    photoBoxes.forEach(box => {
        box.addEventListener('click', () => {
            // Add hover animation
            box.classList.add('uploading');
            setTimeout(() => box.classList.remove('uploading'), 300);
            
            // In a real implementation, this would trigger file upload
            console.log('Photo upload clicked');
        });

        // Add hover animation
        box.addEventListener('mouseenter', () => {
            box.style.transform = 'translateY(-4px)';
        });

        box.addEventListener('mouseleave', () => {
            box.style.transform = 'translateY(0)';
        });
    });

    // Photo Upload Handling
    const photoInput = document.querySelector('.photo-upload-box input[type="file"]');
    const photoPreview = document.querySelector('.photo-preview');
    const photoPreviewImg = photoPreview.querySelector('img');

    photoInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                photoPreviewImg.src = e.target.result;
                photoPreview.classList.add('active');
            }
            reader.readAsDataURL(file);
        }
    });
}

// Character Count for Description
function initCharCount() {
    const description = document.getElementById('description');
    const charCount = document.querySelector('.char-count');
    const maxLength = 500;

    description?.addEventListener('input', () => {
        const length = description.value.length;
        charCount.textContent = `${length}/${maxLength}`;
        
        // Add visual feedback when approaching limit
        if (length > maxLength * 0.8) {
            charCount.style.color = '#EF4444';
        } else {
            charCount.style.color = '#94A3B8';
        }
    });
}

// Form Validation
function initFormValidation() {
    const form = document.querySelector('.post-item-form');
    const submitBtn = document.querySelector('.submit-btn');
    const previewBtn = document.querySelector('.preview-btn');

    // Preview button click
    previewBtn?.addEventListener('click', () => {
        // Add click animation
        previewBtn.classList.add('clicked');
        setTimeout(() => previewBtn.classList.remove('clicked'), 200);
        
        // In a real implementation, this would show a preview
        console.log('Showing preview...');
    });

    // Form submission
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Add loading state to submit button
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Posting...';
        
        // Simulate form submission
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Posted!';
            submitBtn.style.background = 'var(--gradient-accent)';
            
            // Reset after 2 seconds
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Post Item';
                submitBtn.style.background = 'var(--gradient-primary)';
            }, 2000);
        }, 1500);
    });
}

// Tooltips
function initTooltips() {
    const tooltips = document.querySelectorAll('.tooltip');
    
    tooltips.forEach(tooltip => {
        // Add fade-in animation on hover
        tooltip.addEventListener('mouseenter', () => {
            tooltip.style.transform = 'translateY(-2px)';
            tooltip.style.opacity = '0.8';
        });

        tooltip.addEventListener('mouseleave', () => {
            tooltip.style.transform = 'translateY(0)';
            tooltip.style.opacity = '1';
        });
    });
}

// Back Button
function initBackButton() {
    const backBtn = document.querySelector('.back-button');
    
    backBtn?.addEventListener('click', () => {
        // Add click animation
        backBtn.classList.add('clicked');
        setTimeout(() => backBtn.classList.remove('clicked'), 200);
        
        // In a real implementation, this would navigate back
        console.log('Navigating back...');
    });
}

// Phone Number Formatting
document.getElementById('contact')?.addEventListener('input', function(e) {
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