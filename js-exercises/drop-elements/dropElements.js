function dropElements(elements, predicate) {
  const newArray = [];
  elements.forEach(i => {
    if (predicate(i)) {
      newArray.push(i);
    }
  });
  return newArray;
}
export { dropElements };
