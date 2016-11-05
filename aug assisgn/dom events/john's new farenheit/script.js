	var propName = /^[0-9\.\-]+$/;

var _id = function _id(id){
	return document['getElementById'](id);
}

var kelvin = _id('kelvin');
var fah = _id('fah');
var cel = _id('cel');


fah.onclick=function(){
	fah.select();
}

cel.onclick=function(){
	cel.select();
}

kelvin.onclick=function(){
	kelvin.select();
}


fah.onkeyup=function(){
	var num;
	
	if(!fah.value.match(propName) || isNaN(fah.value)){
	fah.style.borderColor="red";
	fah.style.borderWidth="10px";
	cel.value="correct the value";
	kelvin.value="correct the value";
		}
		else{
			 cel.setAttribute("style", "borderColor=''");
			fah.setAttribute("style", "borderColor=''");
			kelvin.setAttribute("style", "borderColor=''");
			num = parseFloat(fah.value);

		cel.value=parseInt((num -32) * 5/9);
		kelvin.value=parseInt((num -32) * 5/9 +273.15);
		}
}

cel.onkeyup=function(){


	var num;
	
	if(!cel.value.match(propName ) || isNaN(cel.value) ){
	cel.style.borderColor="red";
	cel.style.borderWidth="10px";
		fah.value="correct the value";
		kelvin.value="correct the value";
		}
		else{

			 cel.setAttribute("style", "borderColor=''");
			fah.setAttribute("style", "borderColor=''");
			kelvin.setAttribute("style", "borderColor=''");
				num = parseFloat(cel.value);

		fah.value=parseInt( num * 9/5 + 32);
		kelvin.value=parseInt( num + 273.15);
		}
}

kelvin.onkeyup=function(){

		var num;

	if(!kelvin.value.match(propName)  || isNaN(kelvin.value)){
	kelvin.style.borderColor="red";
	kelvin.style.borderWidth="10px";
		fah.value="correct the value";
		cel.value="correct the value";
		}
		else{
			num = parseFloat(kelvin.value);
			 cel.setAttribute("style", "borderColor=''");
			fah.setAttribute("style", "borderColor=''");
			kelvin.setAttribute("style", "borderColor=''");
		fah.value=parseInt((num -273.15) * 9/5 + 32);
		cel.value=parseInt(((num -273.15) -32)* 5/9);
		}
}