
for (var checker = 2; checker <= 100; checker++) {
var countz = 0;
	
	for (var each_num = 2; each_num <= checker; each_num++){
		if (checker % each_num == 0)
		countz++;
	
		if (countz >1)
		break;
	
		if (checker==each_num)
		console.log(checker);
	}		
};
