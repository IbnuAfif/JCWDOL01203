function findSingle(arr) {
  for (let i = 0; i < arr.length; i++) {
    // 1 , i = 2
    let flag = false;
    for (let j = 0; j < arr.length; j++) {
      // 2  , j = 2
      if (i != j && arr[i] == arr[j]) {
        flag = true;
        break;
      }
    }
    //  true == false
    if (flag == false) {
      return arr[i];
    }
  }
  //

  return -1;
}

console.log(findSingle([2, 2, 1]));
