const mypromise = () => {
  const success = true;
  return new Promise((resolve, reject) => {
    if (success) {
      resolve("resolved");
    } else {
      reject("rejected");
    }
  });
};

mypromise().then((result) => {
  console.log(result);
});
