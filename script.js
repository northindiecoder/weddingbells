const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});


document.addEventListener("DOMContentLoaded", function() {
  const inputs = document.querySelectorAll(".image-slider input[type='radio']");
  let currentIndex = 0;

  function slideNext() {
    inputs[currentIndex].checked = false; // Uncheck current input
    currentIndex = (currentIndex + 1) % inputs.length; // Move to next index (circular)
    inputs[currentIndex].checked = true; // Check next input
  }

  setInterval(slideNext, 3000); // Auto-slide every 3 seconds
});


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 700);
        return false;
      }
    }
  });
  });
  
  
  
// Include the Instafeed library using a script tag in your HTML file.

// Instantiate Instafeed in your JavaScript file.
var userFeed = new Instafeed({
  get: 'user',
  target: "instafeed-container",
  resolution: 'low_resolution',
  accessToken: 'GQWRPZAzdwT3ZACMlRHX2dPYndQdjhFdVdPbngxOGVhNEE3RnRtdFFzUVREWVM0YUVIOFVIcHh4MTRFVjk0bWxmOGZAMek9CZA1NDRDZA5ZAU9PakdZAWlJJaUFSWWNhVUFxWFJ6ZAUJ0NldmRHdyWmIxNE1VWVlZANGIycGMZD'
});

// Run Instafeed.
userFeed.run();
