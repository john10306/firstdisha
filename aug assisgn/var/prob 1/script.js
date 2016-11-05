

function summer (){
	a1 = parseFloat(document.getElementById("inpoo1").value);
	a2 = parseFloat(document.getElementById("inpoo2").value);
a3 = a1 + a2;
alert("sum = " + a3);

	a4 = a1 * a2;
alert ("product = " + a4);

	a5 = a1%a2;
	alert ("modulus = " + a5);
}


document.getElementById("butto").onclick=function(){summer()};