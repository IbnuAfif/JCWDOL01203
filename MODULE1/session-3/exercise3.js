let alphabetCapital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let alphabet = "abcdefghijklmnopqrstuvwxyz";

let str = "qUiCk 11 bR$own 12 fOx";

let result = "";

// looping pertama
for (let i = 0; i < str.length; i++) {
  let flag = false; // flagging , atau penanda
  for (let j = 0; j < alphabetCapital.length; j++) {
    if (str[i] === alphabetCapital[j]) {
      flag = true;
      result += alphabet[j];
      break;
    } else if (str[i] === alphabet[j]) {
      flag = true;
      result += alphabetCapital[j];
      break;
    }
  }
  // artinya kalau karakter itu tidak ada di alphabet bsar dan alphabet kecil
  if (flag === false) {
    console.log(" karakter ", str[i]);
    result += str[i];
  }
}

console.log(result);

let num1 = 10.6;
let num2 = 10.7;

if (num1 > num2) {
  console.log(num1);
} else if (num2 > num1) {
  console.log(num2);
} else {
  console.log("angka sama besar");
}

let num3 = 10;
let num4 = 2;
let num5 = 1;

if (num3 < num4 && num3 < num5) {
  if (num4 < num5) {
    console.log(num3, num4, num5);
  } else if (num5 < num4) {
    console.log(num3, num5, num4);
  }
} else if (num4 < num3 && num4 < num5) {
  if (num3 < num5) {
    console.log(num4, num3, num5);
  } else if (num5 < num3) {
    console.log(num4, num5, num3);
  }
} else if (num5 < num3 && num5 < num4) {
  if (num3 < num4) {
    console.log(num5, num3, num4);
  } else if (num4 < num3) {
    console.log(num5, num4, num3);
  }
}

let myVar = undefined;
if (typeof myVar == "number") {
  console.log(2);
} else if (typeof myVar == "string") {
  console.log(1);
} else {
  console.log(3);
}

let myString = "an apple a day keep the doctor away"; // 35 - 1 = 34
// console.log(myString[0]);
// myString[0] = "b";
// console.log(myString[0]);
let result2 = "";
for (let i = 0; i < myString.length; i++) {
  if (myString[i] == "a") {
    result2 = result2 + "*";
  } else {
    result2 = result2 + myString[i];
  }
}

console.log(result2);
