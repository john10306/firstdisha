"use strict";

var globA;


window.onload = function(){

	var _id = function _id(id){
		return document['getElementById'](id);
	}

	var a2=_id('a2'),
	results=_id('results'),
	results2=_id('results2'),
	results3=_id('results3'),
	l=_id('l'),
	l2=_id('l2'),
	results4=_id('results4');
	globA=_id('a');
	globA=_id('a2');

	a.onkeyup=function(){
	
			results.innerHTML = parseInt(globA) + parseInt(1)
		}


	

	a2.onkeyup=function(){
	
			results3.innerHTML  = globA + 1
		}


	
	l.onkeyup=function(){

			results2.innerHTML  = l + 1
		}

	
	l2.onkeyup=function(){

			results4.innerHTML  = l2 + 1
		}


	

}





