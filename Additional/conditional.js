// conditional statement
// keyword , expression , dan block scope execution
let speed = 80
if( speed < 60) { 
    // kalau expression bernilai true , maka block scope ini di eksekusi
    console.log("anda pada kecepatan wajar")
} else {
    console.log("anda pada kecepatan tidak wajar")
}

let trafficLight = "green"

if(trafficLight == "red") { // false
    console.log("berhenti")
} else if(trafficLight == "yellow") { // false
    console.log("hati - hati")
} else if(trafficLight == "green") {// true 
    console.log("jalan")
} else {
    console.log("warna tidak valid")
}

// gerbang logika 
// && ( AND ) , || OR 
console.log(true && true)
console.log(true && false)
console.log(false && false)

console.log(true || true)
console.log(true || false)
console.log(false || false)