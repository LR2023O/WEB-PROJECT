// JavaScript code for form validation and interactivity
document.addEventListener("DOMContentLoaded", function () {
    // Select form elements
    const form = document.querySelector("form");
    const firstName = document.getElementById("fname");
    const lastName = document.getElementById("lname");
    const comment = document.getElementById("comment");

    // Function to validate form
    function validateForm(event) {
        let isValid = true;

        // Clear previous error messages
        clearErrors();

        // Validate first name
        if (firstName.value.trim() === "") {
            showError(firstName, "First name is required");
            isValid = false;
        }

        // Validate last name
        if (lastName.value.trim() === "") {
            showError(lastName, "Last name is required");
            isValid = false;
        }

        // Validate comment
        if (comment.value.trim() === "") {
            showError(comment, "Comment cannot be empty");
            isValid = false;
        }

        // Prevent form submission if any validation fails
        if (!isValid) {
            event.preventDefault();
        } else {
            alert("Thank you for your comment!");
        }
    }

    // Function to show error messages
    function showError(input, message) {
        const error = document.createElement("span");
        error.className = "error-message";
        error.style.color = "red";
        error.textContent = message;
        input.parentElement.appendChild(error);
    }

    // Function to clear error messages
    function clearErrors() {
        const errors = document.querySelectorAll(".error-message");
        errors.forEach((error) => error.remove());
    }

    // Add event listener for form submission
    form.addEventListener("submit", validateForm);
});
