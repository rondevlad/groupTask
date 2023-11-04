// Get the current page's file name
var currentPage = window.location.pathname.split('/').pop();

// Get all the links
var links = document.querySelectorAll('.link a');

for (var i = 0; i < links.length; i++) {
    if (links[i].getAttribute('href') === currentPage) {
        links[i].classList.add('active');
    }
}