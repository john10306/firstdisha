
var butt = document.getElementById("butto");
var endy = document.getElementById("results");

function insNum (){
	a1 = parseFloat(document.getElementById("inpoo1").value);
	a2 = parseFloat(document.getElementById("inpoo2").value);
}


function summer (){
insNum();
a3 = a1 + a2;
alert("sum = " + a3);
}

function producty (){
	insNum();
	a3 = a1 * a2;
alert ("product = " + a3);
}

function moduloo (){
	insNum();
	a3 = a1%a2;
	alert ("modulus = " + a3);
}

function funky () {
summer();
producty();
moduloo();
}

document.getElementById("butto").onclick=function(){funky()};

//document.getElementById("butto").addEventListener('click', function(){summer(), producty()},  false);
//document.getElementById("butto").addEventListener('click', function(){producty()},  false);





