input.addEventListener("keyCode", alertPress);


	function alertPress () {
		var x = document.getElementById ('input').value;
		document.getElementById('header').innerHTML = 'the key you pressed is '+x+'.';
		/*if(x=="x"){
			alert('hey');
		}*/
		
}

/*var password;
var pass1 = 'yourpassword';
password=prompt('enter password to view page','');
if(password!=pass1)
{alert('NO');
window.location = 'www.ziatykphoto.com';
}else {
	alert("you're good")
}*/
