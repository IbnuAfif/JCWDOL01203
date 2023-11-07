const list = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  },
};

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  #size;
  #head;
  constructor() {
    this.#head = null;
    this.#size = 0;
  }

  add(element) {
    let node = new Node(element);

    let current;

    if (this.#head == null) {
      this.#head = node;
    } else {
      current = this.#head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.#size += 1;
  }

  printList() {
    console.log(JSON.stringify(this.#head), this.#size);
    let curr = this.#head;
    while (curr) {
      console.log(curr.element);
      curr = curr.next;
    }
  }

  insertAt(element, index) {
    console.log("size => ", this.#size, "index => ", index);
    if (index < 0 || index > this.#size) {
      return console.log("please enter a valid index");
    } else {
      const node = new Node(element);
      let curr = this.#head;

      if (index == 0) {
        node.next = this.#head;
        this.#head = node;
      } else {
        curr = this.#head;
        let prev;
        let it = 0;

        while (it < index) {
          console.log("it ==> ", it);
          it++;
        }

        for (let i = 0; i < index; i++) {
          prev = curr;
          curr = curr.next;
        }

        prev.next = node;
        node.next = curr;
      }
    }

    this.#size += 1;
  }

  removeAt(index) {
    if (index < 0 || index > this.#size) {
      return console.log("please enter a valid index");
    } else {
      let curr = this.#head;
      let prev = curr;

      if (index == 0) {
        this.#head = curr.next;
      } else {
        for (let i = 0; i < index; i++) {
          prev = curr;
          curr = curr.next;
        }

        prev.next = curr.next;
      }

      this.#size -= 1;

      return curr.element;
    }
  }

  removeElement(element) {
    let current = this.#head;
    let prev = null;

    while (current != null) {
      if (current.element === element) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }

        this.#size -= 1;

        return current.element;
      }

      prev = current;
      current = current.next;
    }

    return null;
  }

  indexOf(element) {
    let count = 0;
    let current = this.#head;

    console.log("current => ", current);

    while (current != null) {
      console.log(current.element, " === ", element);
      if (current.element === element) {
        return count;
      }

      count += 1;
      current = current.next;
    }

    return -1;
  }

  getSize() {
    return this.#size;
  }
}

const linkedList1 = new LinkedList();

linkedList1.add("A");
linkedList1.add("B");
linkedList1.add("D");
linkedList1.add("E");

linkedList1.insertAt("C", 2);

linkedList1.printList();

linkedList1.removeAt(1);

linkedList1.printList();

linkedList1.removeElement("D");

linkedList1.printList();

console.log(linkedList1.getSize());

console.log(linkedList1.indexOf("E"));
