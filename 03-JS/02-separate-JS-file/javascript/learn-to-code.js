function aSimpleFunction(a, b) {
    return a+b;
}

var name = "Ehsan";
var age = 25;
var message = "Hello, my name is " + name + ", and I am " + age + " years old.";

console.log(message);

var age = 25;
var ehsanAge = "25";

if (age == ehsanAge) {
    console.log(age + " and " + ehsanAge + ", they are equal!")
}

if (age === ehsanAge) {
    console.log(age + " and " + ehsanAge + ", they are same!");
} else {
    console.log(age + " and " + ehsanAge + ", they are not same! because their types differ!");
}

var developers = ["James", "Steve", "Ehsan"];
console.log(developers);

var programmers = [];
programmers.push(developers[0]);
programmers.push(developers[1]);
programmers.push(developers[2]);
console.log(programmers);

var index = programmers.indexOf("John");

if (index == -1) {
    console.log("No John in programmers array!");
}

// splice function returns the removed element
var newProgrammers = [];

programmers.splice(index, 1);
newProgrammers = programmers;

console.log(newProgrammers);

var newCoder = [];
programmers.splice(index, 1);
console.log(programmers);

var someValue = 15;
for (var i = 0; i < someValue; i++) {
    console.log(i);
}

for (var j = 0; j < developers.length; j++) {
    console.log(developers[j]);
}

console.log(aSimpleFunction(12, 12));

var transaction = function(price) {
    if (price <= 100) {
        console.log("Small Transaction!");
    } else {
        console.log("Large Transaction!");
    }
    
    return 0;
}


console.log(transaction(23));



// objects in JS
var student = {
    name: "Ehsan",
    age: "25",
    major: "computer architecture",
    greeting: function() {
        return "Hello, my name is " + this.name;
    }
};

console.log(student);
console.log(student.name + ", " + student.age + ", " + student.major);
console.log(student["name"] + ", " + student["age"] + ", " + student["major"]);


// creating a new object
var student1 = new Object();
student1.firstName = "Ehsan";
student1.age = 25;
student1.field = "computer engineering";
student1.major = "computer architecture";
student1.greeting = function() {
    return "Hello, my name is " + this.firstName;
}

console.log(student1);
console.log(student1.greeting());
console.log(student.greeting());


// reusable objects

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.greeting = function() {
        return "Bye!";
    }
  }
}

const person = new Person("John Doe", 23);

console.log(person.name); // expected output: "John Doe"
console.log(person);


persons = [];
persons.push(new Person("Ehsan", 25));
persons.push(new Person("James", 21));
persons.push(new Person("Steve", 29));

console.log(persons);

for(var key in persons) {
    console.log(persons[key]);
}