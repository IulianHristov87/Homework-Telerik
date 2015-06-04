//Problem 6. Most frequent number
var arr = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3, 1, 1, 1];

arr.sort();
function sequence(arr){
	var count = 1,
		max = 1,
		maxArr,
		i;

	for(i = 0, len = arr.length; i < len; i += 1){
		if (arr[i] === arr[i+1]){
			count += 1;
			if (count > max) {
				max = count;
				maxArr = arr[i];
			}
		} else {
			count = 1;
		}
	}
	return maxArr + (' (' + max + ' times)');
}
console.log(sequence(arr));