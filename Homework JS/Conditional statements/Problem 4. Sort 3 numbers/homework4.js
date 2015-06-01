//Problem 4. Sort 3 numbers
var a = prompt('Enter a first number');
var b = prompt('Enter a second number');
var c = prompt('Enter a third number');
var aInt = +a;
var bInt = +b;
var cInt = +c;
if (!aInt || !bInt || !cInt) {
	console.log('Please enter a numbers');
}
else{
	if(aInt>bInt && bInt>cInt){
		console.log(aInt+' '+bInt+' '+cInt);
	}
	else if(aInt>bInt&&bInt<cInt&&cInt>aInt){
		console.log(cInt+' '+aInt+' '+bInt);
	}
	else if(bInt>aInt&&aInt>cInt){
		console.log(bInt+' '+aInt+' '+cInt);
	}
	else if(bInt>aInt&&cInt>aInt&&bInt>cInt){
		console.log(bInt+' '+cInt+' '+aInt);
	}
	else if(aInt>bInt&&cInt>bInt&&aInt>cInt){
		console.log(aInt+' '+cInt+' '+bInt);
	}
	else if(cInt>aInt&& bInt<aInt && cInt>bInt){
		console.log(cInt+' '+aInt+' '+bInt);
	}
	else if(cInt>aInt&&cInt>bInt&&bInt>aInt){
		console.log(cInt+' '+bInt+' '+aInt);
	}
	else if(aInt===bInt&&cInt>aInt){
		console.log(cInt+' '+aInt+' '+bInt);
	}
	else if(aInt===cInt&&bInt>aInt){
		console.log(bInt+' '+aInt+' '+cInt);
	}
	else if(bInt===cInt&&aInt>bInt){
		console.log(aInt+' '+bInt+' '+cInt);
	}
	else if(aInt===bInt && aInt===cInt){
		console.log(aInt+' '+bInt+' '+cInt);
	}
}