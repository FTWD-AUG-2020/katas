// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

//https://www.codewars.com/kata/57a62154cf1fa5b25200031e

//Solution 1 with for loop
function alternateCase(s) {
  const flipLetters = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toLowerCase()) {
      flipLetters[i] = s[i].toUpperCase();
    } else {
      flipLetters[i] = s[i].toLowerCase();
    }
  }

  return flipLetters.join("");
}

//Solution 2 with map
function alternateCase(s) {
  return s
    .split("")
    .map((elem) => {
      if (elem === elem.toUpperCase()) {
        return elem.toLowerCase();
      } else {
        return elem.toUpperCase();
      }
    })
    .join("");
}

//Solution 2 shorthand
alternateCase = (s) =>
  [...s]
    .map((x) => (x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()))
    .join("");
