//Getting the Id of all inputs

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  cPassword = id("c-password"),
  form = id("form"),
  
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

//Checking the empty inputs
  let engine = (id, serial, message) => {

  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";
    
    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } 
  
  else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";
    
    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
}

//event listener for the submit button
  form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "Username cannot be blank");
  engine(email, 1, "Email cannot be blank");
  engine(password, 2, "Password cannot be blank");
 engine(cPassword, 3, "Confirm Password cannot be blank");
});


//Checking the strlen of username
function checkUserLen(){
	var getUser = username.value.trim();
	if(getUser == ""){
		errorMsg[0].innerHTML = "";
      username.style.border = "2px solid #c4c4c4";
    
    // icons
    failureIcon[0].style.opacity = "0";
    successIcon[0].style.opacity = "0";

	}else if(getUser.length < 3){
	  errorMsg[0].innerHTML = "Characters should not be less than 3";
      username.style.border = "2px solid red";
    
    // icons
    failureIcon[0].style.opacity = "1";
    successIcon[0].style.opacity = "0";

	}else if(getUser.length > 25){
          errorMsg[0].innerHTML = "Characters should not be more than 25";
      username.style.border = "2px solid red";
    
    // icons
    failureIcon[0].style.opacity = "1";
    successIcon[0].style.opacity = "0";

	}else{
		    errorMsg[0].innerHTML = "";
      username.style.border = "2px solid green";
    
    // icons
    failureIcon[0].style.opacity = "0";
    successIcon[0].style.opacity = "1";
	}
}  

//Checking for valid email format
function checkEmail(){
	var getMail = email.value.trim();
	var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	

	if(reg.test(getMail)){
		errorMsg[1].innerHTML = "";
      email.style.border = "2px solid green";
    
    // icons
    failureIcon[1].style.opacity = "0";
    successIcon[1].style.opacity = "1";
	}else if(getMail == ""){
		errorMsg[1].innerHTML = "";
      email.style.border = "2px solid #c4c4c4";
    
    // icons
    failureIcon[1].style.opacity = "0";
    successIcon[1].style.opacity = "0";

	}else{
		errorMsg[1].innerHTML = "Email format is invalid";
      email.style.border = "2px solid red";
    
    // icons
    failureIcon[1].style.opacity = "1";
    successIcon[1].style.opacity = "0";
	}
}

//Checking for password length
function checkPass(){
	var getPass = password.value.trim();
	if(getPass == ""){
		errorMsg[2].innerHTML = "";
      password.style.border = "2px solid #c4c4c4";
    
    // icons
    failureIcon[2].style.opacity = "0";
    successIcon[2].style.opacity = "0";

	}else if(getPass.length < 7){
	  errorMsg[2].innerHTML = "Password should not be less than 7";
      password.style.border = "2px solid red";
    
    // icons
    failureIcon[2].style.opacity = "1";
    successIcon[2].style.opacity = "0";

	}else{
      errorMsg[2].innerHTML = "";
      password.style.border = "2px solid green";
    
    // icons
    failureIcon[2].style.opacity = "0";
    successIcon[2].style.opacity = "1";
	}
}  

//Checking for password mismatch
function misMatch(){
	var getPass = password.value.trim();
	var getConfirmPass = cPassword.value.trim();

	if(getConfirmPass == ""){
		errorMsg[3].innerHTML = "";
      cPassword.style.border = "2px solid #c4c4c4";
    
    // icons
    failureIcon[3].style.opacity = "0";
    successIcon[3].style.opacity = "0";

	}else if(getPass != getConfirmPass){
		errorMsg[3].innerHTML = "Password Mismatch";
      cPassword.style.border = "2px solid red";
    
    // icons
    failureIcon[3].style.opacity = "1";
    successIcon[3].style.opacity = "0";
	 
	}else{
		 errorMsg[3].innerHTML = "";
      cPassword.style.border = "2px solid green";
    
    // icons
    failureIcon[3].style.opacity = "0";
    successIcon[3].style.opacity = "1";
	}
}

//function for show or hide password
function showPass(){
	var eyeSlash = document.getElementById('eyeslash');
	var eyeSlash1 = document.getElementById('eyeslash1');
	var inputType = password.getAttribute("type");
	if(inputType == "password"){
		password.setAttribute("type", "text");
		cPassword.setAttribute("type", "text");
		eyeSlash.classList.remove("fa-eye-slash");
		eyeSlash.classList.add("fa-eye");
		eyeSlash1.classList.remove("fa-eye-slash");
		eyeSlash1.classList.add("fa-eye");
	}else if(inputType == "text"){
		password.setAttribute("type", "password");
		cPassword.setAttribute("type", "password");
		eyeSlash.classList.remove("fa-eye");
		eyeSlash.classList.add("fa-eye-slash");
		eyeSlash1.classList.remove("fa-eye");
		eyeSlash1.classList.add("fa-eye-slash");
	}
}


//Function for theme change form light to dark or vice versa
window.onload=function(){
   var theme = localStorage.getItem('data-theme');
   if(theme=='light'){
     document.documentElement.setAttribute('data-theme', 'light');
   }else if(theme==''){
     document.documentElement.setAttribute('data-theme', 'light');
   }else if(theme=='dark'){
     document.documentElement.setAttribute('data-theme' , 'dark');
     document.getElementById("checkbox").checked = true;
   }
 }
 function toggle(a){
   if(a.checkbox.checked==true){
     document.documentElement.classList.add('transition');
     document.documentElement.setAttribute('data-theme', 'dark');
     localStorage.setItem('data-theme','dark');
   }
   else if(a.checkbox.checked==false){
     document.documentElement.classList.add('transition');
     document.documentElement.setAttribute('data-theme', 'light');
     localStorage.setItem('data-theme','light');
   }
 };