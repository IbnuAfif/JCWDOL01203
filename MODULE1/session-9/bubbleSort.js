function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

console.log(bubbleSort([4, 3, 6, 1, 7, 10, 30]));
