let name = "dimas";
function sayHello() {
  console.log(name);
}

sayHello();

/*

a. undefined
b. dimas
c. name
d. sayHello

*/

function sayHello(num) {
  let a = num;
  return function () {
    return a++;
  };
}

const sh = sayHello(10);
console.log(sh());
console.log(sh());
console.log(sh());

class Eagle {
  constructor() {
    this.name;
  }
}

function Person(name) {
  this.name = name;
}

const dimas = new Person("Dimas");

console.log(dimas);

console.log(typeof Eagle);
console.log(typeof dimas);

let age = 10;

console.log(" postfix => ", age++); // postfix plus 1
console.log(age);

console.log(" prefix => ", ++age); // prefix plus 1
console.log(age);

const people1 = ["aries", "Dimas", "Yudhistira"];

people1[1] = "Rian";

console.log(people1);

const person1 = "Aries Dimas";

person1[1] = "n";

console.log(person1);

Array.prototype.myFunction = () => {
  console.log(this);
};

let arr = [1, 2, 3];

arr.myFunction();
