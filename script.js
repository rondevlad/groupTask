// Get the current page's file name
var currentPage = window.location.pathname.split('/').pop();

// Get all the links
var links = document.querySelectorAll('.link a');

for (var i = 0; i < links.length; i++) {
    if (links[i].getAttribute('href') === currentPage) {
        links[i].classList.add('active');
    }
}

var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

// images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {
    slidePosition = 1;
  }
  if (n < 1) {
    slidePosition = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition - 1].style.display = "block";
  circles[slidePosition - 1].className += " enable";
}


/* Cupid */

// TODO: figure out why this only works with in page scripts
/*
document.addEventListener("DOMContentLoaded", function () {
	console.log("keepe");
	setInterval(() => {
		createCupid();
	}, 30000);
}, false);
*/


function createCupid() {
    const cupid = document.createElement("img");
	var position = Math.floor(Math.random() * 100);
	cupid.style.top = position.toString().concat("%");
    cupid.src = "./images/cupid.jpeg";
    cupid.alt = "Cupid";
    cupid.classList.add("cupid");
    document.body.appendChild(cupid);

    setTimeout(() => {
        document.body.removeChild(cupid);
    }, 1000); // Remove the cupid after 5 seconds
}
