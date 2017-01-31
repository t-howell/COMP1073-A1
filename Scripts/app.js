// ------------------ Home Page -------------------------


console.log("Page works kinda");

//reference an element
var aboutMe = document.getElementById("aboutMe");

//create variable that contains content
var aboutContent = "My name is Tamara. I'm a second semester web design student at Georgian College. "
				+ "I enjoy long walks, gardening and knitting. I'm like your Nana, but decent with computers. "
				+ "My interest in design stems from my enjoyment of helping others. I actively imagine the kinds of "
				+ "applications and well-built websites that could be useful to people." ;

//assign the var with content to the reference
aboutMe.textContent = aboutContent;



var aboutHeading = document.getElementById("aboutHeading");

var headerContent = "About Me";

aboutHeading.innerHTML = headerContent;


// ----------------- Contact Page -----------------------------

//var contactHeading = document.getElementById("contactHeading");

//var headingContent = "Let's Connect";

//contactHeading.textContent = headingContent;

// ----------------- Projects Page ----------------------------