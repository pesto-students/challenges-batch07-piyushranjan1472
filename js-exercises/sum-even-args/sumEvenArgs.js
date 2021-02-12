const sumEvenArgs = (...args) => {
  let sumOfEvenNumber = 0;
  if (args !== null) {
    args.forEach(i => {
      if (i % 2 === 0) {
        sumOfEvenNumber += i;
      }
    });
    return sumOfEvenNumber;
  }
  return sumOfEvenNumber;
};

export { sumEvenArgs };
