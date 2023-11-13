const tryThrow = () => {
  //   try {
  let isFalse = true;
  if (isFalse) {
    throw new Error("there is an Error");
  }
  console.log("success");
  //   }
  //   catch (err) {
  //     console.log(" catch! err => ", err);
  //   }
};

tryThrow();
