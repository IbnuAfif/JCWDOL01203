function stairFibonacci(stair) {
  let prev = 0;
  let current = 1;
  let result = 0;
  for (let i = 1; i <= stair; i++) {
    result = prev + current;
    prev = current;
    current = result;
  }

  return result;
}

console.log(stairFibonacci(1));
console.log(stairFibonacci(2));
console.log(stairFibonacci(3));
console.log(stairFibonacci(4));
console.log(stairFibonacci(5));
console.log(stairFibonacci(6));
console.log(stairFibonacci(7));
