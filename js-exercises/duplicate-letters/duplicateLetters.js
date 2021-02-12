function duplicateLetters(str) {
  const counter = {};

  for (let i = 0, len = str.length; i < len; i += 1) {
    counter[str[i]] = (counter[str[i]] || 0) + 1;
  }

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
  // for(let i )
  for (const i in str) {
    // check if the character is at that position
    if (str.charAt(i) === number) {
      count += 1;
    }
  }

  if (count > 1) {
    return count;
  }
  return false;
}

export {
  duplicateLetters,
};
