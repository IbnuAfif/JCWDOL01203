class User {
  name;
  #email = "user@gmail.com";
  constructor(name, age, email) {
    console.log("constructor executed");
    this.name = name;
    this.age = age;
    this.#email = email;
    // console.log(" email private ", this.#email);
  }
  greting() {
    console.log("hello world");
  }
}

const MyUser = class {
  greting() {
    console.log("the world over heaven");
  }
};

// console.log(typeof "dimas");
// console.log(typeof User);
// console.log(typeof MyUser);

const dimas = new User("Aries Dimas", 27, "aries@purwadhika.com");
// const dio = new MyUser();

dimas.greting();
// dio.greting();

console.log(dimas);

dimas.age = 30;

console.log(dimas.name);

class DB {
  foo = "bar";
  static #connection = ""; // static property

  // STATIC METHOD
  static #initializeConnection() {
    const randomNum = Math.ceil(Math.random() * 100);
    DB.#connection = `New Database connection ${randomNum}`;
  }

  // STATIC METHOD
  static getConnection() {
    console.log("this foo => ", this.foo);
    if (!DB.#connection) {
      DB.#initializeConnection();
    }

    return DB.#connection;
  }

  hello() {
    console.log(DB.#connection);
    console.log(DB.getConnection());
  }
}

// const objCon = new DB();

// console.log(DB.getConnection());

// console.log(DB.getConnection());

// objCon.hello();

DB.getConnection();

console.log(DB.foo);

class Employee {
  constructor() {
    this.employeeName;
  }

  get employeName() {
    return this.employeName;
  }

  set employeName(newName) {
    if (newName != "") {
      this.employeeName = newName;
    } else {
      this.employeeName = "unknown";
    }
  }
}

const rian = new Employee();

rian.employeName = "Rian D";

console.log(rian);

class Product {
  constructor(productName, price) {
    this.productName = productName;
    this.price = price;
    console.log("constructor product");
  }
}

class Book extends Product {
  constructor(productName, price) {
    super(productName, price);
    console.log("constructor book");
    this.author = "Dimas";
  }

  getAuthor() {
    return this.author;
  }

  setAuthor(authorName) {
    this.author = authorName;
  }
}

const myProduct = new Product();
console.log(myProduct);
const myBook = new Book();

myBook.setAuthor("Oda Sensei");
myBook.productName = "One Piece";

console.log(myBook);

console.log(myProduct instanceof Product);
console.log(myProduct instanceof Book);
console.log(myBook instanceof Product);
console.log(myBook instanceof Book);

const demiMasa = new Book("Demi Masa", 50000);

console.log(demiMasa);
