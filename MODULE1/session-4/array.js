let arr = [];
let arr2 = [1, 2, "dimas", true];

console.log(arr);
console.log(arr2);

let scores = [10, 20, 30, 40];
let people = ["Aries", "Dimas", "Yudhistira"];

console.log(scores[1]);

scores[1] = 90;

console.log(scores[1]);
// console.table(scores);

scores.push(50);

console.log(scores);

console.log(scores.length);

console.log(scores.toString());

let resultMultiply = scores.map(function (item) {
  return item * 2;
});

console.log(resultMultiply);

console.log(scores);
let findResult = scores.find((number) => number > 20);

console.log(findResult);

for (let score of scores) {
  console.log(score);
}

let arr3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(arr3[0]);
console.log(arr3[0][1]);
console.log(arr3[1][2]);

arr3[1][2] = 9;

console.table(arr3);
console.log(arr3[2][0]);
