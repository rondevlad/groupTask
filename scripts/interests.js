

function addInterest() {
	const interests = document.getElementById("interests");		// div that contains all interests
	const new_interest = document.createElement("div");

	const names = ["Bob Marley", "Jack Danield", "Hansome Squidward", "Jordan Peterson", "Anthony Apkins", "Howard Benny", "Kevin Hart", "Peter Brigston"];
	const likes = ["Long walks on the beach", "Ice cream", "Wrestling", "Football", "Soccer", "Going to bars", "Watching TV", "Boxing", "Eating compitition"];
	const images = ["female1.jpg", "female2.jpg","female3.jpg","female4.jpg","male1.jpg","male2.jpg","male3.jpg","male4.jpg", "smexyMan.jpeg"];

	// sets all html and attributes for new interest element
	new_interest.setAttribute("class", "interest");
	var html = ' <img src="images/${image}" alt="selfie">	\
				<p class="name"> ${name} </p>	\
	\
				<div class="likes"> 	\
					<p> You both like </p>	\
					<p> ${like} </p>	\
				</div>	\
	\
				<div class="choice">	\
					<button class="accept" onclick="removeInterest(this)"> Accept </button>		\
					<button class="pass" onclick="removeInterest(this)"> Pass </button>		\
				</div>	\
';

	// randomizes the name, what they like, and the image
	html = html.replace("${name}", names[Math.floor(Math.random() * names.length)]);
	html = html.replace("${like}", likes[Math.floor(Math.random() * names.length)]);
	html = html.replace("${image}", images[Math.floor(Math.random() * names.length)]);


	new_interest.innerHTML = html;
	
	// add new_interest to interests
	interests.appendChild(new_interest);
}


// the element is the button not the element of the interest
function removeInterest(element) {

	interest = element.parentElement.parentElement;
	interest.remove();

	// add a new interest after 5 seconds
	const timeout = setTimeout(addInterest, 5000);
}
