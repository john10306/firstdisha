//"use strict";

window.onload = function(){


	var _id = function _id(id){
		return document['getElementById'](id);
	}
	_id('main_one').hidden = true;
//_id('main_two').hidden = true;
//_id('main_three').hidden = true;
var hideElems = _id('hideElems');
var showElems = _id('showElems');
var allz = document.getElementsByTagName('ul');

_id('uncheckem').onclick=function(){
	var boxz = document.querySelectorAll('input[type=checkbox]');

for (var i = 0; i < boxz.length; i++) {
	boxz[i].checked = false;
};
};

_id('validate').onclick=function(){
	var boxz = document.querySelectorAll('label');
	var alertz = "";
for (var i = 0; i < boxz.length; i++) {
	if (boxz[i].control.checked == true){
	alertz += '\n' + (boxz[i].innerHTML );
		}
	if (i==boxz.length-1)
}
alert("the following was/were selected: "+alertz)
};

_id('validate2').onclick=function(){
	var boxz = document.querySelectorAll('option');
	var alertz = "";
for (var i = 0; i < boxz.length; i++) {
	if (boxz[i].selected == true){
	alertz += '\n' + (boxz[i].innerHTML );
		}
}
alert("the following was selected: "+alertz)
};



for (var i = 0; i < allz.length; i++) {
	allz[i].hidden = true;
};

showElems.onmouseout=function() {
	for (var i = 0; i < allz.length; i++) {
		allz[i].hidden = true;
	};

}
showElems.onmouseover=function() {
	for (var i = 0; i < allz.length; i++) {

		allz[i].hidden = false;
	}
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

}

