/*

// Cupid Code
document.addEventListener("DOMContentLoaded", function () {
	console.log("inited");
    setInterval(() => {
        createCupid();
    }, 5000);
});

function createCupid() {
    const cupid = document.createElement("img");
    cupid.src = "images/cupid.jpeg";
    cupid.alt = "Cupid";
    cupid.classList.add("cupid");
    document.body.appendChild(cupid);

	console.log("creating cupid");

    setTimeout(() => {
        document.body.removeChild(cupid);
    }, 5000); // Remove the cupid after 5 seconds
}

<section class="carasel">
        <h2>Find your perfect match!</h2>

        <!-- Slideshow container -->
<div class="slideshow-container fade">  

    <!-- Full images with numbers and message Info -->
    <div class="Containers">
      <div class="MessageInfo">1 / 3</div>
      <img class="fimage" src="/images/blackMale.jpg">
      <div class="Info"></div>
    </div>
  
    <div class="Containers">
      <div class="MessageInfo">2 / 3</div>
      <img class="fimage" src="/images/download.jpeg">
      <div class="Info"></div>
    </div>
  
    <div class="Containers">
      <div class="MessageInfo">3 / 3</div>
      <img class="fimage" src="/images/pexels-andrea-piacquadio.jpg">
      <div class="Info"></div>
    </div>
  
    <!-- Back and forward buttons -->
    <a class="Back" onclick="plusSlides(-1)">&#10094;</a>
    <a class="forward" onclick="plusSlides(1)">&#10095;</a>
  </div>
  <br>
  
  <!-- The circles/dots -->
  <div style="text-align:center">
    <span class="dots" onclick="currentSlide(1)"></span>
    <span class="dots" onclick="currentSlide(2)"></span>
    <span class="dots" onclick="currentSlide(3)"></span>
  </div> 
  <p></p>

    </section>
    
*/


