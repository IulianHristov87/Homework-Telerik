var info ={
	name: 'Ivan',
	lastName: 'Ivanov',
	age: 25,
	car: 'Yes',
	hometown: 'Kaspichan'
};

function property(obj, prop){
    return obj.hasOwnProperty(prop);
}

console.log('Has name: ' + property(info, 'name'));
console.log('Name is: '+ info.name);