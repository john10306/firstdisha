"use strict";
var listy;
window.onload = function(){


	var _id = function _id(id){
		return document['getElementById'](id);
	}

var addz = _id('addz');
var checkz = _id('checkz');

var _maker = function(name){
	 if (listy==undefined) {listy = document.createElement("ul"); }
var blehz = document.createElement('li');  
var linkz = document.createElement('a'); 
linkz.setAttribute('href', 'http://www.'+ name + '.com');
linkz.setAttribute('target', '_blank');
var t = document.createTextNode(name);   
linkz.appendChild(t);  
blehz.appendChild(linkz);                             
document.getElementById('linkz').appendChild(listy);     
listy.appendChild(blehz);  


}


addz.onclick=function(){
	if(listy==undefined){
_maker("google");
_maker("yahoo");
_maker("facebook");
_maker('twitter');
addz.disabled = true;
return;
}
	_maker("pro-tekconsulting");
}


checkz.onclick=function(){
var az = _id('linkz').getElementsByTagName('a');

for (var i = 0; i < az.length; i++) {
	if(az[i].getAttribute('href') == "http://www.pro-tekconsulting.com"){
	return;
		// addz.disabled = true;
		// break;
	}
	if (az[i].getAttribute('href') !== "http://www.pro-tekconsulting.com"){
	addz.disabled = false;}
}
}

var propName = /^[0-9\.]+$/;


}

