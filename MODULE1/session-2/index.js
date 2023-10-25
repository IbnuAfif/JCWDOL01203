let age = 19;
console.log(age >= 17);
if (age >= 17) {
  console.log("you had ID Card");
} else {
  console.log("you dont had ID Card");
}

// console.log("dimas" == "Dimas");

// console.log("dimas" == "dimas");

// console.log(12 == 13);

// console.log(12 == "12");

// console.log(12 === "12");

// console.log(12 === 12);

// console.log(12 != "12");

// console.log(12 !== "12");

// console.log(!true);
// console.log(!false);
// console.log(!trafficLamp);

let trafficLamp = "red"; // thruty falsy

if (trafficLamp == "red") {
  console.log("you should stop");
} else if (trafficLamp == "yellow") {
  console.log("you should slow down");
} else if (trafficLamp == "green") {
  console.log("you should run");
} else {
  console.log("format invalid");
}

console.log(
  trafficLamp == "red"
    ? "you should stop"
    : trafficLamp == "yellow"
    ? "you should slow down"
    : trafficLamp == "green"
    ? "you should run"
    : "format invalid"
);

switch (trafficLamp) {
  case "red": // (trafficLamp && wind >= 100) == "red"
    console.log("you should stop");
    break;
  case "yellow":
    console.log("you should slow down");
    break;
  case "green":
    console.log("you should run");
    break;
  default:
    console.log("format invalid");
    break;
}

const EXPR = "Devil Fruit";

switch (EXPR) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound");
    break;
  default:
    console.log(`Sorry, we are out of ${EXPR} `);
}

let name = "L";

/*
    A = 100 - 86
    B = 85 - 75
    C = 74 - 65

*/
let value = 91;
// false     &&    true ==> false
if (value >= 86 && value <= 100) {
  console.log("A");
  // false   && true ==> false
} else if (value >= 75 && value <= 85) {
  console.log("B");
  //        true       && true ==> true
} else if (value >= 65 && value <= 74) {
  console.log("C");
}

/*
     true && true = true 
    false && true = false 
    false && false = false
*/

let car = "Sedan";
// false      ||   false ==> false
if (car == "BMW" || car == "Porche") {
  console.log("Your Car is great");
} else {
  console.log("your car soso");
}

console.log(
  car == "BMW" || car == "Porche" ? "Your Car is great" : "your car soso"
);

/*
    true || true = true 
    true || false = true
    false || false = false
*/

age = 0;

// console.log(Boolean(name));
if (age > 0) {
  //console.log("Dia punya nama");
  console.log("Dia punya umur");
} else {
  //console.log("Dia tidak punya nama");
  console.log("Dia baru lahir");
}

/*
    DECLARE age EQUALS TO 0

    IF age MORE THAN 0
        PRINT "Dia Punya Umur"
    ELSE 
        PRINT "Dia Baru Lahir"

*/

console.log(age > 0 ? "Dia Punya Umur" : "Dia Baru Lahir");

/*
    DECLARE age EQUALS TO 10

    IF age MORE THAN 0
        age EQUALS to "Dia Punya Umur"
    ELSE 
        age EQUALS to "Dia baru Lahir"

    PRINT age
*/
