let alphabetCapital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let alphabet = "abcdefghijklmnopqrstuvwxyz";

let str = "qUiCk 11 bRown 12 fOx";

// console.log(str.length);

// ab = index ke 1
// abcde = index ke 4
// abcd = index ke 3

let result = "";

//

for (let i = 0; i < str.length; i++) {
  let flag = false;
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
  if (flag === false) {
    result += str[i];
  }
}

console.log(result);
