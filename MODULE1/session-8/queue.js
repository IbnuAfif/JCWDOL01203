// const data = [1, 2, 3, 4, 5];
// data.push(6);
// console.log(data);
// data.shift();
// data.shift();
// console.log(data);

class Queue {
  #container = [];

  enqueue(element) {
    this.#container.push(element);
  }

  dequeue() {
    return this.#container.shift();
  }

  getElement() {
    return this.#container;
  }
}

let q1 = new Queue();

q1.enqueue(1);
q1.enqueue(2);

console.log(q1.getElement());

q1.dequeue();
q1.dequeue();

console.log(q1.getElement());

q1.dequeue();

console.log(q1.getElement());
