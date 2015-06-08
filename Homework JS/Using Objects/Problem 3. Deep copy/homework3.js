//Problem 3. Deep copy
function clone(obj){
    if (typeof obj !== 'object') {
        return obj;
    }

    var cloned = {};
    for (var prop in obj) {
        cloned[prop] = clone(obj[prop]);
    }

    return cloned;
}
console.log(clone(25));
console.log(clone({name: 'Ivan', age: 55}));