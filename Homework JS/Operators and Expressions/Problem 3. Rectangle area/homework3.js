//Problem 3. Rectangle area
var a = prompt('Enter width in cm');
var b = prompt('Enter height in cm');
function area(){
	var c = parseFloat(a);
	var d = parseFloat(b);
	var recarea = c * d;
	console.log('Rectangle area is:' + ' ' +  recarea+ ' ' +'square'+ ' ' +'cm');
}
var answer = area();