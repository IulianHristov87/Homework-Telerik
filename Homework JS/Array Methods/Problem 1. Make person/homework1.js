//Problem 1. Make person
function Person(fname, lname, age, gender) {
	var personNew = {firstName : fname,
		lastName: lname,
		ageNew : age,
		genderNew : gender	
		};
		return personNew;
}
function maleOrFemale(genderNew){
	if(genderNew === 'male'){
		return 'true';
	} else{
		return 'false';
	}
}

console.log(Person('Ivan', 'Ivanov', 42, 'male')+maleOrFemale('male'));
console.log(Person('Silviq', 'Ivanova', 25, 'female')+maleOrFemale('female'));