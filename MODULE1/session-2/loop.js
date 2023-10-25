// Logika Perulangan
/*
    awalan 
    akhiran
    step
*/

//              false
// i = 6        6 <= 5
for (var i = 1; i <= 5; i++) {
  if (i == 3) continue;
  console.log(i); // ini dieksekusi karena kondisi ke dua true
}
console.log("diluar loop i = ", i);

/*
    DECLARE i EQUALS to 1
    
    FOR i LESS THAN 5
        PRINT i
        i EQUALS i PLUS 1

    PRINT "diluar loop i = "+i

*/

let j = 1;

// 4 <= 3
while (j <= 3) {
  console.log("while ke ", j);
  j = j + 1; // j++
}

console.log(j);

let k = 1;

do {
  console.log(" do while ", k); // 3
  k++;
  // k += 1
  // k++
} while (k <= 3); // 4 <= 3
