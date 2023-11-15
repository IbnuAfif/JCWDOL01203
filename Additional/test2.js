/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  let result = [];
  let temp = [];
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    counter++;
    temp.push(arr[i]);
    if (counter === size || i === arr.length - 1) {
      result.push(temp);
      temp = [];
      counter = 0;
    }
  }

  return result;
};

console.log(chunk([1, 2, 3, 4, 5], 1));
console.log(chunk([1, 9, 6, 3, 2], 3));
console.log(chunk([8, 5, 3, 2, 6], 6));
console.log(chunk([], 1));
