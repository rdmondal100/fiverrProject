
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



//checkout page
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const quantityNumber = document.getElementById("quantityNumber");
const cartTotal = document.getElementById("cartTotal");

let number = parseInt(quantityNumber.innerText); 
const pricePerItem = 20.00; 

// Decrease quantity and update total
decrease.addEventListener('click', () => {
    if (number > 1) { 
        number--;
        quantityNumber.innerText = number;
        updateTotal();
    }
});

// Increase quantity and update total
increase.addEventListener('click', () => {
    number++;
    quantityNumber.innerText = number;
    updateTotal();
});

// Function to update the total price
function updateTotal() {
    const total = (pricePerItem * number).toFixed(2);
    cartTotal.innerText = total;
}
