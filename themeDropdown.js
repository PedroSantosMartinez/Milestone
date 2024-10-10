// Function to apply the selected theme (light or dark)
function applyTheme(theme) {
    // Check if the selected theme is 'light'
    if (theme === 'light') {
        // Light mode: set background to white, text to black, and other elements accordingly
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black'; // Text color for body
        document.querySelector('header').style.background = 'deeppink'; // Header color
        document.querySelector('.video-suggestions').style.backgroundColor = '#f0f0f0'; // Video suggestions area background
        document.querySelectorAll('.suggestion').forEach(item => item.style.backgroundColor = 'lightpink'); // Suggestions background
        document.querySelectorAll('.suggestion').forEach(item => item.style.color = 'black'); // Suggestions text color
    } 
    // Check if the selected theme is 'dark'
    else if (theme === 'dark') {
        // Dark mode: set background to black, text to white, and other elements accordingly
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'whitesmoke'; // Text color for body
        document.querySelector('header').style.background = 'rgb(167, 15, 15)'; // Header color
        document.querySelector('.video-suggestions').style.backgroundColor = '#333'; // Video suggestions area background
        document.querySelectorAll('.suggestion').forEach(item => item.style.backgroundColor = '#444'); // Suggestions background
        document.querySelectorAll('.suggestion').forEach(item => item.style.color = 'whitesmoke'); // Suggestions text color
    }
}

// Function to save the user's theme preference (light or dark) to localStorage
function saveThemePreference(theme) {
    localStorage.setItem('theme', theme); // Save the theme as 'light' or 'dark'
}

// Apply the saved theme when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme'); // Get the saved theme from localStorage
    if (savedTheme) {
        applyTheme(savedTheme); // If a theme is saved, apply it
    }
});

// Event listener for the 'Light Mode' option in the dropdown
document.getElementById('light-theme').addEventListener('click', function() {
    applyTheme('light'); // Apply the light theme
    saveThemePreference('light'); // Save the light theme preference
});

// Event listener for the 'Dark Mode' option in the dropdown
document.getElementById('dark-theme').addEventListener('click', function() {
    applyTheme('dark'); // Apply the dark theme
    saveThemePreference('dark'); // Save the dark theme preference
});