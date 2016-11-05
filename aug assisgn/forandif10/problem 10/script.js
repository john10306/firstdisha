

document.getElementById("butto").onclick=function(){
	a1 = parseFloat(document.getElementById("inpoo1").value);
	for (var i = 1; i <= 10000000; i+=10) {
		if (i > a1){
		var a2 = i-10;
		var a3 = i-1;
		var a4 = "the number is between \""  + a2+  "\" and \""+a3 + "\"";
		alert(a4);
		break;
		}
	};
}
