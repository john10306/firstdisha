document.getElementById('submitz').onclick=function(){
	var fname = document.getElementById('fname');
	var lname = document.getElementById('lname');
	var propName = /^[a-zA-Z\s\-\_]+$/;


if(fname.value=="" || fname.value=="first name" || !fname.value.match(propName) ){
	fname.style.backgroundColor="red";
}
else{
		fname.style.backgroundColor="white";
}

if(lname.value=="" || lname.value=="last name" || !lname.value.match(propName) ){
	lname.style.backgroundColor="red";
}
else{
		lname.style.backgroundColor="white";
}


if(document.getElementById('mal').checked==false && document.getElementById('fem').checked==false){
	alert("pick a gender");}

if(document.getElementById('statez').value=="stt" ){
	alert("pick a state");}

	if(document.getElementById('checkz').checked==false ){
	alert("check the box");}




	return false;
}