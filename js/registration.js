window.onload;
    function CheckAll() {
    //define variables to get values from input
    var check = 0;
    var vuserName = document.pageForm.userName.value;
    var vPassword = document.pageForm.password.value;
    var vpasswordVerify = document.pageForm.passwordVerify.value;
    var vfirstName = document.pageForm.firstName.value;
    var vlastName = document.pageForm.lastName.value;
    var vemail = document.pageForm.email.value;
    var vphone = document.pageForm.phone.value;
    var vsignUpNewsletter = document.pageForm.signUpNewsletter.value;
    
    //define variables to compare with input fields as required; ^beginning $ending {number} limiting characters a-z lowercase letters A-Z uppercase letters \d digits ...etc
    var vuserNameValues = /^[0-9a-zA-Z]+$/;
    var vfirstNameValues = /^[A-Za-z]+$/;
    var vlastNameValues = /^[A-Za-z]+$/;
    var vemailValues = /^[A-Za-z0-9.!#$%^&*+/=+?~{\-}]{3}@[A-Za-z0-9.!#$%^&*+/=+?~{\-}]{3}\.[A-Za-z0-9.!#$%^&*+/=+?~{\-}]{3}$/;
    var vphoneValues = /^\(\d{3}\) \d{3}-\d{4}$/;
    
    //define variables to orderly focus the cursor to the field with input errors
    var userNameError = false
    var PasswordError = false
    var passwordVerifyError = false
    var firstNameError = false 
    var lastNameError = false
    var emailError = false
    var phoneError = false
    var signUpNewsletterError = false
    
    //loop to show error messages; if leaving blank then show error; else if not matching with requirements then show error with requirement suggestions
    if (vuserName == ""){
        document.getElementById('errorUserName').innerHTML = "*Your user name is required.";
        userNameError = true;
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
        PasswordError = true
        check = 0;
    } else if (vPassword.length < 8 ){
        document.getElementById('errorPassword').innerHTML = "*Password must contain minimum of 8 characters.";
        check = 0;
        PasswordError = true
    } else { document.getElementById('errorPassword').innerHTML = "";
        check++;
    }
        
    if (vpasswordVerify == ""){
        document.getElementById('errorPasswordVerify').innerHTML = "*Your password is required.";
        passwordVerifyError = true
        check = 0;
    } else if (vPassword != vpasswordVerify) {
        document.getElementById('errorPasswordVerify').innerHTML ="*Password does not match. Please re-enter the above password";
        passwordVerifyError = true
        check = 0;
    }else { document.getElementById('errorPasswordVerify').innerHTML = "";
        check++;
    }
        
    if (vfirstName == ""){
        document.getElementById('errorFirstName').innerHTML = "*Your first name is required.";
        firstNameError = true
        check = 0;
       
    } else if (!vfirstName.match(vfirstNameValues)){
        document.getElementById('errorFirstName').innerHTML = "*First name must contain only letters.";
        firstNameError = true
        check = 0;
    } else {
        document.getElementById('errorFirstName').innerHTML = "";
        check++;
    }

    if (vlastName == ""){
        document.getElementById('errorLastName').innerHTML = "*Your last name is required.";
        lastNameError = true
        check = 0;
    } else if (!vlastName.match(vlastNameValues)){
        document.getElementById('errorLastName').innerHTML = "*Last name must contain only letters.";
        lastNameError = true
        check = 0;
    } else {
        document.getElementById('errorLastName').innerHTML = "";
        check++;
    }
        
    if (vemail == ""){
        document.getElementById('errorEmail').innerHTML = "*Your email is required.";
        emailError = true
        check = 0;
    } else if (!vemail.match(vemailValues)){
        document.getElementById('errorEmail').innerHTML = "*Email address must be following the format xxx@xxx.xxx";
        emailError = true
        check = 0;
    } else {
        document.getElementById('errorEmail').innerHTML = "";
        check++;
    }
        
    if (vphone == ""){
        document.getElementById('errorPhone').innerHTML = "*Your phone is required.";
        phoneError = true
        check = 0;
    } else if (!vphone.match(vphoneValues)){
        document.getElementById('errorPhone').innerHTML = "*Phone must be following the format (xxx) xxx-xxxx";
         phoneError = true
        check = 0;
    } else {
        document.getElementById('errorPhone').innerHTML = "";
        check++;
    }
    
    if (vsignUpNewsletter == ""){
        document.getElementById('errorSignUp').innerHTML = "*Your selection is required.";
        signUpNewsletterError = true
        check = 0;
    } 
        else {
        document.getElementById('errorSignUp').innerHTML = "";
        check++;
    }
   
    //if there strictly is an error; the cursor will be on that field in order from top to bottom
     if (userNameError === true) {
        document.getElementById('userName').focus();
        return false;
    } 
        else if (PasswordError === true){
        document.getElementById('password').focus();
        return false;
        }
        else if (passwordVerifyError ===true){
        document.getElementById('passwordVerify').focus();
        return false;
        }
        else if (firstNameError ===true){
            document.getElementById('firstName').focus();
        return false;
        }
        else if (lastNameError === true){
        document.getElementById('lastName').focus();
        return false;
        }
        else if (emailError === true){
        document.getElementById('email').focus();
        return false;
        }
        else if (phoneError === true){
        document.getElementById('phone').focus();
        return false;
        }
        else if (signUpNewsletterError === true){
        document.getElementById('signUpNewsletter').focus();
        return false;
        }
    // errors count as 0; correctly input for each field counts as 1; if everything is filled out correctly for total of 8 fields, then the form will submit to php for confirmation
    if (check == 8){
        window.location.href = "confirmation.php";
    }
    }
