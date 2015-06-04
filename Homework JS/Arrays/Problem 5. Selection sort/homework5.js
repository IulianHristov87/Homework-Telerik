//Problem 5. Selection sort
var arr = [100, 500, 207, 7, 14 ,15 ,18, 1000, 50],
	arr2,
	min = arr[0],
	i,
	j,
	temp;

function sort(arr){
	for (i = 0,len = arr.length; i < len; i ++){
		for (j = i + 1; j < len; j += 1){
			if (arr[i] > arr[j]) {
					temp = arr[j];
					arr[j] = arr[i];
					arr[i] = temp;
				}
		}
	}
}
sort(arr);
console.log(arr);