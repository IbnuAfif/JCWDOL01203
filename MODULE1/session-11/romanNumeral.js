function romanNumeral(s) {
  let numerals = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    // total += numerals[s[i]];
    if (numerals[s[i]] < numerals[s[i + 1]]) {
      total += numerals[s[i] + s[i + 1]];
      i += 1;
    } else {
      total += numerals[s[i]];
    }
  }

  return total;
}

// console.log(romanNumeral("III"));
// console.log(romanNumeral("LVIII"));
console.log(romanNumeral("MCMXCIV"));
