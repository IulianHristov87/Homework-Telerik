//Problem 2. Reverse number
var input = prompt('Enter a number to be reversed');
var number = +input;

function reverseNumber(number) {
	
	if (number == '' ) {
		return 'Please enter a number';
	}
	else {
		var isNegative = number < 0,
		number = number.toString().replace('-', '').split(''),
		reversed = [];
		
		if (isNegative) {
			reversed.push('-');
		}
		
		Array.prototype.push.apply(reversed, number.reverse());
	
	return +(reversed.join(''));

		}

		
	}


var a = console.log(reverseNumber(number));
