// Get the button:
let pTopB = document.getElementById("pTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    pTopB.style.display = "block";
  } else {
    pTopB.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function pageTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}