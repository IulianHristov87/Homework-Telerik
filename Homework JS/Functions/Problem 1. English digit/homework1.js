//Problem 1. English digit
var input = prompt('Please enter a number'),
	number1 = +input;
	
function f1(number1) {
	if( number1 == ''){
		console.log('Please enter a number');
	}
	else{
		switch (number1 % 10) {
		case 0: return 'zero'; break;
		case 1: return 'one'; break;
		case 2: return 'two'; break;
		case 3: return 'three'; break;
		case 4: return 'four'; break;
		case 5: return 'five'; break;
		case 6: return 'six'; break;
		case 7: return 'seven'; break;
		case 8: return 'eight'; break;
		case 9: return 'nine'; break;
		case -1: return 'one'; break;
		case -2: return 'two'; break;
		case -3: return 'three'; break;
		case -4: return 'four'; break;
		case -5: return 'five'; break;
		case -6: return 'six'; break;
		case -7: return 'seven'; break;
		case -8: return 'eight'; break;
		case -9: return 'nine'; break;
		default: return 'Please enter a number';
	}
	}
	
}
var print = console.log(f1(number1));