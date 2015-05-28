//Problem 2. Divisible by 7 and 5
var x = prompt('Enter a number');
function f2() {
	var y = parseInt(x);
	if((y % 7 === 0) && (y % 5===0)){
		console.log(true, y + ' ' + 'is divisable by 7 and 5');
	}
	else{
		console.log(false, y + ' ' + 'is not divisable by 7 and 5');
	}
};
var z = f2();