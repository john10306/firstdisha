var dayz = ['Mon','Tues','Wednes','Thurs','Fri','Satur'];
	var newDayz = [];
for (var i = 0; i < dayz.length; i++) {
	newDayz[i] = dayz[i] + 'day';
	};
 // Problem 6
// for (var i = 0; i < dayz.length; i++) {
// 	console.log(dayz[i])
// };

var jday = prompt('enter a day');
for (var i = 0; i < newDayz.length; i++) {
	if(jday == 'Sunday'){
		console.log('last day to live');
		break;
	}
	if(jday == newDayz[5]){
		console.log('Sunday');
		break;}
	else if(newDayz[i] == jday){
		for (i += 1; i < newDayz.length; i++) {
			console.log(newDayz[i])
		};
		
	}
};
