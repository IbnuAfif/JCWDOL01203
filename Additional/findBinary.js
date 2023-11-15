/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let findIndex = binarySearch(nums, 0, nums.length - 1, target);

  return findIndex;
};

function binarySearch(nums, start, length, target) {
  let pointer = Math.ceil((length - start) / 2);
  console.log("pointer => ", pointer, length, start);

  if (length > pointer) {
    if (nums[pointer] === target) {
      return pointer;
    }
    if (nums[pointer] > target) {
      return binarySearch(nums, pointer, length - pointer, target);
    } else {
      return binarySearch(nums, start, pointer, target);
    }
  } else {
    return -1;
  }
}

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 5));
