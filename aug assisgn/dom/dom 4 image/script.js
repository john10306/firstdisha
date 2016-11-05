var photz = ["img/newdisha.png", "img/1d.jpg","img/2d.jpg","img/3d.jpg" ,"img/4d.jpg","img/5d.jpg", "img/6d.jpg",
			"img/7d.jpg", "img/8d.jpg","img/9d.jpg"];
var descriptz = ["disha", "Shanghai", "New York City", "London", "Seoul", "Los Angeles", 
"Singapore", "Dubai", "Shenzen, China", "Tokyo", ]
var countz = 0;

	var _id = function _id(id){
		return document['getElementById'](id);
	}

document.getElementById("butto").onclick=function(){

	a1 = _id('disha');
	a2 = _id ('descrip');
	a3 = _id ('descrip2');


	if(countz!= photz.length-1){
	countz++;
	a1.src=photz[countz];
	a2.innerHTML=descriptz[countz];
}
	else {
		countz=0;
	a1.src=photz[countz];
	a2.innerHTML=descriptz[countz];
	}
		a3.innerHTML = a2.innerHTML;
}

document.getElementById("butto2").onclick=function(){
	a1 = _id('disha');
	a2 = _id('descrip');
	a3 = _id ('descrip2');
	if(countz!= 0){
	countz--;
	a1.src=photz[countz];
a2.innerHTML=descriptz[countz];}
	else {
		countz=photz.length-1;
	a1.src=photz[countz];
	a2.innerHTML=descriptz[countz];
	}
		a3.innerHTML = a2.innerHTML;
}

document.getElementById("disha").onclick=function(){

	disha =document.getElementById("disha");
if (disha.style.width == "500px"){
	disha.style= "";

	console.log("test")
}


else{
	disha.style= "width:500px;height:500px";

}
}