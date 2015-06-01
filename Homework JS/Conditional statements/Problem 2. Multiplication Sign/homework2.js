//Problem 2. Multiplication Sign
var a = prompt('Enter a first number');
var b = prompt('Enter a second number');
var c = prompt('Enter a third number');
var aInt = +a;
var bInt = +b;
var cInt = +c;
if (!aInt || !bInt || !cInt) {
	console.log('Please enter a numbers');
}
else {
	if (aInt < 0 && bInt < 0 && cInt < 0 || aInt > 0 && bInt > 0 && cInt < 0 || aInt > 0 && bInt < 0 && cInt > 0 || aInt < 0 && bInt > 0 && cInt > 0) {
		console.log('-');
	}
	else {
		console.log('+');
	}
}
