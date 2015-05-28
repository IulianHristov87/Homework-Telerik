//Problem 7. Is prime
var x = prompt('Enter positive number less or equal to 100');
var xInt = parseInt(x);


if (xInt > 100 || xInt < 1) {
	console.log('Number must be biggest than 0 and equal or less than 100');
}
else {
	
	function isPrime() {
		if (xInt > 1 && xInt % 2 !== 0 && xInt % 3 !== 0 && xInt % 5 !== 0 && xInt % 7 !== 0 || xInt === 2 || xInt === 3 || xInt === 5 || xInt === 7) {
			console.log(xInt + ' ' + 'is prime integer');
		}
		else {
			console.log(xInt + ' ' + "isn't prime integer");
		}
	};
}

var Prime = isPrime();

