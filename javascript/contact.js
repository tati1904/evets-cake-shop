document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contactForm');
    const nameField = document.querySelector('#name');
    const emailField = document.querySelector('#email');
    const messageField = document.querySelector('#message');
    const errorMessage = document.querySelector('#errorMessage');
    const successMessage = document.querySelector('#successMessage');

    let formSubmissions = JSON.parse(localStorage.getItem('formSubmissions')) || [];

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }

    // Enhanced form validation function
    function validateForm() {
        let valid = true;
        errorMessage.innerHTML = '';  // Clear previous errors

        if (nameField.value.trim() === '') {
            valid = false;
            showError('Name is required.');
        }

        if (emailField.value.trim() === '' || !validateEmail(emailField.value)) {
            valid = false;
            showError('Please enter a valid email.');
        }

        if (messageField.value.trim() === '') {
            valid = false;
            showError('Message is required.');
        }

        return valid;
    }

    // Show error messages
    function showError(message) {
        const errorItem = document.createElement('p');
        errorItem.textContent = message;
        errorMessage.appendChild(errorItem);
    }

    // Handle form submission
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        if (validateForm()) {
            const submission = {
                name: nameField.value,
                email: emailField.value,
                message: messageField.value,
                date: new Date().toLocaleString()
            };

            formSubmissions.push(submission);
            localStorage.setItem('formSubmissions', JSON.stringify(formSubmissions));

            nameField.value = '';
            emailField.value = '';
            messageField.value = '';

            successMessage.innerHTML = '<p>Thank you for contacting us! We will get back to you shortly.</p>';
            errorMessage.innerHTML = '';  // Clear error messages
        } else {
            successMessage.innerHTML = '';  // Clear success message if form is invalid
        }
    });

    // Function to display all submissions
    function displaySubmissions() {
        const submissionList = document.querySelector('#submissionList');
        submissionList.innerHTML = '';  // Clear previous submissions

        formSubmissions.forEach(submission => {
            const submissionDiv = document.createElement('div');
            submissionDiv.classList.add('submission');
            submissionDiv.innerHTML = `
                <h3>${submission.name}</h3>
                <p><strong>Email:</strong> ${submission.email}</p>
                <p><strong>Message:</strong> ${submission.message}</p>
                <p><em>Submitted on: ${submission.date}</em></p>
            `;
            submissionList.appendChild(submissionDiv);
        });
    }

    // Display submissions on page load
    displaySubmissions();
});
