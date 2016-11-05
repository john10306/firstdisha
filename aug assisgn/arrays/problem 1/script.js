
document.getElementById("butto").onclick=function displayQuotes(){
var quotez = ["i","love","javascript","i don't care","what is said about me",
				"as long as", "its", "not", "true"];
var a3 = "";
for (var i = 0; i < quotez.length; i++) {
		a3 += quotez[i] + "<br>";
};

document.getElementById("resultz").innerHTML = a3;

}


