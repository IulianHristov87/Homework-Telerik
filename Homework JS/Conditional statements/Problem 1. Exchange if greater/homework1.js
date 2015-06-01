//Problem 1. Exchange if greater
var a = prompt('Please enter number a');
var b = prompt('Please enter number b');
var aInt = parseFloat(a);
var bInt= parseFloat(b);
if(!aInt || !bInt){
	console.log('Please enter a number');
}
else{
		if (a > b) {
			var change = a;
			a=b;
			b = change;
			console.log(a + ' ' + b);
		}
		else if (b > a) {
			var first = b;
			b = a;
			a = first;
			console.log(b + ' ' + a);
		}
		else {
			console.log('Numbers are equal');
		}
}



