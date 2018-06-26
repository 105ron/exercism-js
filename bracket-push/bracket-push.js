const pairs = { 
  '}': '{',
  ']': '[',
  ')': '('
}

function bracket ([...brackets]) {
  const openingBrackets = ['{', '[', '('];
  const stack = [];
  let flag = true;
  brackets.forEach(function (element) {
    if (openingBrackets.includes(element) ) {
      stack.push(element)
    } else {
      if (pairs[element] !== stack.pop()) {
        flag = false;
      }
    }
  })
  return flag && (stack.length === 0);
}

module.exports = bracket;