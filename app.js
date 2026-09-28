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
    const nietEmailRegex = /^[^\s@]+@niet\.co\.in$/i;

    if (email.value.trim() === '') {

        document.getElementById('emailError').textContent =
            'Email is required.';

        isValid = false;

    } else if (!emailRegex.test(email.value.trim())) {

        document.getElementById('emailError').textContent =
            'Please enter a valid email.';

        isValid = false;

    } else if (!nietEmailRegex.test(email.value.trim())) {

        document.getElementById('emailError').textContent =
            'Only NIET email addresses ending with @niet.co.in are allowed.';

        isValid = false;

    }
});
