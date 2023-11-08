function maxProfit(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let profit = arr[j] - arr[i];
      if (profit > max) {
        max = profit;
      }
    }
  }

  return max;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 2, 1]));
