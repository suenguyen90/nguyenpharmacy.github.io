//function created to replace the content
function replaceContent() {
    
	//declaring the variables to store the input values
    
	var myRecipientName;
	var myHostName;
    
	//setting the variable to the input fields by finding the HTML elements with id recipientNameInput and hostNameInput
	myRecipientName = document.getElementById("recipientNameInput").value;
	myHostName = document.getElementById("hostNameInput").value;
	
	//Change the content of the HTML element with id recipientNamePlaceholder and hostNamePlaceholder with the created variables 
	document.getElementById("recipientNamePlaceholder").innerHTML = myRecipientName;
    document.getElementById("hostNamePlaceholder").innerHTML = myHostName;
} 