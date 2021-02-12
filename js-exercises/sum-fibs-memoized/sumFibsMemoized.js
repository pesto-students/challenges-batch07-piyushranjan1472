function sumFibs(num) {
  let prevFib = 0;
  let curFib = 1;
  let sum = 0;
  while (curFib <= num) {
    if (curFib % 2 !== 0) {
      sum += curFib;
    }
    // Move on to next Fibonacci number
    const nextFib = curFib + prevFib;
    prevFib = curFib;
    curFib = nextFib;
  }
  return sum;
}

// eslint-disable-next-line no-shadow
function cacheFunction(sumFibs) {
  const cache = {};
  const result = (n) => {
    if (n in cache) {
      return cache[n];
    }
    cache[n] = sumFibs(n);
    return cache[n];
  };
  return result;
}

// console.log(cacheFunction(10));

export { sumFibs, cacheFunction };
