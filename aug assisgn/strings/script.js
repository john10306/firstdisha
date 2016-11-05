var eln = "Javascript notation %^&* notes that structure
 rules and not context for nothing";

var count = (eln.match(/not/g)).length;
console.log(count);

var newArrayz = [];
var tempVar ="";
var j = 0;
for (var i = 0; i < eln.length; i++) {


	tempVar += eln[i];

	if ( eln[i] == "n" && eln[i+1] == "o" && eln[i+2] == "t" || i == eln.length-1){
		while (j> 0){
				tempVar = tempVar.slice(2);
				break;
				}

		if(i!==eln.length-1){
		tempVar = tempVar.slice(0, length-1);}
		
		newArrayz[j] = tempVar;
		
		j++;	
		tempVar="";
	}
};
console.log(newArrayz);
