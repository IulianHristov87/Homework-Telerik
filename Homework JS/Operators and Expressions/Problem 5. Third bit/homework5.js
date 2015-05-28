//Problem 5. Third bit
var a = prompt('Please enter a number');
var aInt = parseInt(a);
var p = 3;
var mask = 1 << p;
var result = aInt & mask;
var bit = result >> p;
console.log('Third bit of number ' + a.toString(2) + ' is: ' + bit);