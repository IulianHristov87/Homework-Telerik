//Problem 1. Numbers
var a = prompt('Enter a max number');
var aInt = +a;
var i;

function f1() {
	if (!aInt || a=='') {
		console.log('Enter a number');
	} else if (aInt) {
		for (i = 1; i < aInt; i++) {
			console.log(i);
		}
	}
}
var f = f1();

//Variant 2
var i = 1;
var b = prompt('Please enter a max number');
var bInt = +b;
if(!bInt || a==''){
	console.log('Please enter number');
}
while (i<=b){
	console.log(i);
	i = i+1;
}