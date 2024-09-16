<script>
document.getElementById('autoPlayToggle').addEventListener('change', function() {
  var video = document.getElementById('youtubeVideo');
  if (this.checked) {
    // Turn autoplay ON
    video.src = "https://www.youtube.com/embed/CZ1CATNbXg0?controls=1&autoplay=1";
    console.log('Autoplay is ON');
  } else {
    // Turn autoplay OFF
    video.src = "https://www.youtube.com/embed/CZ1CATNbXg0?controls=1";
    console.log('Autoplay is OFF');
  }
});

</script>