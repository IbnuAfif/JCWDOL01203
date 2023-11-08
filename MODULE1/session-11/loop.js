// let num = 1; // nilai awal
// // angka ini akan meningkat sebesar 2
// // sebanyak 5 kali // akhiran

// num += 2; // baris code yang dieksekusi secara berulang
// num += 2;
// num += 2;
// num += 2;
// num += 2;

// console.log(num);

function myloop(num, times, increase) {
  //      1       6 <= 5  5+1=6
  for (i = 1; i <= times; i++) {
    // jika i <= 5 masih true, bagian ini akan dieksekusi.
    // jika sudah false, maka perulangan akan berakhir
    num += increase;
  }
  console.log(" hasil akhir => ", num);
}

let num = 1;

myloop(num, 5, 2);

// sebuah angka ditingkatkan sebanyak 4
// selama 10 kali

let num1 = 8;
myloop(num1, 10, 4);

// sebuah angka ditingkatkan sebanyak 3
// banyak 7 kali

let num2 = 5;
myloop(num2, 7, 3);
