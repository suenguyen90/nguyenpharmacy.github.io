var $ = function (id) { return document.getElementById(id); };

var volunteerArray = [];

var displayVolunteers = function () {   
    // display the volunteers in the text area
    //for loop is used to add in number list as required as  it runs through the volunteer array and assigns numbers; i starts at 0;thus i+ 1 was used to start at 1;volunteerList sets with empty value to avoid duplication name display; operator += is used to add values together for displaying the list of volunteers
    
    $("volunteerList").value = volunteerArray.join("\n");
    $("volunteerList").value = "";
    for (var i=0; i<volunteerArray.length; i++){
    $("volunteerList").value += i+1 + "." + volunteerArray[i]+"\n";
    }
	
	
	
};

var addVolunteer = function () {
    // get the data from the form
    var volunteerString = $("first_name").value + " " + $("last_name").value;

    // store the data in an array
    volunteerArray.push(volunteerString);
    
    // display the volunteers and clear the add form
    displayVolunteers();
    
    // get the add form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();
};


var deleteVolunteer = function () {
    // get the data from the user input
    var volunteerString = $("first_name").value + " " + $("last_name").value;
    
    // loop through the entire volunteer array list, compare the user input with the array list, remove only the array element if matches 
    
    for (var i=0; i<volunteerArray.length; i++ ){
        if (volunteerArray[i] === volunteerString) { 
            volunteerArray.splice(i,1);
        }
    }
    // display the volunteers and clear the add form
    displayVolunteers();
    
    // get the delete form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();
    };

var clearList = function () {   
    // delete the data from the arrays
    volunteerArray = [];
    
	//   alternative way to delete all of the data from the array
	//    volunteerArray.length = 0;
    
    // remove the volunteers data from the web page
    $("volunteerList").value = "";
    
    $("first_name").focus();
};

var sortList = function () {   
    // sort the scores
    volunteerArray.sort();
    
    // display the scores
    displayVolunteers();    
};

//When the page is fully loaded, the buttons will be mapped to the JavaScript functions
window.onload = function () {
    $("add_button").onclick = addVolunteer;
	$("delete_button").onclick = deleteVolunteer;
    $("clear_button").onclick = clearList;    
    $("sort_button").onclick = sortList;    
    $("first_name").focus();
};