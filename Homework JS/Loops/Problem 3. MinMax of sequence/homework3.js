//Problem 3. Min/Max of sequence
var numbers = Math.floor((Math.random() * 10) + 1);
var arr = Array(numbers);
var maxNumber = Number.MIN_VALUE;
var minNumber = Number.MAX_VALUE;
var i;
for (i = 0; i < numbers; i++) {
    arr[i] = Math.floor((Math.random() * 100) + 1);
    console.log(arr[i]);
}

for (i = 0; i < numbers; i++) {

    if (maxNumber < arr[i]) {
        maxNumber = arr[i];
    }
    else if (minNumber > arr[i]) {
        minNumber = arr[i];
    }
}
console.log('Max number: ' + maxNumber);
console.log('Min number: ' + minNumber);
