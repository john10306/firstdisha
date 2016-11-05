var eln = "I like this product\; I hate this product\; This product is worth buying\; I don\'t agree with the above user";

var printz = "";
for (var i = 0; i < eln.length; i++) {
	if(eln[i]== "o"){
		printz += eln[i];
	}

};
console.log("there are" + printz.length + "\'o\'s");