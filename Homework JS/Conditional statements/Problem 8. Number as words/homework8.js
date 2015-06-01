//Problem 8. Number as words
var a = prompt('Please enter a number between 0 and 999');
var aInt = +a;
var hundreds = Math.floor(aInt / 100) % 10,
	tens = Math.floor(aInt / 10) % 10,
	digits = aInt % 10,
	tenTwenty = 10 + digits,
	result;

if (aInt < 0 || aInt > 999 || isNaN(aInt)) {
	('1.Number is out of range or 2.Is not a number');
}
else {

	switch (digits) {
		case 0: digits = 'zero'; break;
		case 1: digits = 'one'; break;
		case 2: digits = 'two'; break;
		case 3: digits = 'three'; break;
		case 4: digits = 'four'; break;
		case 5: digits = 'five'; break;
		case 6: digits = 'six'; break;
		case 7: digits = 'seven'; break;
		case 8: digits = 'eight'; break;
		case 9: digits = 'nine'; break;
	}
	switch (tenTwenty) {
		case 10: tenTwenty = 'ten'; break;
		case 11: tenTwenty = 'eleven'; break;
		case 12: tenTwenty = 'twelve'; break;
		case 13: tenTwenty = 'Thirteen'; break;
		case 14: tenTwenty = 'fourteen'; break;
		case 15: tenTwenty = 'fifteen'; break;
		case 16: tenTwenty = 'sixteen'; break;
		case 17: tenTwenty = 'seventeen'; break;
		case 18: tenTwenty = 'eighteen'; break;
		case 19: tenTwenty = 'nineteen'; break;
	}
	switch (tens) {
		case 2: tens = 'twenty'; break;
		case 3: tens = 'thirty'; break;
		case 4: tens = 'forty'; break;
		case 5: tens = 'fifty'; break;
		case 6: tens = 'sixty'; break;
		case 7: tens = 'seventy'; break;
		case 8: tens = 'eighty'; break;
		case 9: tens = 'ninety'; break;
	}
	switch (hundreds) {
		case 1: hundreds = 'one hundred'; break;
		case 2: hundreds = 'two hundred'; break;
		case 3: hundreds = 'three hundred'; break;
		case 4: hundreds = 'four hundred'; break;
		case 5: hundreds = 'five hundred'; break;
		case 6: hundreds = 'six hundred'; break;
		case 7: hundreds = 'seven hundred'; break;
		case 8: hundreds = 'eight hundred'; break;
		case 9: hundreds = 'nine hundred'; break;
	}
	if (aInt < 10) {
		result = digits;
	} else if (aInt >= 10 && aInt < 20) {
		result = tenTwenty;
	} else if (aInt >= 20 && aInt < 100) {
		if (aInt % 10 == 0) {
			result = tens;
		}
		else {
			result = tens + ' ' + digits;
		}
	} else if (aInt >= 100 && aInt <= 999) {
		if ((aInt / 10) % 10 == 0) {
			result = hundreds;
		} else {
			result = hundreds + ' and ' + tens + ' ' + digits;
		}
	}

}
