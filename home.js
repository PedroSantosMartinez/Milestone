// ChatGPT was used to created this JavaScript files because we haven't learn it in class yet and wanted expourse to JavaScript
// Autoplay toggle functionality
document.getElementById('autoPlayToggle').addEventListener('change', function() {
  var video = document.getElementById('youtubeVideo');
  var currentSrc = video.src.split('?')[0]; // Keep the current video URL without the query params
  if (this.checked) {
      // Turn autoplay ON
      video.src = currentSrc + "?controls=1&autoplay=1";
      console.log('Autoplay is ON');
  } else {
      // Turn autoplay OFF
      video.src = currentSrc + "?controls=1";
      console.log('Autoplay is OFF');
  }
});

// Event listener for genre selection
document.querySelectorAll('.dropdown-content a').forEach(function(link) {
  link.addEventListener('click', function(event) {
      event.preventDefault();  // Prevent default anchor behavior
      var newVideoUrl = this.getAttribute('data-video-url');
      var newSummary = this.getAttribute('data-summary');
      var newDescription = this.getAttribute('data-description');
      var video = document.getElementById('youtubeVideo');

      // Get the current autoplay state
      var autoplayState = document.getElementById('autoPlayToggle').checked;
      if (autoplayState) {
          newVideoUrl += "&autoplay=1"; // Add autoplay if enabled
      }

      // Update the video player source
      video.src = newVideoUrl;
      console.log('Video changed to: ' + newVideoUrl);

      // Update the summary and description
      document.getElementById('videoSummary').innerText = newSummary;
      document.getElementById('videoDescription').innerText = newDescription;
      console.log('Summary updated to: ' + newSummary);
  });
});
