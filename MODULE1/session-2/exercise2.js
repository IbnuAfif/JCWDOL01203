let celcius = 60;
let fahrenheit = celcius * (9 / 5) + 32;
console.log(fahrenheit, " F");

let number = 14;
if (number % 2) {
  console.log("odd"); // ganjil
} else {
  console.log("even");
}

console.log(number % 2 ? "odd" : "even");

// 5 = 2,3,4
let prime = "is a prime number";
for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    prime = "is not a prime number";
    break;
  }
}

console.log(number, " ", prime);

let n = 5;
let result = 1; // 6
// 3; 3 <= 5
for (let i = 1; i <= n; i++) {
  //   console.log(i);
  result = result * i; // 3 + 3
}
console.log(result);

//0+1+1+2+3+5+8+13+21+34+55+89+
let deret = 16;
let num1 = 0;
let num2 = 1;
let result2 = 0;

console.log(" deret ke 1 = ", num2);
for (let i = 2; i <= deret; i++) {
  result2 = num1 + num2;
  num1 = num2;
  num2 = result2;

  console.log(" deret ke ", i, " = ", num2);
}
