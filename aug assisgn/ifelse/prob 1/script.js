var person = prompt("How old are you?", "18");

var proper_p = parseInt(person);
if (isNaN(proper_p)) {alert("that's not a number, ")}
else {
if (proper_p <= 14) {alert("too young")}
else if (proper_p > 14 && proper_p < 65) {alert("regular price haha")}
else if (proper_p == 50) {alert("special discount, grandpa")}
}
// var forEach;
// name.forEach(function(element){
// 	console.log(name[element])
// });