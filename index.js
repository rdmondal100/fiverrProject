
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
  let currentPage = window.location.pathname.split("/").pop();
  
  // If the current page is root '/', treat it as 'index.html'
  if (currentPage === "") {
    currentPage = "index.html";
  }

  const navLinks = document.querySelectorAll(".nav-links ul li a");

  navLinks.forEach(link => {
    const linkHref = link.getAttribute("href");

    if (linkHref === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});




//checkout page
document.addEventListener("DOMContentLoaded", function () {
  if( window.location.pathname.split("/").pop()==="cart.html"){

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

}


})
