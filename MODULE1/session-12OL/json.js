const myData = require("./data.js");
const myJson = require("./data.json");
const excel = require("../../Additional/excel");
// const package1 = require("./package.json");

const data = {
  name: "dimas",
  age: 23,
  hobbies: ["rocket league", "leetcode"],
};

let jsonString = JSON.stringify(data);
// mengubah object menjadi JSON string

console.log(jsonString);

let obj = JSON.parse(jsonString);
// mengubah JSON string menjadi object

console.log(obj);

console.log("mydata => ", myData.arr);
console.log("mydata => ", myData.foo());
console.log("mydata => ", myData.test);

console.log(excel("ARIES"));
console.log(excel("AA"));
console.log(excel("BB"));

// console.log(package1);
