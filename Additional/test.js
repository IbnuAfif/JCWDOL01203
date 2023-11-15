/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var isAnagram = function (word1, word2) {
  console.log(word1, word2);
  let angm1 = word1.split("").sort().join("");

  let angm2 = word2.split("").sort().join("");

  // console.log(angm1, " === ", angm2);

  return angm1 == angm2;
};

var groupAnagrams = function (strs) {
  let result = [[strs[0]]];
  for (let i = 1; i < strs.length; i++) {
    console.log(strs[i]);
    let find = false;
    let temp = [];
    for (let j = 0; j < result.length; j++) {
      if (isAnagram(strs[i], result[j][0])) {
        find = true;
        result[j].push(strs[i]);
        break;
      }
    }
    if (!find) {
      temp.push(strs[i]);
      result.push(temp);
    }
  }

  return result;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
