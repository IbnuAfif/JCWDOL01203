function minMaxAvg(arr) {
  let highest = arr[0]; // 23
  let lowest = arr[0]; // 4
  let total = arr[0]; // 12

  for (let i = 1; i < arr.length; i++) {
    total = total + arr[i];
    // 4 > 23
    if (arr[i] > highest) {
      highest = arr[i]; // highest = 23
    }
    // 4 < 5
    if (arr[i] < lowest) {
      lowest = arr[i]; // lowest = 4
    }
  }

  return [highest, lowest, total / arr.length];
}

console.log(minMaxAvg([12, 5, 23, 18, 4, 45, 32]));

function arrayToString(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      result = result + " and " + arr[i];
    } else {
      result = result + arr[i] + ",";
    }
  }
  return result;
}

// console.log(arrayToString(["apple", "banana", "cherry", "date"]));
// console.log(
//   arrayToString([
//     "apple",
//     "banana",
//     "cherry",
//     "date",
//     "lala",
//     "ope ope",
//     "gomu gomu",
//     "mera mera",
//   ])
// );

function mySplit(str) {
  let word = "";
  let result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " " || i === str.length - 1) {
      if (str[i] !== " ") {
        word += str[i];
      }
      result.push(word);
      word = "";
    } else {
      word += str[i];
    }
  }

  return result;
}

// console.log(mySplit("Hello World"));
// console.log(mySplit("Za World Over Heaven"));

function calculateArrayItem(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return "invalid array length";
  }

  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] + arr2[i]);
  }

  return result;
}

// console.log(calculateArrayItem([1, 2, 3], [3, 2, 1]));
// console.log(calculateArrayItem([1, 2, 3], [3, 2, 1, 5]));

function ArrAddNewItem(arr, num) {
  let flag = false;

  for (let i = 0; i <= arr.length; i++) {
    if (num === arr[i]) {
      flag = true;
      break;
    }
  }

  if (flag === false) {
    arr.push(num);
  }

  return arr;
}

// console.log(ArrAddNewItem([1, 2, 3, 4, 1, 2, 3, 4], 4));
// console.log(ArrAddNewItem([1, 2, 3, 4], 8));

function findDuplicateArray(arr) {
  let result = [];
  let duplicate = null; // 3
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // 3  !=  3
      if (
        arr[i] == arr[j] &&
        i != j &&
        duplicate !== arr[i] &&
        i < arr.length - 1
      ) {
        duplicate = arr[i]; // 3
        result.push(duplicate);
      }
    }
  }

  return result; // [2,3,5]
}

console.log(findDuplicateArray([1, 2, 2, 2, 3, 3, 4, 5, 5]));
console.log(findDuplicateArray([2, 3, 2, 1, 4, 5, 6, 4, 1]));

/*
jadi duplicate perlu dimasukan ke dalam array flag juga 
nanti diceknya bukan dengan 1 variable duplicate tapi cek apakah arr[i] berada dalam array flag tersebut
*/
/*
function contain(n,n1){    for(let i=0;i<n.length;i++){        if(n[i]===n1) return true;    }    return false;}
*/
