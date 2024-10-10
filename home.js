// ChatGPT was used to created this JavaScript files because we haven't learn it in class yet and wanted expourse to JavaScript
// Autoplay toggle functionality
// Get the YouTube iframe element (video)
const video = document.getElementById('youtubeVideo');

// Function to apply the user's autoplay setting
function applyAutoplaySetting(isAutoplayOn) {
    if (isAutoplayOn) {
        video.src += "&autoplay=1"; // Enable autoplay by adding autoplay=1 to the video URL
    } else {
        video.src = video.src.replace("&autoplay=1", ""); // Disable autoplay by removing autoplay=1 from the video URL
    }
}

// Save the user's autoplay setting (on or off) to localStorage
function saveAutoplayPreference(isAutoplayOn) {
    localStorage.setItem('autoplay', isAutoplayOn); // Save the autoplay setting as 'true' or 'false'
}

// Apply the saved autoplay preference when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const savedAutoplay = localStorage.getItem('autoplay') === 'true'; // Get the saved autoplay setting from localStorage
    document.getElementById('autoPlayToggle').checked = savedAutoplay; // Set the toggle switch based on the saved setting
    applyAutoplaySetting(savedAutoplay); // Apply the saved autoplay setting
});

// Event listener for the autoplay toggle switch
document.getElementById('autoPlayToggle').addEventListener('change', function() {
    const isAutoplayOn = this.checked; // Get the toggle switch state (true if checked, false if not)
    applyAutoplaySetting(isAutoplayOn); // Apply the corresponding autoplay setting
    saveAutoplayPreference(isAutoplayOn); // Save the current autoplay setting to localStorage
});

// Event listener for genre selection
document.querySelectorAll('.dropdown-content a').forEach(function(link) {
  link.addEventListener('click', function(event) {
      event.preventDefault();  // Prevent default anchor behavior

      const newVideoUrl = this.getAttribute('data-video-url');
      const newSummary = this.getAttribute('data-summary');
      const newDescription = this.getAttribute('data-description');
      // video = document.getElementById('youtubeVideo');

      // Get the current autoplay state
      const autoplayState = document.getElementById('autoPlayToggle').checked;
  

      // Update the video player source
      changeVideo(newVideoUrl,newSummary,newDescription, autoplayState);

      // Optionally, update the video suggestions for genres
      //  updateGenreSuggestions(newVideoUrl);

  });
});

// Event listeners for video suggestions
document.querySelectorAll('.suggestion').forEach(function(item) {
  item.addEventListener('click', function() {

      // Retrieve video details from the clicked suggestion
      const newVideoUrl = this.getAttribute('data-video-url');
      const newSummary = this.getAttribute('data-summary');
      const newDescription = this.getAttribute('data-description');
      
      // Get the current autoplay state
      const autoplayState = document.getElementById('autoPlayToggle').checked;
      
      // Change the main video with data from the suggestion clicked
      changeVideo(newVideoUrl, newSummary, newDescription, autoplayState);
  });
});

// Select all suggestion elements
const suggestions = document.querySelectorAll('.suggestion');

// Add a click event listener to each suggestion
suggestions.forEach(function(suggestion) {
    suggestion.addEventListener('click', function() {
        // Retrieve video details from the clicked suggestion
        const newVideoUrl = this.getAttribute('data-video-url');
        const newSummary = this.getAttribute('data-summary');
        const newDescription = this.getAttribute('data-description');

        // Get the current autoplay state
        const autoplayState = document.getElementById('autoPlayToggle').checked;
        if (autoplayState) {
            // Add autoplay to the URL if the toggle is checked
            videoUrl += "&autoplay=1";
        }

        // Change the main video
        changeVideo(newVideoUrl, newSummary, newDescription, autoplayState);
    });
});

// Function to change the main video
function changeVideo(videoUrl, summary, description, autoplayState) {
    const video = document.getElementById('youtubeVideo');
    video.src = autoplayState ? videoUrl + "&autoplay=1" : videoUrl;
    document.getElementById('videoSummary').innerText = summary;
    document.getElementById('videoDescription').innerText = description;
}
