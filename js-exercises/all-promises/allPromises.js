const allPromises = args => new Promise((resolve, reject) => {
  const results = [];
  let counter = 0;
  args.forEach((value, index) => {
    Promise.resolve(value).then(result => {
      results[index] = result;
      counter += 1;
      if (counter === args.length) {
        resolve(results);
      }
    }).catch(err => reject(err));
  });
});

export { allPromises };
