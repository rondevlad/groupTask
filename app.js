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
*/
