const tryPromise = new Promise((resolve , reject) => {
    setTimeout(() => {
        let isSuccess = false
        if(isSuccess) { 
            resolve("success")
            
        } else { 
            reject("error 500")
        }
    }, 5000)
   
})

async function fetchData() { 
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
       return res.json()
    })
    .then((res) => {
        console.log(res[1].name)
    })
    .catch(err => {
        console.log(err)
    })
}

const tryCatch = async () => {
    try { 
        let result = await tryPromise
        console.log(result)
    } catch(err) { 
        console.log(err)
    }
}

const asyncAwait = function() {
    console.log("satu")
    tryPromise.then((response) => {
        console.log(response)
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        console.log("finally")
    })
    console.log("dua")
}


// asyncAwait()

tryCatch()