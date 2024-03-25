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



