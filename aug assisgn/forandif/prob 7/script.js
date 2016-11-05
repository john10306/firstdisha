

function summer (){
	var inpoo1 = document.getElementById("inpoo1");
	var results = document.getElementById("results");
	var a1 = parseInt(inpoo1.value);
		var a2 = a1;
		for (var i = 0 ; i <10; i++) {
			a2++;
			a1 += "<br>" + a2;
		};
results.innerHTML = a1;

}


document.getElementById("inpoo1").addEventListener("keyup",summer);