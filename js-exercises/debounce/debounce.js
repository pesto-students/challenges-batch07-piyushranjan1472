function debounce(fn, timeInMs) {
  let timer;
  return (...args) => {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, timeInMs);
  };
}

export { debounce };
