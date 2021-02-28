function allSettled(promises) {
  const wrappedPromises = promises.map(p => Promise.resolve(p).then(
    val => ({ status: 'fulfilled', value: val }),
    err => ({ status: 'rejected', reason: err }),
  ));
  return new Promise((resolve, reject) => {
    const results = [];
    let counter = 0;
    wrappedPromises.forEach((value, index) => {
      Promise.resolve(value).then(result => {
        results[index] = result;
        counter += 1;
        if (counter === wrappedPromises.length) {
          resolve(results);
        }
      }).catch(err => reject(err));
    });
  });
}

export { allSettled };
