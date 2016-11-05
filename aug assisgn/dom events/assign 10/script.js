"use strict";

window.onload = function(){

	var _id = function _id(id){
		return document['getElementById'](id);
	}

	var resultz = _id('resultz'),
		statez = _id('statez'),
		mal = _id('mal'),
		fem = _id('fem'),
	edit=_id('edit'),
	fname=_id('fname'),
	lname=_id('lname'),
	fem2, mal2, statez2,
	fname2, lname2;

	var View_Div = _id(View_Div)
	_id('save').onclick=function(){

		edit.hidden = false;
		save.disabled=true;
		statez.disabled=true;
		fem.disabled=true;
		mal.disabled=true;
		fname.disabled=true;
		lname.disabled=true;
		resultz.innerHTML="";

		fname2=fname.value,
		lname2=lname.value;

		resultz.innerHTML +=	fname.value + "<br>" +
		lname.value +"<br>" ;	

		fname.value = 'first name';
		lname.value= 'last name';


		if(mal.checked == true){
			resultz.innerHTML += "<br> male";
			mal2 = mal.value;
			mal.checked=false}

			if(fem.checked == true){
				resultz.innerHTML += "<br> female";
				fem2 = fem.value;
				fem.checked=false
			}

			if(statez.value!='stt'){
				resultz.innerHTML += statez.value;
				statez2 = statez.value
				statez.value = 'stt';
			}



		}

		edit.onclick=function(){
			fname.value=fname2;
			lname.value=lname2;
			edit.hidden=true;
			save.disabled=false;
			statez.disabled=false;
		fem.disabled=false;
		mal.disabled=false;
		fname.disabled=false;
		lname.disabled=false;

			if(statez2){
				statez.value=statez2;}

				if(fem2){
					fem.value=fem2;}

					if(mal2){
						mal.value=mal2;}


					}
				}