var person = prompt("Please enter withdrawal amount (20s)", "20");

var proper_p = parseInt(person);
if (isNaN(proper_p)) {alert("that's not a number, ")}
else {
if (proper_p % 20 == 0) {alert("Your amount got jacked")}
else {alert("Enter a multiple of 20")}
}
// var forEach;
// name.forEach(function(element){
// 	console.log(name[element])
// });