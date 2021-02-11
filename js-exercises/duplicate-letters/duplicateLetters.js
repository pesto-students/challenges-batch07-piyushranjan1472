function duplicateLetters(str) {
  var counter = {};

  for (var i = 0, len = str.length; i < len; i += 1) {
    counter[str[i]] = (counter[str[i]] || 0) + 1;
  }

  var biggest = -1, number;
  for (var key in counter) {
    if (counter[key] > biggest) {
      biggest = counter[key];
      number = key;
    }
  }

  let count = 0;
  // looping through the items
  for (let i = 0; i < str.length; i++) {

    // check if the character is at that position
    if (str.charAt(i) == number) {
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
