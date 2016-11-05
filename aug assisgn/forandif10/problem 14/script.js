

document.getElementById("butto").onclick=function(){
var a3 = "";
a2 = parseInt(document.getElementById("inpoo1").value);
	for (var i = 2; i <= 18; i+=2) {
		var a4 = a2 + i;
		a3 += a4.toString() + "<br>";
	}
document.getElementById("resultz").innerHTML = a3;

}

