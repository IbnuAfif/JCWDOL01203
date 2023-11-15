var titleToNumber = function (columnTitle) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let result = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    let findA = alphabet.split("").findIndex((item) => item == columnTitle[i]);
    result += Math.pow(26, columnTitle.length - 1 - i) * (findA + 1);
  }

  return result;
};

console.log(titleToNumber("A"));
console.log(titleToNumber("Z"));
console.log(titleToNumber("ZY"));
console.log(titleToNumber("ZZ"));

module.exports = titleToNumber;
