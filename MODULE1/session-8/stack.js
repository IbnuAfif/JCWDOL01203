const data = [1, 2, 3, 4, 5];
data.push(6);
console.log(data);
data.pop();
data.pop();
console.log(data);

class Stack {
  #maxSize;
  #container = [];

  constructor(maxSize = 10) {
    this.#maxSize = maxSize;
  }

  #isFull() {
    return this.#container.length >= this.#maxSize;
  }

  #isEmpty() {
    return this.#container.length === 0;
  }

  push(element) {
    if (this.#isFull()) {
      console.log("Stack Overflow !");
      return;
    }
    this.#container.push(element);
  }

  pop() {
    if (this.#isEmpty()) {
      console.log("Stack Underflow !");
      return;
    }
    this.#container.pop();
  }

  getElements() {
    return this.#container;
  }
}

let stack1 = new Stack(2);

stack1.push(1);
stack1.push(2);
// stack1.push(3);
// stack1.push(4);
// stack1.push(5);
// stack1.push(6);
// stack1.push(7);
// stack1.push(8);
// stack1.push(9);
// stack1.push(10);

console.log(stack1.getElements());

stack1.push(11);

console.log(stack1.getElements());

stack1.pop();
stack1.pop();

console.log(stack1.getElements());

stack1.pop();

console.log(stack1.getElements());
