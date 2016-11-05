window.onload = function(){

	alert("welcome to my blog");
}

var _id = function _id(id){
	return document['getElementById'](id);
}

var hideElems = _id('hideElems');
var showElems = _id('showElems');
var allz = _id('allz');

hideElems.onclick=function() {
allz.hidden = true;
}
showElems.ondblclick=function() {
allz.hidden = false;
}


var propName = /^[0-9\.]+$/;

var lname = _id('lname');
var fname = _id('fname');
var results =  _id('results');
var results2 =  _id('results2');

fname.onkeyup=function(){

	
	if(!fname.value.match(propName) ){
	fname.style.borderColor="red";
	fname.style.borderWidth="10px";
		results.innerHTML="correct the value";
		}
		else{
	fname.style.borderColor="";
	fname.style.borderWidth="";
		results.innerHTML= "C \= " + parseInt((fname.value -32) * 5/9);
		}


}


lname.onkeyup=function(){

	if(!lname.value.match(propName) ){
	lname.style.borderColor="red";
	lname.style.borderWidth="10px";
		results2.innerHTML="correct the value";
		}
		else{
			lname.style.borderColor="";
	lname.style.borderWidth="";
	results2.innerHTML= "F \= " + parseInt(lname.value * 9/5 + 32);
}
	// console.log(fname.value);


}