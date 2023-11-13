const fs = require("fs");

const tryPromise = new Promise((resolve, reject) => {
  let isError = false;
  if (isError) {
    reject("error");
  } else {
    resolve("success");
  }
});

// console.log("task 1");
// tryPromise
//   .then((res) => {
//     console.log("ini dari then => ", res);
//   })
//   .catch((err) => {
//     console.log("ini dari catch => ", err);
//   })
//   .finally(() => {
//     console.log(" finally ");
//   });
// console.log("task 2");

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     console.log(" res => ", res.status);
//     return res.json();
//   })
//   .then((users) => {
//     console.log("users => ", users);
//   })
//   .catch((err) => {
//     console.log("err ", err);
//   });

// async function foo() {
//await promise
// }

async function myFetch() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();
    console.log("users => ", users);
  } catch (err) {
    console.log("err => ", err);
  }
}

const asyncAwait = async () => {
  console.log("task 1");
  try {
    let result = await tryPromise;

    console.log(result);
  } catch (err) {
    console.log("err => ", err);
  }
  console.log("task 2");
};

// myFetch();
// asyncAwait();

function getJson() {
  const data = fs.readFileSync("./data.json");
  console.log(data);
}

getJson();
