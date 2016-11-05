
document.getElementById("butto").onclick=function displayQuotes(){
	var quotez = ["i","love","javascript","i don't care","what is said about me",
	"as long as", "its", "not", "true", "i\'m gonna live forever"];

quotez.push(prompt("'push'add this text to the end of array"));
console.log(quotez.length)
console.log(quotez)

quotez.unshift(prompt("'unshift' enters this text to the beginning of array"));
console.log(quotez.length)
console.log(quotez)

var z1 = prompt('\(part 1 splice\)enter a single digit, says where to start removing');
while (isNaN(z1) || z1 == "") { z1=prompt('\(part 1 splice\)you MUST enter a single digit, says where to start removing');}
do {var z2 = prompt('\(part 2 splice\)enter a single digit, says number of items to remove');}
while (isNaN(z2) || z2 == "") 
var z3 = prompt('\(part 3 splice, optional\)enter a new value to array at point of splicing');
quotez.splice(z1, z2, z3);
console.log(quotez.length)
console.log(quotez)
console.log("the fifth element is: \"" + quotez[5] + "\"")

z1 = prompt('\(part 1 slice\)enter a single digit, says where to start copying new array, if blank, assumes 0');
z2 = prompt('\(part 2 slice\)enter a single digit, says where to end copied new array, if blank, goes to end');
z3 = quotez.slice(z1, z2);
console.log(quotez);
console.log(z3);


	
	// function alertz(varz){
	// 	if(Array.isArray(varz)){
	// 		alert(varz.length);
	// 		var a3 = "";
	// 		for (var i = 3; i < varz.length; i++) {
	// 			a3 += varz[i] + "<br>";
	// 		};

	// 		document.getElementById("resultz").innerHTML = a3;
	// 	}
	// }
	// alertz(quotez);
}

