
document.getElementById("butto").onclick=function displayQuotes(){
	var quotez = ["i","love","javascript","i don't care","what is said about me",
	"as long as", "its", "not", "true", "i\'m gonna live forever"];



	
	function alertz(varz){
		if(Array.isArray(varz)){
			alert(varz.length);
			var a3 = "";
			for (var i = 3; i < varz.length; i++) {
				a3 += varz[i] + "<br>";
			};

			document.getElementById("resultz").innerHTML = a3;
		}
	}
	alertz(quotez);
}

