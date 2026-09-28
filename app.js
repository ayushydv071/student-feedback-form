document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop form submission

    // Clear previous errors
    document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');

    let isValid = true;

    // Get input elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const course = document.getElementById('course');
    const rating = document.getElementById('rating');

    // Name validation
    if (name.value.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!emailRegex.test(email.value.trim())) {
        document.getElementById('emailError').textContent = 'Please enter a valid email.';
        isValid = false;
    }

    // Course validation
    if (course.value === '') {
        document.getElementById('courseError').textContent = 'Please select a course.';
        isValid = false;
    }

    // Rating validation
    if (rating.value === '') {
        document.getElementById('ratingError').textContent = 'Please provide a rating.';
        isValid = false;
    }

    // If form is valid
    if (isValid) {
        alert('Thank you! Your feedback has been submitted successfully.');
        this.reset(); // Reset form fields
    }
});
