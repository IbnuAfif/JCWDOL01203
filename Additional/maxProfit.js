/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let buy = prices[0];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > buy) {
      if (profit < prices[i] - buy) {
        profit = prices[i] - buy;
      }
    } else {
      buy = prices[i];
    }
  }

  return profit;
};

console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]));
