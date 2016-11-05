

document.getElementById("butto").onclick=function(){
	var a1 = parseInt(document.getElementById("inpoo1").value);
	if (!isNaN(a1)){
		var a2 = a1.toString();
		var a3 = "";
		for (var i = 0; i < a2.length; i++) {
			switch (a2[i]){
				case ('1'):
				a3 += "one ";
				break;
				case ('2'):
				a3 += "two ";
				break;
				case ('3'):
				a3 += "three ";
				break;
				case ('4'):
				a3 += "four ";
				break;
				case ('5'):
				a3 += "five ";
				break;
				case ('6'):
				a3 += "six ";
				break;
				case ('7'):
				a3 += "seven ";
				break;
				case ('8'):
				a3 += "eight ";
				break;
				case ('9'):
				a3 += "nine ";
				break;

			}

		}



		alert(a3);
	}
	else
		{alert("enter a number")}
};


