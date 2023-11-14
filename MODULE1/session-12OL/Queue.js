class Queue {
  constructor() {
    this.list = [];
  }

  add(order) {
    this.list.push(order);
  }

  print() {
    console.log(this.list);
  }

  async run() {
    let i = 0;
    while (i < this.list.length) {
      let random = Math.floor(Math.random() * 11);
      //console.log("random => ", random);
      let result = await new Promise((resolve, reject) => {
        console.log(`${this.list[i]} on process ... `);
        setTimeout(() => {
          resolve(
            `Queue ${i + 1} ${this.list[i]} done in random ${random} seconds`
          );
        }, random * 1000);
      });
      console.log(result);
      i++;
    }
  }
}

module.exports = Queue;
