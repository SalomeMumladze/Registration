
//Registration

function validateForm(username) {
  var nameVal = document.getElementById("fName").value;
	var secondNameVal = document.getElementById("lName").value;
	var username = document.getElementById("username").value;
	var email = document.getElementById("mail").value;
	var pwd1 = document.getElementById("pwd1").value;
	var pwd2 = document.getElementById("pwd2").value;
	var gender = document.getElementById("gender").value;
	var bornYear = document.getElementById("year").value;
	var bornDay = document.getElementById("day").value;
	var month = document.getElementById("month").value;
	var gender = document.getElementById("gender").value;

	if (nameVal.length < 3) {
		document.getElementById("fName").style.border = "1px solid red";
		document.getElementById("message_name").innerHTML = "Error: Name must be at least 3 characters long!";
		return false;
  	}
  
	if (secondNameVal.length < 3) {
		document.getElementById("lName").style.visibility = "1px solid red";
		document.getElementById("message_lName").innerHTML = "Error: Last name must be at least 3 characters long!";
		return false;
  	}
  
	if (username.length == "") {
		document.getElementById("username").style.border = "1px solid red";
		document.getElementById("message_username").innerHTML = "Error: Username cannot be blank";
		return false;
  	}
  
	if (username.length < 5 || username.length > 12) {
		document.getElementById("username").style.border = "1px solid red";
		document.getElementById("message_username").innerHTML = "Error: Your Character must be 5 to 15 Character";
		return false;
	}
	
	if (email.indexOf("@") <= 0 || email.length < 6) {
		document.getElementById("mail").style.border = "1px solid red";
		document.getElementById("message_mail").innerHTML = "Error: You have entered an invalid email address!";
		return false;
  	}
	  
	if (pwd1.search(/[A-Z]/) == -1){
		document.getElementById("pwd1").style.border = "1px solid red";
		document.getElementById("message_pwd1").innerHTML = "Error: Your password needs at least one upper case letter.";
		return false;
	}

	if (pwd1.search(/[0-9]/) == -1){
		document.getElementById("pwd1").style.border = "1px solid red";
		document.getElementById("message_pwd1").innerHTML = "Error: Your password needs a number.";
		return false;
	}

	if (pwd1.length < 6) {
		document.getElementById("pwd1").style.border = "1px solid red";
		document.getElementById("message_pwd1").innerHTML = "Error: Your password must be 6 character";
		return false;
  	}
  
	if (pwd1 != pwd2) {
		document.getElementById("pwd2").style.border = "1px solid red";
		document.getElementById("message_match").innerHTML = "Error: Password did not match: Please try again!";
		return false;
  	}
  
	if (gender <= 0 || gender == "") {
		document.getElementById("gender").style.border = "1px solid red";
		document.getElementById("message_gender").innerHTML = "Error: Year cannot be blank";
		return false;
  	}
  
	if (bornDay <= 0 || bornDay == "") {
		document.getElementById("day").style.border = "1px solid red";
		document.getElementById("message_bornDay").innerHTML = "Error: Please enter ypur birthday";
		return false;
  	}
  
	if (month <= 0) {
		document.getElementById("month").style.border = "1px solid red";
		document.getElementById("message_month").innerHTML = "Error: Month cannot be blank";
		return false;
	}

	if (bornYear == "") {
		document.getElementById("year").style.border = "1px solid red";
		document.getElementById("message_bornYear").innerHTML = "Error: Year cannot be blank";
		return false;
  	}
  
	if (bornYear > 2012) {
		document.getElementById("year").style.border = "1px solid red";
		document.getElementById("message_bornYear").innerHTML = "Error: you must be at least 8 year old";
		return false;
	}
	
	return true;
	}