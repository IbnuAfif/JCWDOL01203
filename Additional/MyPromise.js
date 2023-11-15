class MyPromise {
  err = null;
  res = null;
  constructor(callback) {
    callback(this.resolve, this.reject);
    return this;
  }

  resolve(res) {
    this.res = res;
  }

  reject(err) {
    this.err = err;
  }

  then(callback) {
    callback(this.res);
    return this;
  }

  catch(callback) {
    callback(this.err);
    return this;
  }
}

const tryPromise = new MyPromise((resolve, reject) => {
  let isError = false;
  if (isError) {
    reject("error");
  } else {
    resolve("success");
  }
});

tryPromise.then((res) => {
  console.log(res);
});
