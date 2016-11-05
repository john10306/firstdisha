var dayz = ['Mon','Tues','Wednes','Thurs','Fri','Satur','Sun', 'Sun', 'Mon'];

for (var i = 0; i < dayz.length; i++) {
	for (var j = 0; j < dayz.length; j++) {
		if (dayz[i] == dayz[j] && i!=j){
		alert("there is a match");
		};

	}
};