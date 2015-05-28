//Problem 8. Trapezoid area
var a = prompt('Please enter a');
var b = prompt('Please enter b');
var h = prompt('Please enter h');
function trapArea(){
	var aInt= parseFloat(a);
	var bInt = parseFloat(b);
	var hInt = parseFloat(h);
	var trapezArea =( aInt + bInt )/ 2 * hInt;
	 console.log('Trazpezoid area is: ' + trapezArea);
};
var trap = trapArea();