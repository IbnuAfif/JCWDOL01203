/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    let part = "";
    // console.log(i, needle.length);
    for (let j = i; j < i + needle.length; j++) {
      part += haystack[j];
    }

    // console.log("part => ", part);
    if (needle == part) {
      return i;
    }
  }

  return -1;
};

// console.log(strStr("hello", "ll"));
// console.log(strStr("leetcode", "leeto"));
// console.log(strStr("sadbutsad", "sad"));

/**
 * @param {number[]} height
 * @return {number}
 */
console.log("  ");
var maxArea = function (height) {
  let result = 0;
  for (let i = 0; i < height.length - 1; i++) {
    let area = 0;
    for (let j = i + 1; j < height.length - 1; j++) {
      //let part = j - 1 > 0 ? j - 1 : 1;
      if (height[i] <= height[j]) {
        area = height[i] * j;
        console.log("if ", ` ${height[j]} * ${j}`, area);
      } else if (height[i] > height[j]) {
        area = height[j] * j;
        console.log("else if ", area);
      }
      result = area > result ? area : result;
    }
  }

  return result;
};

console.log(maxArea([1, 1]));
console.log(maxArea([1, 2]));
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 2, 4, 3]));
