document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      // Optional: Toggle the hamburger icon if needed
      hamburger.classList.toggle('active');
  });
});
