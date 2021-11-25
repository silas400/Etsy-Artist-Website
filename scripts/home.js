/* 	Author: 			Silas Little
	Date Written: 		4/16/2020
	Description: 		javascript for the Home Page
*/

"use strict"; // Operate in strict mode


function postWelcomeImg() {
	
	// Input:		none
	// Processing: 	Gets access to the element whose id is "welcomeImg" and changes the content of its source.
	// Output:		Displays the welcome image on the page
	
	console.log("1. >>Entering postWelcomeImg...")
	
	document.getElementById("welcomeImg").src = "images/welcomeImage.png" // Post the welcome image on the page
	
	console.log("2. <<leaving postWelcomeImg...")
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

function rememberUser() {
	
	// Input:		none
	// Processing: 	Gets access to the value in the name field
	// Output:		Will display an error message if an invalid name is used
	
	console.log("27. >>Entering rememberUser...")
	
	document.getElementsByClassName("errorMsg")[0].innerHTML = ''
	
	/* Make sure that the name in the name field is valid. */
	try {
		
		console.log("28. >>>Entering TRY block...")
		
		// Test to make sure the name is valid
		if (/[a-zA-Z]/.test(document.getElementById("userNameH").value) == true )  {
				
			console.log("29. >>>>Entering if (/[a-zA-Z]/.test(document.getElementById(userName).value) == true )")
			
			//Use web storage to store the name
			var userName = encodeURIComponent(document.getElementById("userNameH").value);
			localStorage.setItem("userName", userName);
			console.log(decodeURIComponent(localStorage.getItem("userName")));
		
		} // END IF 
		
	
	
		else {
			
			console.log("30. >>>>Entering ELSE of if (/[a-zA-Z]/.test(document.getElementById(userName).value) == true )")
			
			localStorage.setItem("userName", ''); // Set the userName key to an empty string
			
			throw("Please enter a valid name");
			
		} // END ELSE
	
	} // END TRY 
	
	catch(msg) {
		
		console.log("31. >>>Entering CATCH block...")
		
		document.getElementsByClassName("errorMsg")[0].innerHTML = msg
		
	} // END CACH
	
	console.log("32. <<Leaving rememberUser...")
} 

function createEventListeners() {
	
	// Input:		none
	// Processing:	creates event listeners
	// Output:		none
	
	console.log("5. >>Entering createEventListeners...")
	
	var rememberBtn = document.getElementById("remember");
	
	// Setup an event listener for rememberBtn on click
	if(window.addEventListener){
		console.log("6. Event Listener for generateBtn added")
		rememberBtn.addEventListener("click",rememberUser, false);
	}
	
	else{
		console.log("7. Event Listener for generateBtn added")
		rememberBtn.attachEvent("onclick",rememberUser);
	}
	
	console.log("8. <<Leaving createEventListeners...")
	
	
} // END Create Event Listeners


function init() {
	
	// Input:		none
	// Processing:	calls other functions necessary for script initialization
	// Output:		none
	
	console.log("9. >>Entering init function...");
	
	postWelcomeImg();
	insertCopyright();
	createEventListeners();
	
	console.log("10. <<Leaving init function...");
	
}

// Create an event listener that calls the init function on load.
if (window.addEventListener) {
	
	console.log("11. > Adding TC39 Event Listener..."); // Place a console.log upon entering this IF EVENT LISTENER
	
	window.addEventListener("load", init, false);
	
} //END ADD EVENT LISTENER


// Create an event listener that calls the init function on load. (For older browsers)
else if (window.attachEvent) {
	
	console.log("12. > Adding MS Event Listener..."); // Place a console.log upon enterin this IF ATTACH EVENT
	
	window.attachEvent("onload", init);
	
} // END ATTACH EVENT LISTENER