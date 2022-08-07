window.onload;
    function CheckAll() {
    var check = 0;
    var vuserName = document.pageForm.userName.value;
    var vPassword = document.pageForm.password.value;
    var vpasswordVerify = document.pageForm.passwordVerify.value;
    var vfirstName = document.pageForm.firstName.value;
    var vlastName = document.pageForm.lastName.value;
    var vemail = document.pageForm.email.value;
    var vphone = document.pageForm.phone.value;
    var vsignUpNewsletter = document.pageForm.signUpNewsletter.value;
    
    
    var vuserNameValues = /^[0-9a-zA-Z]+$/;
    var vfirstNameValues = /^[A-Za-z]+$/;
    var vlastNameValues = /^[A-Za-z]+$/;
    var vemailValues = /^[A-Za-z0-9.!#$%^&*+/=+?~{\-}]{3}@[A-Za-z0-9.!#$%^&*+/=+?~{\-}]{3}\.[A-Za-z0-9.!#$%^&*+/=+?~{\-}]{3}$/;
    var vphoneValues = /^\(\d{3}\) \d{3}-\d{4}$/;
    
    
        
    if (vuserName == ""){
        document.getElementById('errorUserName').innerHTML = "*Your user name is required.";
        check = 0;
    } else if (!vuserName.match(vuserNameValues)){
        document.getElementById('errorUserName').innerHTML = "*Username must contains only letters and numbers.";
        check = 0;
    } else {
        document.getElementById('errorUserName').innerHTML = "";
        check++;
    }
        
    if (vPassword == ""){
        document.getElementById('errorPassword').innerHTML = "*Your password is required.";
        check = 0;
    } else if (vPassword.length < 8 ){
        document.getElementById('errorPassword').innerHTML = "*Password must contain minimun of 8 characters.";
        check = 0;
    } else { document.getElementById('errorPassword').innerHTML = "";
        check++;
    }
        
    if (vpasswordVerify == ""){
        document.getElementById('errorPasswordVerify').innerHTML = "*Your password is required.";
        check = 0;
    } else if (vPassword != vpasswordVerify) {
        document.getElementById('errorPasswordVerify').innerHTML ="*Password does not match. Please re-enter the above password";
        check = 0;
    }else { document.getElementById('errorPasswordVerify').innerHTML = "";
        check++;
    }
        
    if (vfirstName == ""){
        document.getElementById('errorFirstName').innerHTML = "*Your first name is required.";
        check = 0;
    } else if (!vfirstName.match(vfirstNameValues)){
        document.getElementById('errorFirstName').innerHTML = "*First name must contain only letters.";
        check = 0;
    } else {
        document.getElementById('errorFirstName').innerHTML = "";
        check++;
    }

    if (vlastName == ""){
        document.getElementById('errorLastName').innerHTML = "*Your last name is required.";
        check = 0;
    } else if (!vlastName.match(vlastNameValues)){
        document.getElementById('errorLastName').innerHTML = "*Last name must contain only letters.";
        check = 0;
    } else {
        document.getElementById('errorLastName').innerHTML = "";
        check++;
    }
        
    if (vemail == ""){
        document.getElementById('errorEmail').innerHTML = "*Your email is required.";
        check = 0;
    } else if (!vemail.match(vemailValues)){
        document.getElementById('errorEmail').innerHTML = "*Email address must be following the format xxx@xxx.xxx";
        check = 0;
    } else {
        document.getElementById('errorEmail').innerHTML = "";
        check++;
    }
        
    if (vphone == ""){
        document.getElementById('errorPhone').innerHTML = "*Your phone is required.";
        check = 0;
    } else if (!vphone.match(vphoneValues)){
        document.getElementById('errorPhone').innerHTML = "*Phone must be following the format (xxx) xxx-xxxx";
        check = 0;
    } else {
        document.getElementById('errorPhone').innerHTML = "";
        check++;
    }
    
    if (vsignUpNewsletter == ""){
        document.getElementById('errorSignUp').innerHTML = "*Your selection is required.";
        check = 0;
    } 
        else {
        document.getElementById('errorSignUp').innerHTML = "";
        check++;
    }
    if (check == 8){
        window.location.href = "confirmation.php";
    }
    }
