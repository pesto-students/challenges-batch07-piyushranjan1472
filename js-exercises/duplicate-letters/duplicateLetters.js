function duplicateLetters(str) {
  const counter = {};
  for (const i of str) counter[i] = (counter[i] || 0) + 1;
  let biggest = -1;
  let number;
  for (const key in counter) {
    if (counter[key] > biggest) {
      biggest = counter[key];
      number = key;
    }
  }
  let count = 0;
  // looping through the items
  for (const i of str) {
    if (i === number) count += 1;
  }

  if (count > 1) {
    return count;
  }
  return false;
}

export {
  duplicateLetters,
};
