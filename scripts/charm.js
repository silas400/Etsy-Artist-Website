/* 	Author: 			Silas Little
	Date Written: 		4/16/2020
	Description: 		javascript for the Charms Page
*/


"use strict"; // Operate in strict mode



/*Everything from this point is for the Products Page*/

// Define the showAvailable function
function showAvailable() {
	
	// Input:		none
	// Processing:	Gets access to the current element on the page and constructs a paragraph element
	// Output:		Displays a paragraph element under the current image element on the page
	
	console.log("1. >>Entering showAvailable function");
	
	var currentId = event.currentTarget.id // Get the id of the currentElement
	
	var buyMsg = document.createElement('p') // Create a paragraph element and assign it to a variable
	
	// Add the "Available" message to the .innerHTMl of the paragraph, and then setup the id for this element
	buyMsg.innerHTML = "Available!"
	buyMsg.id = "p" + currentId;
	
	event.currentTarget.appendChild(buyMsg); // Append the paragraph element under the current image element
	
	console.log("2. Element selected and modified");
	console.log(event.currentTarget)
	
	console.log("3. <<Leaving showAvailable function");
	
}

// Define the hideAvailable function
function hideAvailable() {
	
	// Input:		none
	// Processing:	Gets access to the current element on the page and constructs a paragraph element
	// Output:		Displays a paragraph element under the current image element on the page
	
	console.log("4. >>Entering hideAvailable function");
	
	//Get the currentElement that had the mouse move off of it and remove that element
	var id = "p" + event.currentTarget.id
	var currentElement = document.getElementById(id)
	console.log("5. Element to be removed");
	console.log(currentElement);
	currentElement.remove();
	

	console.log("6. <<Leaving hideAvailable function");
	
}



/* createEventListeners is open to be used for all pages */
function createEventListeners() {
	
	//Input: none
	//Processing: This function creates all the necessary event listeners for the images on the page
	//Output: none
	
	console.log("7. >>Entering createEventListeners function...");
	
	var allImages = document.getElementsByClassName("image");
	
	for (var i = 0; i < allImages.length; i++) { // Create a For loop with the conditon (while i is less than ssnFields.length). i increments by 1
		
		// Create an event listener for allImages[i] (The current image on the page) that activates upon input
		if (allImages[i].addEventListener) {
			
			console.log("8. For loop entered: Adding Mouse Over event listener to allImages[i]");
			allImages[i].addEventListener("mouseover", showAvailable, false);
			
			
		} // END ADD EVENT LISTENER
		
		// Create an event listener for allImages[i] (The current image on the page) that activates upon input - This one is for older browsers
		else if (allImages[i].attachEvent) {
			
			console.log("9. For loop entered: Adding Mouse Over event listener to allImages[i]");
			allImages[i].attachEvent("onmouseover", showAvailable);
			
				
		} // END ATTACH EVENT LISTENER
		
		
	} // END For Loop


	for (var i = 0; i < allImages.length; i++) { 
		
		// Create an event listener for allImages[i] (The current image on the page) that activates upon input
		if (allImages[i].addEventListener) {
			
			console.log("10. For loop entered: Adding Mouse Out event listener to allImages[i]")
			allImages[i].addEventListener("mouseout", hideAvailable, false);
			
			
		} // END ADD EVENT LISTENER
		
		// Create an event listener for allImages[i] (The current image on the page) that activates upon input - This one is for older browsers
		else if (allImages[i].attachEvent) {
			
			console.log("11. For loop entered: Adding Mouse Out event listener to allImages[i]")
			allImages[i].attachEvent("onmouseout", hideAvailable);
					
		} // END ATTACH EVENT LISTENER
		
	} // END For Loop
	
	console.log("12. <<Leaving createEventListeners function...");
} // END createEventListeners
	
	
function insertCopyright()
{
	 // Input: none
	 // Processing: Calculates current year
	 // Output: Places current year in footer after copyright symbol
	 
	console.log("13. >>Entering insertCopyright")

	var currentYear = new Date().getFullYear();
	var dateContainer = document.getElementById("copyright");
	dateContainer.innerHTML = currentYear;
	
	console.log("14. << Leaving insertCopyright")
} // end FUNCTION insertCopyright()


function init() {
	
	// Input:		none
	// Processing:	calls other functions necessary for script initialization
	// Output:		none
	
	console.log("15. >>Entering init function...");
	
	createEventListeners();
	insertCopyright()
	
	console.log("16. <<Leaving init function...");
	
}

// Create an event listener that calls the init function on load.
if (window.addEventListener) {
	
	console.log("17. > Adding TC39 Event Listener..."); // Place a console.log upon entering this IF EVENT LISTENER
	
	window.addEventListener("load", init, false);
	
} //END ADD EVENT LISTENER


// Create an event listener that calls the init function on load. (For older browsers)
else if (window.attachEvent) {
	
	console.log("18. > Adding MS Event Listener..."); // Place a console.log upon enterin this IF ATTACH EVENT
	
	window.attachEvent("onload", init);
	
} // END ATTACH EVENT LISTENER


	
	
