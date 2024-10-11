
// To handle the menubar

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      // Optional: Toggle the hamburger icon if needed
      hamburger.classList.toggle('active');
  });
});


// To handle the current active menue 
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();
  console.log(currentPage)
  const navLinks = document.querySelectorAll(".nav-links ul li a");
  console.log(navLinks)

  navLinks.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
          link.classList.add("active");
      }
  });
});
