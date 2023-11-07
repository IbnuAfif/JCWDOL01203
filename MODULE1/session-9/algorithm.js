let input = "ana";
let newString = "";
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < alphabet.length; j++) {
    if (input[i].toLocaleUpperCase() == alphabet[j]) {
      newString += input[i];
      break;
    }
  }
}

let reverseWord = "";
for (let k = newString.length - 1; k >= 0; k--) {
  reverseWord += newString[k];
}

if (reverseWord == newString) {
  console.log(true);
} else {
  console.log(false);
}
