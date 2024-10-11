let isSignUpMode = true;  // We start in Sign-Up mode (this will control the form's mode)

// Add an event listener to the 'Show Form' button
document.getElementById("toggleFormBtn").addEventListener("click", function() {
    
    // If a form already exists, we remove it so we can switch modes
    const existingForm = document.getElementById("popupForm");
    if (existingForm) {
        document.body.removeChild(existingForm);  // Remove the existing form
    }

    // Create the form container (this will be the pop-up form)
    const formContainer = document.createElement("div");
    formContainer.id = "popupForm";  // Give the form an ID for future reference
    formContainer.style.position = "fixed";  // Fixed position so it stays centered during scroll
    formContainer.style.top = "50%";  // Vertically center the form
    formContainer.style.left = "50%";  // Horizontally center the form
    formContainer.style.transform = "translate(-50%, -50%)";  // Correct the offset for perfect centering
    formContainer.style.backgroundColor = "white";  // Background color of the form
    formContainer.style.padding = "20px";  // Add some space inside the form
    formContainer.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";  // Add a subtle shadow around the form
    formContainer.style.borderRadius = "8px";  // Rounded corners for a smooth look
    formContainer.style.zIndex = "1000";  // Ensure it pops over other elements

    // Create and append the 'Email' label and input (shared between Sign-Up and Sign-In)
    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email:";  // Label for the email field
    const emailInput = document.createElement("input");
    emailInput.type = "email";  // Input type is 'email' (helps with browser validation)
    emailInput.name = "email";  // Input name for form submission purposes
    emailInput.placeholder = "Enter your email";  // Placeholder text for user guidance

    // Create the submit button (text changes depending on the mode)
    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";  // Button type is 'submit'
    submitBtn.textContent = isSignUpMode ? "Sign-Up" : "Sign-In";  // Change button text based on the mode

    // Append common elements to the form container (email field and button)
    formContainer.appendChild(emailLabel);  // Add the email label to the form
    formContainer.appendChild(emailInput);  // Add the email input to the form
    formContainer.appendChild(document.createElement("br"));  // Line break for spacing

    // If we are in Sign-Up mode, create and append extra fields for 'Name' and 'Theme'
    if (isSignUpMode) {
        // Create the 'Name' input field
        const nameLabel = document.createElement("label");
        nameLabel.textContent = "Name:";  // Label for the name field
        const nameInput = document.createElement("input");
        nameInput.type = "text";  // Input type is 'text'
        nameInput.name = "name";  // Input name for form submission
        nameInput.placeholder = "Enter your name";  // Placeholder for name input

        // Create the 'Theme' input field
        const themeLabel = document.createElement("label");
        themeLabel.textContent = "Theme:";  // Label for the theme field
        const themeInput = document.createElement("input");
        themeInput.type = "text";  // Input type is 'text'
        themeInput.name = "theme";  // Input name for form submission
        themeInput.placeholder = "Enter your theme";  // Placeholder for theme input

        // Append Sign-Up specific fields to the form container
        formContainer.appendChild(nameLabel);  // Add the name label
        formContainer.appendChild(nameInput);  // Add the name input field
        formContainer.appendChild(document.createElement("br"));  // Line break for spacing
        formContainer.appendChild(themeLabel);  // Add the theme label
        formContainer.appendChild(themeInput);  // Add the theme input field
        formContainer.appendChild(document.createElement("br"));  // Line break for spacing
    }

    // Append the submit button to the form container
    formContainer.appendChild(submitBtn);

    // Finally, add the form container to the body (making the form appear on the screen)
    document.body.appendChild(formContainer);

    // Add an event listener to handle form submission when the 'Submit' button is clicked
    submitBtn.addEventListener("click", function() {
        const action = isSignUpMode ? "Signed Up" : "Signed In";  // Check if we're in Sign-Up or Sign-In mode
        alert(`${action} successfully!`);  // Show an alert with the appropriate action (Sign-Up or Sign-In)

        // Remove the form from the page after submission (this hides the pop-up form)
        document.body.removeChild(formContainer);
    });

    // Toggle the mode between Sign-Up and Sign-In after each click
    isSignUpMode = !isSignUpMode;  // Switch the mode: if it was Sign-Up, switch to Sign-In, and vice versa
    document.getElementById("toggleFormBtn").textContent = isSignUpMode ? "Show Sign-Up Form" : "Show Sign-In Form";  // Update the button text to reflect the current mode
});