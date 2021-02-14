function balancedBraces(inputString) {
  const stack = [];
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (const i in inputString) {
    // If character is an opening brace add it to a stack
    if (inputString[i] === '(' || inputString[i] === '{' || inputString[i] === '[') {
      stack.push(inputString[i]);
    } else if (inputString[i] === map[stack[stack.length - 1]]) {
      stack.pop();
    }
  }
  if (stack.length !== 0) { return false; }
  return true;
}

export {
  balancedBraces,
};
