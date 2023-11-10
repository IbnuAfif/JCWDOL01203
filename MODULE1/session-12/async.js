console.log("get data from server ")

setTimeout(function() { 
    console.log('get images done')
}, 3000)

console.log("skeleton grey ")

function foo(callback) { 
    console.log("foo")
    callback()
}

console.log("task 1")
setTimeout(() => { 
    console.log("task 2")
},0)
console.log("task 3")

let arr = new Array()

arr.push()