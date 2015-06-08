//Problem 2. Remove elements
var arr = [1, 9, 1, 7, 3, 4, 1, 11, 120, 2, 91, '1'];
var deleteMe = function (arr, me) {
    var i = arr.length;
    while (i--) {  
        if (arr[i] === me) {
             arr.splice(i, 1); 
             } 
             };
};
deleteMe(arr, 1);
console.log(arr);