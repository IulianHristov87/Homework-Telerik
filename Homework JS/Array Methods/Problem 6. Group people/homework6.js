//Problem 6. Group people
function Person(fname, lname, age, gender) {
	var personNew = {firstName : fname,
		lastName: lname,
		ageNew : age,
		genderNew : gender	
		};
		return personNew;
}
function compareFirstName(a, b) {
	if (a.firstName < b.firstName) {
		return -1;
	}

	if (a.firstName > b.firstName) {
		return 1;
	}

	return 0;
}

function printGroupedPeople(arr) {
	var result = {};
	arr = arr.sort(compareFirstName);
	arr.forEach(function (element) {
		result[element.firstName.charAt(0).toLowerCase()] = {firstname: element.firstName};
	});

	return result;
}

var arr = [
	 Person('Ivan', 'Ivanov', 42, 'male'),
 Person('Silviq', 'Ivanova', 25, 'female'),
	Person('Ivan', 'Stoqnov', 12, 'male'),
	Person('Silviq', 'Georgieva', 15, 'female'),
	Person('Petyr', 'Ivanov', 18, 'male'),
	Person('Kameliq', 'Ivanova', 19, 'female')
];

console.log(printGroupedPeople(arr));