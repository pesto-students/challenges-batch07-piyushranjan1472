function rangeIter(lb, ub) {
  if (arguments.length === 0 || arguments.length === 1) {
    throw new TypeError('undefined is not a number');
  }

  if (typeof ub !== 'number') {
    throw new TypeError(`${ub} is not a number`);
  }
  if (typeof lb !== 'number') {
    throw new TypeError(`${lb} is not a number`);
  }

  const finalArray = [];
  let from = lb;
  const to = ub;
  const obj = {
    [Symbol.iterator]() {
      return {
        next() {
          if (from <= to) {
            from += 1;
            return {
              value: from - 1,
              done: false,
            };
          }

          return {
            done: true,
          };
        },
      };
    },
  };

  for (const val of obj) {
    finalArray.push(val);
  }

  return finalArray;
}

export { rangeIter };
