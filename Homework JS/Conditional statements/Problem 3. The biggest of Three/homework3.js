//Problem 3. The biggest of Three
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
	if (aInt > bInt && aInt > cInt) {
		console.log(aInt);
	}
	else {
		if (cInt > aInt && cInt > bInt) {
			console.log(cInt);
		}
		else if (bInt > aInt && bInt > cInt) {
			console.log(bInt);
		}
		else if(aInt === bInt && aInt === cInt) {
			console.log('numbers are equal');
		}
	}
}
