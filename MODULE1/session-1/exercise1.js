// input
// proses
// output

/*
DECLARE WIDTH EQUALS TO 3
DECLARE LENGTH EQUALS TO 5
DECLARE AREA

AREA EQUALS TO WIDTH multiply LENGTH 

PRINT AREA
*/
let width = 3;
let length = 5;
let area;

area = width * length;

console.log(area);

let parimeter = 2 * (width + length);

console.log(parimeter);

let radius = 5;
const PI = 3.14;

let circleArea = PI * radius * radius;
console.log(circleArea);

let circleCircumference = 2 * PI * radius;
console.log(circleCircumference);

let a = 80;
let b = 65;
let c = 180 - (a + b);
console.log(c);

let date1 = new Date("2022-01-20");
let date2 = new Date("2022-01-22");

let differences = date2 - date1;

console.log(differences / (1000 * 60 * 60 * 24));

let days = 366;
let year = Math.floor(days / 365);
let month = Math.floor((days % 365) / 30);
let day = (days % 365) % 30;

console.log("year = ", year, "month = ", month, "days = ", day);
