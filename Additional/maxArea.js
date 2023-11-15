const data = require("./data");

var maxArea = function (height) {
  let result = 0;
  for (let i = 0; i < height.length - 1; i++) {
    let area = 0;
    let maxRowArea = 0;
    for (let j = height.length - 1; j > i; j--) {
      let maxHeight = height[i] > height[j] ? height[j] : height[i];
      let distance = j - i;
      area = distance * maxHeight;

      if (maxRowArea < area) {
        maxRowArea = area;
      }
    }

    result = result > maxRowArea ? result : maxRowArea;
  }

  return result;
};

console.log(maxArea([1, 2, 3, 4, 5, 25, 24, 3, 4]));
console.log(maxArea([2, 3, 4, 5, 18, 17, 6]));
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 2]));
console.log(maxArea([1, 1]));

console.log(maxArea(data));
