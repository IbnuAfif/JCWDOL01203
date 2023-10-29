/*
tipe variable dalam javascript 
- var : bersifat global 
- let : hanya bisa di akses oleh di dalam scope nya saja , sertea children scope nya 
- const 
*/

console.log(myName)
var myName = "Dimas"
console.log(myName)
var myName = "Agus"
myName = "Fairuz" // men-assign ulang
// bersifat global dan bisa di deklarasi ulang dengan nama yang sama 

{ 
    var myAge = 21
}

console.log(myAge)
console.log(myName)

let name = "Dimas"
// let name = "Agus" let bersifat tidak bisa di deklarasi ulang
name = "Agus" // men-assign ulang 

console.log(name)

{
    let age = 45 // let age itu hanya bisa di akses 1 scope saja , 
    // tidak bisa di akses di luar block -scope nya
    console.log(age) 
    {
        console.log(" di dalam block - scope nya ,", age)
    }
}
{
    //console.log(" level block scope sejajar ,", age)
}

// console.log(age) undefined

const NAME = "Dimas"
// const NAME = "Agus" ini tidak bisa di RE-DECLARE
// NAME = "Agus" Constant tidak bisa di RE-ASSIGN

console.log(NAME)

{ 
    const AGE = 23
    console.log(NAME)
}

// console.log(AGE) tidak bisa di akses di luar scope 

const PI = 3.14
const K = 566.10
