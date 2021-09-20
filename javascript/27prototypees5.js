function human(name,city){
    this.name = name;
    this.city = city
}

function robot(name,age){
    this.name = name;
    this.age = 10,
    this.legs = 2
}

var john = new human('John','Amsterdam');
john
human {name: 'John', city: 'Amsterdam'}

var pepper = new robot('Pepper')
pepper
robot {name: 'Pepper', age: 10, legs: 2}

human.prototype = new robot();
robot {name: undefined, age: 10, legs: 2}

var Michal = new human('Michal','Venice')
Michal
human {name: 'Michal', city: 'Venice'}

Michal.age
10
Michal.legs
2

John.age
VM651:1 Uncaught ReferenceError: John is not defined