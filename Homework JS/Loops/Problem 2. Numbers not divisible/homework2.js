//Problem 2. Numbers not divisible
var a = prompt('Enter a max number');
var aInt= +a;
var i;
function f2(){
	if(!aInt){
	console.log('Please enter a number');
}
else if(aInt >= 1){
	for(i=1; i<aInt; i++){
		if(i%3!=0&&i%7!=0){
				console.log(i);
		}
	}
}
}
var f=f2();
