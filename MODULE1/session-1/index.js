console.log("Hello JCWDOL01203"); // ini untuk nampilin tulisan
console.log("My Name, is Aries Dimas Yudhistira");

let message = "i love you";
let x = 3000;
console.log(message, x, "test");
console.log(x);

// var name = "dimas";
// var name = "roger"; // re-declare ( di declare ulang )
// console.log(name);

// let name = "dimas";
// name = "roger"; // re-assign ( di assign ulang )
// console.log(name);

const name = "Dimas";
console.log(name);

var firstname = "Dimas";
var Firstname = "dimas";

console.log(firstname, Firstname);

console.log(true, false);
console.log(null);
console.log(undefined);

console.log([1, 2, "rangkaian", true]);
console.log({
  foo: "bar",
});

let myName = "jhonny";
let myNewName = myName;
myNewName = "Dimas";

// console.log(myNewName);
console.log(myNewName, myName);

let person = {
  name: "Jhonny",
  age: 26,
};

let newPerson = person;

newPerson.name = "Dimas";

console.log(person);

console.log(myName.split("o"));
console.log(myName.split(""));

console.log(`My Name, is ${myName} iam 37 year. 
from morioh`);

let number = "231";
console.log(number, Number(number), typeof Number(number));

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(5));

let myCurrentDate = new Date();
console.log(myCurrentDate);

let myDate = new Date("2013-11-10");
console.log(myDate);

console.log(myDate.getFullYear());

let a = 10;
let b = 34;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log(b % a); // 34 % 10 =>34 / 10 = 3 ===> 4
console.log(b ** 2, b * b);

let hello = "hello";
let world = "world";
let helloworld = hello + " " + world;

console.log(helloworld);

console.log("1" + 2, typeof ("1" + 2));
console.log(1 + "2", typeof (1 + "2"));
console.log(1 + 1 + "2", typeof (1 + 1 + "2"));
console.log("1" + 1 + 2, typeof ("1" + 1 + 2));

let n = 2;
n = n + 5;
n += 5;
n += 4;
n /= 4;
console.log(n); // 4

n = n + 1; // 5
n--; // n = n -1 // 5
console.log(n); // 4
n++; // 4
console.log(n); // 5

console.log(n--); // 4?
console.log(n);
console.log(++n);

console.log(3 > 5);
console.log(15 < 90);
