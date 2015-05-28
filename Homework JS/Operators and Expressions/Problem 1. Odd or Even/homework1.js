//Problem 1. Odd or Even
var x = prompt('Enter a number');
function f() {
	var y = parseInt(x);
	if(y % 2 === 0){
		console.log(y+' '+ 'is Odd');
	}
	else{
		console.log(y+' '+ 'is Even');
	}
};
var z = f();

