let result 

function greet(str) { 
    result = str
}

function hello() { 
    greet("hello")
}

function arigatou() { 
    greet("arigatou")
}

arigatou()
console.log(result)
hello()
console.log(result)

function calculation(a, b) { 
    return a + b
}

function displayer(something) { 
    console.log(something)
}

let result2 = calculation(5,5)

displayer(result2)

// second way 

function calculator2(a, b) { 
    let result = a + b

    displayer(result)
}

calculator2(5,5)

// callback
function calculator3(a, b, callback) { 
    if(!callback) { 

    } else {
        callback(a+b)
    }
   
   
}

calculator3(5, 5)