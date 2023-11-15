/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // solving this problem
  /*  
    check nums ke 0 apakah sama dengan target ? kalau ya return index 0
    check nums ke 1 apakah sama dengan target ? kalau iya return index 1
    check nums ke 2 apakah sama dengan target ? kalau ya return index 2
    check nums ke 3 apakah sama dengan target ? kalau iya return index 3
    */
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }

  return -1;
  /* 
  if(nums[0] === target) {
        console.log(0)
        return false
    } 
    if(nums[1] === target) {
        console.log(1)
        return false
    }
    if(nums[2] === target) {
        console.log(2)
        return false
    }
    if(nums[3] === target) {
        console.log(3)
        return false
    }
    */
};

console.log(twoSum([2, 7, 11, 15], 11));
