function excel(chars) {
  const alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let total = 0;
  for (let i = 0; i < chars.length; i++) {
    let findChar = alphabet.split("").findIndex((item) => {
      return item == chars[i];
    });
    total += Math.pow(26, chars.length - i - 1) * findChar;
  }

  return total;
}
console.log(excel("AA"));
console.log(excel("BA"));
console.log(excel("FD"));
console.log(excel("ZZ"));
console.log(excel("AAA"));
console.log(excel("ABC"));
console.log(excel("BCD"));
console.log(excel("ZZZ"));
console.log(excel("ZZZZ"));

// [1,2,3,5,2,3,7] => 2

function findIndex(fn) {
  fn();
}
