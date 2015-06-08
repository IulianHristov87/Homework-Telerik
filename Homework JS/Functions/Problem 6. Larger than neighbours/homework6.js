//Problem 6. Larger than neighbours
function isBig(arr, index){
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
console.log(isBig([4, 8, 5], 1));