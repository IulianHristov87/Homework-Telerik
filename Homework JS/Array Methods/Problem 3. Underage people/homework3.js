//Problem 3. Underage people
//Problem 2. People of age
function person(fname, lname, age, gender) {
	var personNew = {firstName : fname,
		lastName: lname,
		ageNew : age,
		genderNew : gender	
		};
		return personNew;
}
function printUnderagePeople(arr) {
	return arr.filter(function (person) {
		return person.ageNew <= 18;
	})
}

var arr = [
	Person('Ivan', 'Ivanov', 42, 'male'),
	Person('Silviq', 'Ivanova', 25, 'female'),
	Person('Ivan', 'Stoqnov', 12, 'male'),
	Person('Silviq', 'Georgieva', 15, 'female'),
	Person('Petyr', 'Ivanov', 18, 'male'),
	Person('Kameliq', 'Ivanova', 19, 'female')
];


console.log(printUnderagePeople(arr));