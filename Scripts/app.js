/* document.getElementById("aboutMe").innerHTML; */
console.log("Page works kinda");
//var aboutMe = document.getElementById("aboutMe");

//var aboutMeContent = "<h1>About Me</h1>"
					//+ "<p>This is all about me.</p>";

//aboutMe = aboutMeContent;

//reference an element
var aboutMe = document.getElementById("aboutMe");

//aboutMe.textContent = "This is all about me";

//create variable that contains content
var aboutContent = "This is all about me.";
//assign the var with content to the reference
aboutMe.textContent = aboutContent;



var aboutHeading = document.getElementById("aboutHeading");

var headerContent = "About Me";

aboutHeading.innerHTML = headerContent;
