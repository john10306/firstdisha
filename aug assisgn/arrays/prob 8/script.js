var dayz = ['Mon','Tues','Wednes','Thurs','Fri','Satur','Sun'];
	var newDayz = [];
for (var i = 0; i < dayz.length; i++) {
	newDayz[i] = dayz[i] + 'day';
	};

for (var i = 0; i < 7; i++) {
		newDayz.push(newDayz[i]);
	};

var jday = prompt('enter a day');
for (var i = 0; i < newDayz.length; i++) {

	if (i ==6 && jday == newDayz[6]|| jday == newDayz[3] && i==3){
		for (var j=1; j < 7; j++) {
			console.log(newDayz[i+j])
		}
		break;
	}
	 if(newDayz[i] == jday){
		for (var j =1; j < 8; j++) {
			console.log(newDayz[i+j])
		};
		break;
	}
};
