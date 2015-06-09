//Problem 2. People of age
function person(fname, lname, age, gender) {
	var personNew = {firstName : fname,
		lastName: lname,
		ageNew : age,
		genderNew : gender	
		};
		return personNew;
}
var arr = [
	person('Ivan', 'Ivanov', 42, 'male'),
	person('Silviq', 'Ivanova', 25, 'female')
];
console.log(arr.filter(function (person) {
	return person.ageNew >= 18;
}));