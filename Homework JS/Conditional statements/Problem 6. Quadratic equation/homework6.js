//Problem 6. Quadratic equation
var a = prompt('Enter a(number before x2)');
var b = prompt('Enter b(number before x)');
var c = prompt('Enter c(only number)');
var aInt = +a;
var bInt = +b;
var cInt = +c;
if (!aInt || !bInt || !cInt) {
	console.log('Please enter a numbers');
}
else {
	var d = bInt * bInt - 4 * aInt * cInt;
	if (d < 0) {
		console.log("There isn't real  roots");
	}
	else if (d === 0) {
		var x = -(bInt / (2 * aInt));
		console.log('The real root is:' + ' ' + x);
	}
	else {
		var x1 = (-bInt + Math.sqrt(d)) / (2 * aInt);
		var x2 = (-bInt - Math.sqrt(d)) / (2 * aInt);
		console.log('First real root is:' + x1);
		console.log('Second real root is:' + x2);
	}
}