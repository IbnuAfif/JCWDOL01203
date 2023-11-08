function majority(arr) {
  let countNumber = 0; // 2
  let number = -1;

  //
  for (let i = 0; i < arr.length; i++) {
    // arr[i=1] --> 2
    let tempCounter = 1; //

    for (let j = 0; j < arr.length; j++) {
      // arr[j = 2] --> 3
      //  0 != 2      0=>3 == 2=>3
      if (i != j && arr[i] == arr[j]) {
        tempCounter += 1;
      }
    }
    // 2 > 0
    if (tempCounter > countNumber) {
      countNumber = tempCounter; // 2
      number = arr[i];
    }
  }

  return countNumber > arr.length / 2 ? number : -1;
}

console.log(majority([3, 2, 3]));
console.log(majority([2, 2, 1, 1, 1, 2, 2]));
