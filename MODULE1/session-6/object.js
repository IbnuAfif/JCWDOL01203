// let cube = {
//   rusuk: 12,
//   sisi: 6,
//   titikSudut: 8,
//   "pakai spasi": true,
// };

// console.log(cube);

// console.log(cube["sisi"]);
// console.log(cube.sisi);

// cube.hello = "hello iam cube";

// console.log(cube);

// cube.hello = "hello world";

// cube.delete = "delete";
// console.log(cube);

// delete cube.delete;

// console.log(cube);

// console.log(cube["pakai spasi"]);

// console.log(cube["sisi"]);

let user = {
  firstName: "david",
  lastName: "kurniawan",
  //   greet: () => {
  //     console.log(" this => ", this);
  //     console.log("Hello!");
  //   },
  //   greet: function () {
  //     console.log(" this => ", this);
  //     console.log("Hello!");
  //   },
  set fullName(name) {
    let splittedValue = name.split(" ");
    this.firstName = splittedValue[0];
    this.lastName = splittedValue[1];
  },
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  greet() {
    console.log(" this => ", this);
    console.log("Hello!");
  },
  //   myKey: "mikey",
};

user.age = 17;
user.hobbies = ["rocket leagues", "watching animes"];
// user[2000] = "two thousands";
user.address = {
  city: "Tangerang",
  province: "banten",
  sub: {
    longAddress: "jl. tipar ",
  },
};

console.log(user);
user.greet();

// console.log(user.address.city);
// console.log(user.address.sub.longAddress);
// console.log(user.hobbies[0]);

user.hobbies[0] = "Genshin Impact";

// console.log(user.hobbies);

console.log(user.address?.city); // user.address ? user.address.city : user.address
// c++ => c = c + 1

console.log(Object.keys(user));

for (let myKey in user) {
  console.log(myKey, ":", user[myKey]);
}

user.fullName = "Chopper";

console.log(user.fullName);

// let a = 12
// let b = 13
// let c = 14

const [a, b, c] = [12, 13, 14];

console.log(a, b, c);

const { age, hobbies, firstName } = user;

// const age = user.age;
// const hobbies = user.hobbies;
// const firstName = user.firstName;

console.log(firstName, age, hobbies);

const numbers = [1, 2, 3];
const numbers2 = [4, 5, 6];

// const result = numbers.concat(numbers2);
const result = [...numbers, ...numbers2];

console.log(result);

const objCar = {
  color: "black",
  merk: "bmw",
  run() {
    console.log(this.merk, " run on speed 100km");
  },
  runThis: () => {
    console.log("this => ", this);
    console.log(this.merk, " run on speed 100km");
  },
};

const objPC = {
  vga: "msi RTX 3060",
  ram: 32,
};

const objThings = {
  ...objCar,
  pc: objPC,
};

console.log(objThings);
objCar.run();
objCar.runThis();

console.log(this);

//const myPc = objPC;
const myPc = Object.create(objPC);

myPc.ram = 64;
myPc.vga = "msi RTX 4090";

console.log(objPC.ram);

// Object.freeze(myPc);

// myPc.name = "super komputer";

console.log(Object.entries(myPc));
console.log(myPc);

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

Object.assign(target, source);

console.log(target);
console.log(source);
