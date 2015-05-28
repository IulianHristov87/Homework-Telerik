//Problem 4. Third digit
var x = prompt('Enter a number');
function f4(){
	
	var rev = x.split("").reverse();
	
	if ( rev[2] === '7'){
		console.log(true + ' ' +'third digit form right to left on'+' '+ x +' ' +'is 7');
	}
	else{
		console.log(false + ' ' +'The third digit from right to left on'+' ' + x + ' '+ "isn't 7");
	}
}
var digit = f4();