//Problem 6. Point in Circle
var x = prompt('Enter x');
var y = prompt('Enter y');
function isWithin(){
	var xInt= parseFloat(x);
	var yInt= parseFloat(y);
	if((xInt * xInt + yInt * yInt) <= 25){
		console.log(true);
	}
	else{
		console.log(false);
	}
};
var within = isWithin();