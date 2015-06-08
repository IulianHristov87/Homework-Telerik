//Problem 6. Larger than neighbours

function isBigger(arr, index){
    var isBigger = true,
		ind;
    for (ind = index - 1; ind <= index + 1; ind += 2) {
        if (ind >= 0 && ind < arr.length) {
            if (arr[ind] >= arr[index]) {
                isBigger = false;
                break;
            }
        }
    }

    return isBigger;
}
function getIndexOfFirstBigger (arr) {
    for (var ind in arr) {
        if (isBigger(arr, ind)) {
			return ind;
		}
    }
	
    return -1;
}
console.log(getIndexOfFirstBigger ([4, 8, 5], 1));