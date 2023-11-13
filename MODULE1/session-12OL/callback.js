function foo() {
  console.log("foo");
}

function bar(cb) {
  console.log("bar");
  cb();
}

bar(foo);

let result;

function greet(str) {
  result = str;
}

function hello() {
  greet("hello");
}

function arigatou() {
  greet("arigatou");
}

arigatou();
console.log(result);
hello();
console.log(result);

function calculator(a, b) {
  return a + b;
}

function calculator2(a, b) {
  let result = a + b;
  displayer(result);
}

function calculatorCallback(a, b, callback) {
  if (typeof callback == "function") {
    callback(a + b);
  } else {
    console.log(" callback is not a function ...");
  }
}

function displayer(something) {
  console.log(something);
}

let result2 = calculator(5, 5);
displayer(result2);

calculator2(6, 7);

console.log("task 1");
calculatorCallback(4, 5, displayer);
console.log("task 3");
