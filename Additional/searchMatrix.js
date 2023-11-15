/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
let binarySearch = (arr, left, right, target) => {
  if (right >= left) {
    let middle = left + Math.floor((right - left) / 2);
    if (arr[middle] == target) {
      return true;
    }
    if (arr[middle] > target) {
      return binarySearch(arr, left, middle - 1, target);
    }
    return binarySearch(arr, middle + 1, right, target);
  }

  return false;
};

var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    if (binarySearch(matrix[i], 0, matrix[i].length - 1, target)) {
      return true;
    }
  }

  return false;
};

console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 3, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5
  )
);
