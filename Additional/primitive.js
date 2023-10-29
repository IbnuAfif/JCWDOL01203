/* 
    tipe data dibagi 2 
    - primitive 
      - string 
      - number
      - boolean 

      - undefined 
      - NaN

    - non-primitive / structural
      - Array 
      - Object 

*/

let name = "Aries D Yudhistira"
// memiliki index
console.log(name[0])
console.log(name[1])
console.log(name[2])
console.log(name[3])

name[1] = "D" // immutable => perbagian dia tidak bisa di ganti
// immutable adalah sifat yang dimiliki oleh tipe data primitive
console.log(name[1])

let result = "Portgas " + "Ace"
console.log(result)

let result2 = "1" + 1
result2 = result2 + true
console.log(typeof result2, result2)

// number 
let age = 27
let resultAdd = age + 45
console.log(resultAdd)
let resultMultiply = age * 3
console.log(resultMultiply)
let resultMod = age % 4 // 27 / 4 = 6(24) 27 - 24 = 3
console.log(resultMod)

// increase ( peningkatan ) dan decrease ( penurunan ) 
age = age + 2 // 29 
age = age + 2 // 31
age = age + 2 // 33
console.log(age)

age += 2
age += 2
age += 2

console.log(age)

age *= 2 // age = age * 2
age *= 3 // age = age * 3

console.log(age)

// age += 1
console.log(" postfix => ",age++) // postfix plus 1 
console.log(age)

console.log(" prefix => ",++age) // prefix plus 1 
console.log(age)

// boolean 
console.log(true, false)

// comparison operator 
console.log(21 == 22)
let compare1 = 21 < 22
console.log(compare1)
let compare2 = 21 > 22
console.log(compare2)
let compare3 = 21 <= 21
console.log(compare3)
let compare4 = 22 >= 19
console.log(compare4)
let compare5 = 21 == "21"
console.log(compare5)
let compare6 = 21 === "21"
console.log(compare6)
let compare7 = "aries" == "Aries"
console.log(compare7)
let compare8 = "Aries" == "Aries"
console.log(compare8)
let compare9 = true == true 
console.log(compare9)
let compare10 = 21 != 21
console.log(compare10)
let compare11 = 21 !== "21"
console.log(compare11)
let compare12 = "F" > 'a'
console.log(compare12)
let compare13 = 12 < undefined
console.log(" compare 13 => ",compare13)

// truthy falsy
console.log(Boolean(12))
console.log(Boolean(1923))
console.log(Boolean(0))

console.log(Boolean("Dimas"))
console.log(Boolean("abhfdfjewjfje"))
console.log(Boolean(""))

console.log(Boolean(NaN))
console.log(Boolean(undefined))