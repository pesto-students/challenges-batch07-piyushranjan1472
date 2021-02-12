function rot13(str) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Encoded Text
  let encodedText = '';
  const shift = 13;
  let i = 0;
  while (i < str.length) {
    // Valid Alphabet Characters
    if (alphabet.indexOf(str[i]) !== -1) {
      const alphabetIndex = alphabet.indexOf(str[i]);

      if (alphabet[alphabetIndex + shift]) {
        encodedText += alphabet[alphabetIndex + shift];
      } else {
        encodedText += alphabet[alphabetIndex + shift - 26];
      }
    } else {
      // Append To str
      encodedText += str[i];
    }
    // Increase I
    i += 1;
  }
  return encodedText;
}

export {
  rot13,
};
