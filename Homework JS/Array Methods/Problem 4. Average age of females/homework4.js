//Problem 4. Average age of females


var arr = [
	Person('Ivan', 'Ivanov', 42, 'male'),
	Person('Silviq', 'Ivanova', 25, 'female'),
	Person('Ivan', 'Stoqnov', 12, 'male'),
	Person('Silviq', 'Georgieva', 15, 'female'),
	Person('Petyr', 'Ivanov', 18, 'male'),
	Person('Kameliq', 'Ivanova', 19, 'female')
];

function printAverageAgeOfFemales(arr) {
	arr = arr.filter(function (Person) {
		return Person.gender == 'female';
	});

	var sum= 0;
	arr.forEach(function (Person) {
		sum += Person.age;
	});
	var sumAverange= sum / 2;

	return (sumAverange);
}
console.log(printAverageAgeOfFemales(arr));