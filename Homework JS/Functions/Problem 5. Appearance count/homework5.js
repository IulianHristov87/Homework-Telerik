//Problem 5. Appearance count

function f1(arr, num) {
	var count= 0,
	i;
	for (i = 0; i < arr.length; i++) {
		if (arr[i] === num) {
			count++;
		}
	}

	return count;
}

console.log(f1([1, 3, 23, 1, 4, 5, 7, 4, 3, 1, 4, 2, 22, 34, 100, 15], 1));