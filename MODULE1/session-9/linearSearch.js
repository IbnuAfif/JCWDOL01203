function linearSearch(arr, needle) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == needle) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch([4, 3, 6, 1, 7, 10, 30], 60));
