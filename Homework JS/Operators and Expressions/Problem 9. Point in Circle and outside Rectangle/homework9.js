//Problem 9. Point in Circle and outside Rectangle
var x = prompt('Enter x');
var y = prompt('Enter y');
var Xc = 1;
var Yc = 1;
var radius = 3;
var XL = -1;
var YL = 1;
var width = 6;
var height = 2;
var XR = XL + width;        
var YR = YL - height;
var xInt = parseFloat(x);
var yInt = parseFloat(y);
function inCircleOutRec(){
	if((xInt - Xc * xInt -Xc)+(yInt-Yc*yInt-Yc)< radius*radius && xInt < XL || xInt < XR && yInt > YL || yInt < YR){
		console.log('Point is within circle K and out of rectangle R');
	}
	else{
		console.log('Not correct');
	}
};
var inOut = inCircleOutRec();