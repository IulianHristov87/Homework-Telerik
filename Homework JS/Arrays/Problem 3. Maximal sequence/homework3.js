//Problem 3: Maximal sequence

var arr = [2, 1, 1, 2, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1];

function sequence(arr) {
	var count = 1,
		len,
		max = 1,
		maxArr,
		i,
		maxSeq = [];

	for (i = 0, len = arr.length; i < len; i++) {
		if (arr[i] === arr[i + 1]) {
			count += 1;
			if (count > max) {
				max = count;
				maxArr = arr[i];
			}
		} else {
			count = 1;
		}
	}
	for (i = 0, len = max; i < len; i++) {
		maxSeq[i] = maxArr;
	}
	return maxSeq;
}
console.log(sequence(arr));