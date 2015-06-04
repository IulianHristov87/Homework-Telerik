//Problem 2. Lexicographically comparison
var str1 = prompt('Please enter first string'),
	str2 = prompt('Please enter a second string'),
	str1len,
	str2len,
	i,
	final,
	bigArr = Math.max(str1.length, str2.length);
if (str1 !== '' || str2 !== '') {
	for (i = 0; i < bigArr; i++) {
		if (str1[i] > str2[i]) {
			console.log(str1[i] + '>' + str2[i]);
		} if (str1[i] < str2[i]) {
			console.log(str1[i] + '<' + str2[i]);
		} if (str1[i] === str2[i]) {
			console.log(str1[i] + '=' + str2[i]);
		}
	}
}

else {
	console.log('Please enter strings');
}

console.log(bigArr);
