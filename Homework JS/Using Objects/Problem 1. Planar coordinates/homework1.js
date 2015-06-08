//Problem 1. Planar coordinates
var point1 = {
	x: 1,
	y: 5
};
var point2 = {
	x: 2,
	y: 8
};
var line1 = {
	p1: [
		{
			x: 1,
			y: 1
		}
	],
	p2: [
		{
			x: -1,
			y: 1
		}
	]
};
var line2 = {
	p1: [
		{
			x: 0,
			y: -1
		}
	],
	p2: [
		{
			x: 1,
			y: 1
		}
	]
};
var line3 = {
	p1: [
		{
			x: -1,
			y: 1
		}
	],
	p2: [
		{
			x: 0,
			y: -1
		}
	]
};
var sumPointsX = console.log('distance is:  x : ' + (point2.x - point1.x) + ' and  Y : ' + (point2.y - point1.y));

if (line2.p2.x === line1.p1.x && line3.p1.x === line1.p2.x && line2.p2.y === line1.p1.y && line3.p1.y === line1.p2.y) {
	console.log('This three line make a triangle');
}