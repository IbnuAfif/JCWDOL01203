function findDifference(obj1, obj2) {
  let longobj =
    Object.keys(obj1).length > Object.keys(obj2).length ? obj1 : obj2;
  for (key in longobj) {
    if (obj1[key] != obj2[key]) {
      return false;
    }
  }
  return true;
}

let obj1 = { a: 1, b: 2 };
let obj2 = { a: 1, c: 3, b: 2 };

console.log(findDifference(obj1, obj2));

function intesectionObj(obj1, obj2) {
  let result = {};
  for (key in obj1) {
    if (obj1[key] == obj2[key]) {
      result[key] = obj1[key];
    }
  }

  return result;
}

let obj3 = { a: 10, b: 2, c: 4, d: 4, e: 9, f: 11 };
let obj4 = { e: 9, a: 10, c: 3, b: 5, f: 10 };

console.log(intesectionObj(obj3, obj4));

function mergeArrayObject(arr1, arr2) {
  let result = [arr1[0]];
  //console.log(result);

  //   for (let i = 0; i < result.length; i++) {
  //     for (let j = 0; j < arr1.length; j++) {
  //       if (result[i].name !== arr1[j].name) {
  //         result.push(arr1[j]);
  //       }
  //     }

  //     for (let k = 0; k < arr2.length; k++) {
  //       if (result[i].name !== arr2[k].name) {
  //         result.push(arr1[k]);
  //       }
  //     }
  //   }

  return result;
}

const arr1 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
];

const arr2 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 3", email: "student3@mail.com" },
];

console.log(mergeArrayObject(arr1, arr2));

function flipObject(arrObj) {
  let newArr = [];
  for (item of arrObj) {
    let newObj = {};
    for (key in item) {
      newObj[item[key]] = key;
    }
    newArr.push(newObj);
  }

  return newArr;
}

console.log(flipObject([{ name: "david", age: 20 }]));

function factorial(num) {
  if (num > 1) {
    // 5 * 4 * 3 * 2 * 1
    return num * factorial(num - 1);
  } else {
    return 1;
  }
}

console.log(factorial(5));

console.log(factorial(6));

class Player {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.power = 10;
  }

  hit(power) {
    console.log(this.name, " get hit ", power, " !");
    this.health -= power;
  }

  useItem(item) {
    this.health += item.health;
    this.power += item.power;
  }

  showStatus() {
    console.log(this);
  }
}

const player1 = new Player("Sogeking");
const player2 = new Player("Ussop");

class ShootingGame {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem() {
    return {
      health: Math.round(Math.random() * 10),
      power: Math.round(Math.random() * 10),
    };
  }

  start() {
    console.log("players : ");
    this.player1.showStatus();
    this.player2.showStatus();
    console.log("===== START ==== ");

    while (player1.health > 0 && player2.health > 0) {
      let randomItem = this.getRandomItem();
      player1.health += randomItem.health;
      player1.power += randomItem.power;

      let randomItem2 = this.getRandomItem();
      player2.health += randomItem2.health;
      player2.power += randomItem2.power;

      this.player1.showStatus();
      this.player2.showStatus();

      player2.hit(player1.power);
      player1.hit(player2.power);

      player1.showStatus();
      player2.showStatus();
      console.log("=============== end round ====================");
    }

    console.log("====== MATCH DONE =======");
    if (player1.health > 0) {
      console.log(player1.name, "Win !!");
    } else {
      console.log(player2.name, "Win !");
    }
  }
}

const arena1 = new ShootingGame(player1, player2);

arena1.start();
