/* 	Author: 			Silas Little
	Date Written: 		4/16/2020
	Description: 		javascript for the Commissions Page
*/

"use strict"; // Use strict mode

// Intialize the variable form as a global variable since it will be used in more than 1 place
var form = document.getElementsByTagName("form")[0];

/* Everything from this point on is for the Comissions Page */
function ImgMachine() {
	
	// Input:		none
	// Processing:	Constructs a template for objects to be made from
	// Output:		Instanstiates an object based on this class
	
	console.log("1. >>Entering the imgMachine class constructor...")
	
	// Setup the values for the imgMachine constructor
	this.fullBodyS = "images/comm4.jpg";
	this.fullBodyD = "images/comm3.jpg";
	this.halfBodyS = "images/comm2.jpg";
	this.halfBodyD = "images/comm1.jpg";
	this.alt = "Commission Photo"
	this.changeArt = changeArt;
	

	function changeArt() { // Define the changeArt function
		
		// Input:		none
		
		// Processing:	Access the Comission Photo and Info, and figures out which content to replace it with based on radio button values
		
		// Output:		Changes the Commission Photo and Comission Info on the page
	
		console.log("2. >>>Entering the changeArt method...")
		document.getElementById("thisCom").scrollIntoView(); // Scroll to the commission picture
		
		// Access the current commission picture and the current commission info
		var newArt = document.getElementById('thisCom').cloneNode();
		var artInfo = document.getElementById('commInfo').cloneNode();
		console.log("3. Elements before the change");
		console.log(newArt);
		console.log(artInfo);
		
		// Remove the commission picture and its info
		document.getElementById('thisCom').remove();
		document.getElementById('commInfo').remove();
		
		// If the value of the radio button set is equal to "fullBody"
		
		if (document.querySelector('input[name="body"]:checked').value == "Full Body") {
			
			console.log("4. >>>>Entering if (document.querySelector('input[name=body]:checked').value == fullBody)...")
			
			// If the value of the radio button set is equal to "sketch"
			if (document.querySelector('input[name="artStyle"]:checked').value == "Sketch") {
				
				console.log("5. >>>>>Entering if (document.querySelector('input[name=artStyle]:checked').value == sketch)")
				
				// Assign the new commission info and the commission picture to the appropriate variables
				artInfo.innerHTML = "<strong>Price Range:</strong> $20-$30<br><br><br><strong>Estimated Time:</strong> 1 week<br><br><br><strong>Body:</strong> Full<br><br><br><strong>Art Style:</strong> Sketch";
				newArt.src = this.fullBodyS
				
				// Add the variables containing the commission picture and info inside of the element whose id is "imageContainer"
				document.getElementById("imageContainer").appendChild(artInfo);
				document.getElementById("imageContainer").appendChild(newArt);
				
				console.log("6. <<<<<Leaving if (document.querySelector('input[name=artStyle]:checked').value == sketch)")
				
			} // End IF
			
			// If the value is not "sketch"
			else {
				
				 console.log("7. >>>>>Entering ELSE of if (document.querySelector('input[name=artStyle]:checked').value == sketch)")
				
				
				// Assign the new commission info and the commission picture to the appropriate variables
				artInfo.innerHTML = "<strong>Price Range:</strong> $40-$50<br><br><br><strong>Estimated Time:</strong> 2 weeks<br><br><br><strong>Body:</strong> Full<br><br><br><strong>Art Style:</strong> Detailed";
				newArt.src = this.fullBodyD
				
				// Add the variables containing the commission picture and info inside of the element whose id is "imageContainer"
				document.getElementById("imageContainer").appendChild(artInfo);
				document.getElementById("imageContainer").appendChild(newArt);
				
				console.log("8. <<<<<Leaving ELSE of if (document.querySelector('input[name=artStyle]:checked').value == sketch)")
			} // End ELSE
					
			console.log("9. <<<<leaving if (document.querySelector('input[name=body]:checked').value == fullBody)...")
			
		} // END Main IF
		
		// If the value is not "fullBody"
		else {
			
			console.log("10. >>>>Entering ELSE of if (document.querySelector('input[name=body]:checked').value == fullBody)...")
			
			// If the value of the radio button set is equal to "sketch"
			if (document.querySelector('input[name="artStyle"]:checked').value == "Sketch") {
				
				console.log("11. >>>>>Entering if (document.querySelector('input[name=artStyle]:checked').value == sketch)")
				
				// Assign the new commission info and the commission picture to the appropriate variables
				artInfo.innerHTML = "<strong>Price Range:</strong> $10-$15<br><br><br><strong>Estimated Time:</strong> 2 Days<br><br><br><strong>Body:</strong> Half<br><br><br><strong>Art Style:</strong> Sketch";
				newArt.src = this.halfBodyS
				
				// Add the variables containing the commission picture and info inside of the element whose id is "imageContainer"
				document.getElementById("imageContainer").appendChild(artInfo);
				document.getElementById("imageContainer").appendChild(newArt);
				
				console.log("12. <<<<<Leaving if (document.querySelector('input[name=artStyle]:checked').value == sketch)")
				
			} // End IF
			
			// If the value is not "sketch"
			else {
				
				console.log("13. >>>>>Entering ELSE of if (document.querySelector('input[name=artStyle]:checked').value == sketch)")
				
				// Assign the new commission info and the commission picture to the appropriate variables
				artInfo.innerHTML = "<strong>Price Range:</strong> $15-$25<br><br><br><strong>Estimated Time:</strong> 4 Days<br><br><br><strong>Body:</strong> Half<br><br><br><strong>Art Style:</strong> Detailed";
				newArt.src = this.halfBodyD
				
				// Add the variables containing the commission picture and info inside of the element whose id is "imageContainer"
				document.getElementById("imageContainer").appendChild(artInfo);
				document.getElementById("imageContainer").appendChild(newArt);
				
				console.log("14. <<<<<Leaving ELSE of if (document.querySelector('input[name=artStyle]:checked').value == sketch)")
				
			} // End ELSE
			
			
		} // END Main ELSE
		
		console.log("15. Elements after the change");
		console.log(artInfo)
		console.log(newArt)
		
	} // END changeArt Method
	
} // End imgMachine Class Constructor


// Define the validateInput function
function validateInput(evt) {
	
	//Input: none
	//Processing: This functions iterates through all of the input elements and checks to see if they meet the appropriate requirements for a specific field
	//Output: If the function finds an input element with invalid input, it will display an error message. If every input is valid the function will submit the form.
	
	console.log("16. >>Entering validateInput(evt) function...")
	
	/* Prevent The Form From Submitting */
	if (evt.preventDefault) {
		console.log("17. >>>Entering IF (evt.preventDefault)...\n\tExecution of submit intercepted!"); // Place a console.log upon entering this IF EVENT LISTENER
		
		evt.preventDefault(); // prevent form from submitting
		
		console.log("18. <<<Leaving IF (evt.preventDefault)..."); //Place a console.log upon leaving this IF EVENT LISTENER
	} // END IF

	else {
		
		console.log("19. >>>Entering ELSE of (evt.preventDefault)...\n\tExecution of submit intercepted!\n\tevt.returnValue = " + evt.returnValue); // Place a console.log upon entering this ELSE
		
		evt.returnValue = false; // prevent form from submitting in IE8
		
		console.log("20. <<<Leaving ELSE of (evt.preventDefault)...\n\tevt.returnValue = " + evt.returnValue); // Place a console.log upon leaving this ELSE
	} // END ELSE
		
	//Reset all the background colors of the input fields
	document.getElementById("userName").style.background = "white";
	document.getElementById("userPhone").style.background = "white";
	document.getElementById("userEmail").style.background = "white";
	document.getElementById("textBox").style.background = "white";
		
	
	document.getElementsByClassName("errorMsg")[1].innerHTML = ''
	
	
	try { // Start the try block
	
		console.log("21. >>>Entering the TRY block...");
		
		// Check to see if the field whose id is "userName" contains letters. If it does not, throw an error message.
		if (/[a-zA-Z]/.test(document.getElementById("userName").value) == false )  {
			
			document.getElementById("userName").style.background = "rgb(255, 233,233)"
			console.log("22. >>>>Entering if (/[a-zA-Z]/.test(document.getElementById(userName).value) == false )")
			
			throw ("Please Enter in a valid Name")
			
		} // End If
		
		// Check to see if the field whose id is "userPhone" is in a valid phone number format. If it's not valid, throw an error message.
		else if (/^([0-9]{3}\-?)?([0-9]{3}\-?)([0-9]{4})$/.test(document.getElementById("userPhone").value) == false){
			
			console.log("23. >>>>Entering else if (/^([0-9]{3}\-?)?([0-9]{3}\-?)([0-9]{4})$/.test(document.getElementById(userPhone).value) == false)")
				
			document.getElementById("userPhone").style.background = "rgb(255, 233,233)"
			
			throw ("Please enter in a valid Phone Number")
			
		} // End ElSE IF
		
		// Check to see if the field whose id is "userEmail" is in a valid email address format. If it's not valid, throw an error message.
		else if (/^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/.test(document.getElementById("userEmail").value) == false){
			
			console.log("24. >>>>Entering else if (/^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/.test(document.getElementById(userEmail).value) == false)")
			document.getElementById("userEmail").style.background = "rgb(255, 233,233)"
			throw ("Please enter in a valid Email Address")
			
		} // End ELSE IF
		
		else if (document.getElementById("textBox").value == '') {
			
			document.getElementById("textBox").style.background = "rgb(255, 233,233)"
			throw ("The Text Box cannot be empty. Please enter in details.")
	
		}
		
		// If no error messages are thrown, submit the form.
		else {
			
			console.log("25. >>>>Entering else since all conditions have passed\n\tSubmit the form")
			
			form.submit(); // Submit the form
			
		} // End ELSE
	
	} // End TRY Block
		
		
	catch(msg) { // Start the catch block
	
		console.log("26. >>>Entering the catch block");
		if (msg == 'Body Style and Art Style must be selected') {
			
		document.getElementsByClassName("errorMsg")[0].innerHTML = msg // Assign the error message to the innerHTML of the element whose id is "errorMsg"
		
		}
		
		else {
			
		document.getElementsByClassName("errorMsg")[1].innerHTML = msg // Assign the error message to the innerHTML of the element whose id is "errorMsg"
			
		}
		console.log("27. <<<Leaving the catch block");
		
	} // End CATCH block
	
		
		
}

function ajaxFunction() {
	
	// Input: 		
	// Processing:	An Object that can utilize the AJAX methods is created based on the browser, and it will execute a task. A quuery sring is built based on radio button values
	// Output:		Once the required 3 fields are filled in, it will put some text in the text area box
	
	console.log("200. >>Entering ajaxFunction...")
	
	if (document.getElementById("userName").value != '' && document.getElementById("userPhone").value != '' && document.getElementById("userEmail").value != '') {
		
		var ajaxRequest; // The variable that makes the AJAX magic possible!
	
		try{
			
			// REAL BROWSERS
			ajaxRequest = new XMLHttpRequest();
			
		} catch (e) {
			
			// Internet Exploder Browsers
			try{
				
				ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
				
			} catch (e) {
				
				try{
					
					ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
					
				} catch (e) {
					
					// something went wrong
					alert("Oops! Your browser cannot handle AJAX.");
					return false;
					
				} // Ends something went wrong
				
			} // Ends old Microsoft Trap
			
		} // Ends Microsoft Trap
		
		ajaxRequest.onreadystatechange = function(){
			
			if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200) {

				document.getElementById('textBox').value = ajaxRequest.responseText;
				
			} // End IF READY STATE
		} //END AJAX REQUEST
		
		var queryString = "?body=" + 'The Body Type I want is ' + document.querySelector('input[name="body"]:checked').value + "&style=" + ", and I want the Art style to be in " + document.querySelector('input[name="artStyle"]:checked').value;
		ajaxRequest.open("GET", "scripts/response.php" + queryString, true);
		ajaxRequest.send(null);
			
		
	} // END Main IF
	console.log("201. <<Leaving ajaxFunction...")
} // END AJAX Function

function readName() {
	
	 // Input: none
	 // Processing: Reads the name stored in the key "userName"
	 // Output: If there is anything in the local storage, this function will place it in the name field on this page
	
	console.log("61. >>Entering readName function...");
	
	
	/*Check the local storage to see if a name is stored within there.*/
	if (decodeURIComponent(localStorage.getItem("userName")) == "null" || decodeURIComponent(localStorage.getItem("userName")) == "undefined" ) {
		
		console.log('62. >>>Entering if (decodeURIComponent(localStorage.getItem("userName")) == "null")')
		
		document.getElementById("userName").value = ''
		
	}
	
	else {
		
		console.log('63. >>>Entering ELSE of if (decodeURIComponent(localStorage.getItem("userName")) == "null")')
		
		document.getElementById("userName").value = decodeURIComponent(localStorage.getItem("userName"));
	}
	
	console.log("64. <<Leaving readName function...");
}

// Define the createEventListeners function
function createEventListeners() {
	
	// Input:		none
	// Processing:	creates event listeners
	// Output:		none
	
	console.log("28. >>Entering createEventListeners...")
	
	var generateBtn = document.getElementById("generateBtn"); // Get the element whose id is "generateBtn" and assign it to a variable
	var imgBot = new ImgMachine(); // Create an object based off the imgMachine class and assign it to the variable imgBot
	
	// Setup an event listener for generateBtn on click
	if(window.addEventListener){
		console.log("29. Event Listener for generateBtn added")
		generateBtn.addEventListener("click",function(){imgBot.changeArt()}, false);
	}
	
	else{
		console.log("30. Event Listener for generateBtn added")
		generateBtn.attachEvent("onclick",function(){imgBot.changeArt()});
	}
	
	// Create an event listener for the validateInput function. It will execute when the submit button is clicked 
	if (form.addEventListener) {
		
		console.log("31. Event listener for the submit button has been added"); // Place a console.log upon entering this IF EVENT LISTENER
		
		form.addEventListener("submit", validateInput, false);
		
	} //END ADD EVENT LISTENER


	// Create an event listener for the validateInput function. It will execute when the submit button is clicked (For older browsers)
	else if (form.attachEvent) {
		
		console.log("32. Event listener for the submit button has been added");
		
		form.attachEvent("onsubmit", validateInput);
	}
	
	
	/* Event listeners for the AJAX Function    */
	if (window.addEventListener)
	{ // TC39 browsers
		console.log("3. >Adding TC39 Event Listener...");
		document.getElementById("theForm").addEventListener("change",ajaxFunction,false);
	}
	else if (window.attachEvent)
	{ // MS browsers
		console.log("4. >Adding MS Event Listener...");
		document.getElementById("theForm").attachEvent("onchange",ajaxFunction);
		
	}

 } // end FUNCTION createEventListeners()
 
 function insertCopyright()
{
	 // Input: none
	 // Processing: Calculates current year
	 // Output: Places current year in footer after copyright symbol
	 
	console.log("33. >>Entering insertCopyright")
	
	// Get the current year and place it in the footer of the page
	var currentYear = new Date().getFullYear();
	var dateContainer = document.getElementById("copyright");
	dateContainer.innerHTML = currentYear;
	
	console.log("34. << Leaving insertCopyright")
} // end FUNCTION insertCopyright()

// Define the init function
function init() {
	
	// Input:		none
	// Processing:	calls other functions necessary for script initialization
	// Output:		none
	
	console.log("35. >>Entering the init function...");
	
	createEventListeners(); // Call the createEventListeners function
	insertCopyright();
	readName();
	
	console.log("36. >>Entering the init function...");
}

// Create an event listener that calls the init function on load.
if (window.addEventListener) {
	
	console.log("37. > Adding TC39 Event Listener..."); // Place a console.log upon entering this IF EVENT LISTENER
	
	window.addEventListener("load", init, false);
	
} //END ADD EVENT LISTENER


// Create an event listener that calls the init function on load. (For older browsers)
else if (window.attachEvent) {
	
	console.log("38. > Adding MS Event Listener..."); // Place a console.log upon enterin this IF ATTACH EVENT
	
	window.attachEvent("onload", init);
	
} // END ATTACH EVENT LISTENER
