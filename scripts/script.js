/* 	Author: 			Silas Little
	Date Written: 		4/16/2020
	Description: 		javascript for the the pages with no unique functions
*/

"use strict"; // Operate in strict mode

function insertCopyright()
{
	 // Input: none
	 // Processing: Calculates current year
	 // Output: Places current year in footer after copyright symbol
	 
	console.log("1. >>Entering insertCopyright")

	var currentYear = new Date().getFullYear();
	var dateContainer = document.getElementById("copyright");
	dateContainer.innerHTML = currentYear;
	
	console.log("2. << Leaving insertCopyright")
} // end FUNCTION insertCopyright()


// Create an event listener that calls the init function on load.
if (window.addEventListener) {
	
	console.log("7. > Adding TC39 Event Listener..."); // Place a console.log upon entering this IF EVENT LISTENER
	
	window.addEventListener("load", insertCopyright, false);
	
} //END ADD EVENT LISTENER


// Create an event listener that calls the init function on load. (For older browsers)
else if (window.attachEvent) {
	
	console.log("8. > Adding MS Event Listener..."); // Place a console.log upon enterin this IF ATTACH EVENT
	
	window.attachEvent("onload", insertCopyright);
	
} // END ATTACH EVENT LISTENER