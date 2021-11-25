/* 	Author: 			Silas Little
	Date Written: 		4/16/2020
	Description: 		javascript for the Emotes Page
*/

"use strict"; // Operate in strict mode

function postEmotes() {
	
	// Input:		none
	// Processing: 	Gets access to the elements whose class name is "thisExtra" and changes the content of its source.
	// Output:		Displays the Emote and Badge images on the page
	
	console.log("1. >>Entering postEmotes...")
	
	var emotes = ["images/emote.png", "images/badge.png"] 
	
	document.getElementsByClassName("thisExtra")[0].src = emotes[0] // Post the Emote image on the page
	
	document.getElementsByClassName("thisExtra")[1].src = emotes[1] // Post the Badge image on the page
	
	console.log("2. <<leaving postEmotes...")
}

function insertCopyright()
{
	 // Input: none
	 // Processing: Calculates current year
	 // Output: Places current year in footer after copyright symbol
	 
	console.log("3. >>Entering insertCopyright")

	var currentYear = new Date().getFullYear();
	var dateContainer = document.getElementById("copyright");
	dateContainer.innerHTML = currentYear;
	
	console.log("4. << Leaving insertCopyright")
} // end FUNCTION insertCopyright()


function init() {
	
	// Input:		none
	// Processing:	calls other functions necessary for script initialization
	// Output:		none
	
	console.log("5. >>Entering init function...");
	
	postEmotes();
	insertCopyright()
	
	console.log("6. <<Leaving init function...");
	
}

// Create an event listener that calls the init function on load.
if (window.addEventListener) {
	
	console.log("7. > Adding TC39 Event Listener..."); // Place a console.log upon entering this IF EVENT LISTENER
	
	window.addEventListener("load", init, false);
	
} //END ADD EVENT LISTENER


// Create an event listener that calls the init function on load. (For older browsers)
else if (window.attachEvent) {
	
	console.log("8. > Adding MS Event Listener..."); // Place a console.log upon enterin this IF ATTACH EVENT
	
	window.attachEvent("onload", init);
	
} // END ATTACH EVENT LISTENER