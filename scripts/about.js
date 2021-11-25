"use strict"; // Operate in strict mode

function postAbout() {
	
	// Input: none
	// Processing: Makes an object through JSON, and uses it to construct the content for the about page
	// Output: Posts 3 paragraphs on the about page
	
	console.log("1. >>Entering postAbout Function...");

	// Use Json to construct the paragraps for the about page 
		 
	var paragraphs = '{"p1":"Hello, Im Lexi. Im a Graphic Design and Motion Graphics design student. Im a freelance artist and avid gamer who stream some of my commissions on twitch", "p2":"I am also well versed around video editing and used to make many AMV\'s (Anime Music Videos) to practice my Motion Graphics. Programs I use and know are After Effects, Illustrator, Photoshop ,Premier, Procreate and PaintToolSai.", "p3":"Most Art work is done on Procreate, edited on Photoshop, and animated in After Effects. Thank you for checking out my site."}' 
	console.log(paragraphs)	 
	paragraphs = JSON.parse(paragraphs);
		 
	console.log(paragraphs);
		 
	var pElements = document.getElementsByClassName("aboutInfo"); // get the paragraph elements on the page
	
	var i = 0;
	
	// Change the inner HTML of the 3 paragraph elements
	for (var x in paragraphs) {
		
		pElements[i].innerHTML = paragraphs[x];
		
		i += 1;
	}

	console.log("2. <<Leaving postAbout Function...");

}

// Create an event listener that calls the init function on load.
if (window.addEventListener) {
	
	console.log("3. > Adding TC39 Event Listener..."); // Place a console.log upon entering this IF EVENT LISTENER
	
	window.addEventListener("load", postAbout, false);
	
} //END ADD EVENT LISTENER


// Create an event listener that calls the init function on load. (For older browsers)
else if (window.attachEvent) {
	
	console.log("4. > Adding MS Event Listener..."); // Place a console.log upon enterin this IF ATTACH EVENT
	
	window.attachEvent("onload", postAbout);
	
} // END ATTACH EVENT LISTENER