// function sayHello(name, age) {
//   console.log("hello, ", name);
//   console.log("welcome to javascript");
//   console.log("your age is ", age);
// }

function square(s) {
  let area = s * s;
  if (area > 10) {
    return area;
  } else {
    return false;
  }
}

let myFunction = function (x = 3, y = 10) {
  var myName = "Dimas";
  console.log("hello ", myName);
  console.log("anonimous function", x * y);
};

// sayHello("Dimas", 27);
// sayHello("Galih", 29);

console.log(square(10));

let myArea = square(10);
console.log(myArea);

myFunction(5, 6);

// console.log(myName);
console.log("dimas", "aries", "Luffy", 10, true, [1, 2, 3]);

function myFunc(...manyMoreArgs) {
  //   console.log(a);
  //   console.log(b);
  console.log(manyMoreArgs);
}

myFunc(10, 20, 30, 40, 50, 60, 70, 80);

function getMessage(firstname) {
  function sayHello() {
    return "Hello " + firstname + ".";
  }

  function welcomeMessage() {
    return "Welcome to Purwadhika!.";
  }

  return sayHello() + " " + welcomeMessage();
}

const message = getMessage("david");
console.log(message);

function greeting(name) {
  const defaultMessage = "Hello";

  return function () {
    return defaultMessage + name;
  };
}

const greetingDavid = greeting("David");
console.log(greetingDavid());

function foo() {
  console.log("foo");
  return function bar() {
    console.log("bar");
  };
}

foo();
foo()();

function multiplier(factor, number) {
  return number * factor;
}

console.log(multiplier(5, 3));
console.log(multiplier(10, 3));

// function parent    3
function multiplier2(factor) {
  console.log("function parent multiplier2");
  // function children
  // 2
  return function (number) {
    // 2   *   4
    console.log(number * factor);
    return function (number2) {
      console.log(number * number2 * factor);
    };

    //return number * factor;
  };
}

multiplier2(3);
multiplier2(4)(5);
multiplier2(4)(5)(3);

function myRecursive() {
  myRecursive();
}
// 1
function countDown(fromNumber) {
  console.log(fromNumber); // 1
  // 1 - 1
  let nextNumber = fromNumber - 1;

  // 0 > 0
  if (nextNumber > 0) {
    // 1
    countDown(nextNumber);
  }
}

countDown(3);

// const squareArrow = (s) => s * s;
const squareArrow = (s) => {
  console.log("arrow => ", this);
  return s * s;
};
console.log(squareArrow(4));

// function mySquare() {
//   console.log(this);
// }

// mySquare();
console.log(isNaN(12));
console.log(isNaN(12 * undefined));

console.log(parseInt("123"));
console.log("123");

function isNaN() {
  console.log("my isNaN");
}

isNaN();
