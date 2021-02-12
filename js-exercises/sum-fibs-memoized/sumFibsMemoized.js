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

function cacheFunction() {
  const cache = {};
  return (n) => {
    if (n in cache) {
      return cache[n];
    }
    const result = sumFibs(n);
    cache[n] = result;
    return result;
  };
}

// console.log(cacheFunction(10));

export { sumFibs, cacheFunction };
