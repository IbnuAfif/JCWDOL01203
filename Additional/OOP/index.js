class Person {
  name;
  age;
  static fooVar = "foo variable";
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  hello() {
    console.log("hello, iam ", this.name);
    console.log("fooVar accessible => ", this.fooVar);
  }

  static foo() {
    console.log("foo => ", this.fooVar);
  }
}

class Student extends Person {
  grade;
  constructor(name, age) {
    super(name, age);
  }
  set setGrade(grade) {
    if (grade != "A" || grade != "B" || grade != "C") {
      console.log("invalid grade");
    } else {
      this.grade = grade;
    }
  }
  get getGrade() {
    return this.grade;
  }
}

class Employee extends Person {}

let dimas = new Student("Dimas", 23);
dimas.setGrade = "Z";
console.log(dimas.getGrade);
console.log(dimas);

// dimas.foo(); // object dari class tidak bisa mengakses static property atau method

Person.foo();
//Person.hello(); // class tidak mengakses property atau method yg bukan static
// Student.foo();

dimas.hello();
