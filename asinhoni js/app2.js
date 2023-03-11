function job(data) {
  const promise = new Promise((resolve, reject) => {
    if (typeof data !== "number") reject("error");
    else if (typeof data === "number" && data % 2 === 1) {
      setTimeout(() => {
        resolve("odd");
      }, 1000);
    } else if (typeof data === "number" && data % 2 === 0) {
      setTimeout(() => {
        reject("even");
      }, 2000);
    }
  });
  return promise;
}
