/*Problem 7. The biggest of five numbers
Variant 1*/
var a = prompt('Enter a');
var b = prompt('Enter b');
var c = prompt('Enter c');
var d = prompt('Enter d');
var e = prompt('Enter e');
var aInt = +a;
var bInt = +b;
var cInt = +c;
var dInt = +d;
var eInt = +e;
if (!aInt || !bInt || !cInt || !dInt || !eInt) {
	console.log('Please enter a numbers');
}
else {
	if (aInt > bInt && aInt > cInt && aInt > dInt && aInt > eInt) {
		console.log('Biggest is: ' + aInt);
	}
	else if (bInt > aInt && bInt > cInt && bInt > dInt && bInt > eInt) {
		console.log('Biggest is: ' + bInt);
	}
	else if (cInt > aInt && cInt > bInt && cInt > dInt && cInt > eInt) {
		console.log('Biggest is: ' + cInt);
	}
	else if (dInt > aInt && dInt > cInt && dInt > bInt && dInt > eInt) {
		console.log('Biggest is: ' + dInt);
	}
	else if (eInt > aInt && eInt > bInt && eInt > cInt && eInt > dInt) {
		console.log('Biggest is: ' + eInt);
	}
	else {
		console.log('Biggest is: ' + aInt);
	}
}
//Variant 2
var a = prompt('Enter a');
var b = prompt('Enter b');
var c = prompt('Enter c');
var d = prompt('Enter d');
var e = prompt('Enter e');
var aInt = +a;
var bInt = +b;
var cInt = +c;
var dInt = +d;
var eInt = +e;
if (!aInt || !bInt || !cInt || !dInt || !eInt) {
	console.log('Please enter a numbers');
}
else{
	var x = Math.max(aInt, bInt, cInt, dInt, eInt);
	console.log('Biggest is: '+x);
}