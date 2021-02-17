const sumEvenArgs = (...args) => args.filter(value => value % 2 === 0)
  .reduce((preValue, curValue) => preValue + curValue, 0);

export { sumEvenArgs };
