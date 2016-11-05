// function myTrim(x) {
//     return x.replace(/^\s+|\s+$/gm,'');
// }

document.getElementById("butto").onclick=function(){

	var	a2 =document.getElementById("inpoo1").value.toLowerCase();

			if(a2=="two")
			alert("2");
			if(a2=="three")
			alert("3");
			if(a2=="four")
			alert("4");
			if(a2=="five")
			alert("5");
		
		switch(a2){
		case "one":
		alert("1");
		break;
		default:
		console.log("please enter one to five");
		}

}

