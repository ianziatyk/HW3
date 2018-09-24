/*var attempt = 3; //Variable to count number of attempts*/

//Below function Executes on click of login button
function passwordCheck(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var header = document.getElementById('header');


	if (username== ('ian')/* i think i have to use parse int() and isNaN*/ 
  && password == ("12345678")){
		alert ("Login ");
		header.innerHTML = ('you did it')
	}
	else{
		alert("no")
		}
	}
		//Disabling fields after 3 attempts
		/*if( attempt == 0){
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;*/
		
	

/*function change(){
	var header = document.getElementById('header');
	if( username.value ==  && password == "12345678"){
		header.innerHTML= 'you dit it'
	}*/
