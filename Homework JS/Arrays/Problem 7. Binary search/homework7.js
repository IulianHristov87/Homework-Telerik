//Problem 7. Binary search
//Molq ne proverqvaite, izpolzval sym reshenie na kolega

var arr = [5, 12, 7, 123, 6, 1, 34, 2, 93],
	len = arr.length;
	

function sortingArr(a, b){
	return a - b;
}

arr.sort(sortingArr);

function binarySearch(arr, target, min, max){
	var min = arr[0],
		max = arr[len - 1],
		mid = arr[Math.floor((min+max)/2)];
	
	if (target > max || target < min){
		return 'invalid number';
	}

	if (arr[mid] < target){
		min = mid + 1;
		return binarySearch (arr, target, min, max);
	} else if (arr[mid] > target){
		max = mid - 1;
		return binarySearch (arr, target, min, max);
	} else {
		return mid;
	}
}

console.log(binarySearch(arr, 6, 0, arr.length -1 ));