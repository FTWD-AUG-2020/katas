// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

//https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

//Solution - Fabian
function wave(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let copy = str.split("");
    if (copy[i] !== " ") {
      copy[i] = copy[i].toUpperCase();
      result.push(copy.join(""));
    }
  }
  return result;
}

//Solution - Rabiul
function wave(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      result.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
    }
  }
  return result;
}

//Solution - Sebastian
function wave(str) {
  let result = [];
  let split = str.split("");
  split.forEach((letter, i) => {
    if (letter !== " ") {
      let clone = [...split];
      clone[i] = letter.toUpperCase();
      result.push(clone.join(""));
    }
  });
  return result;
}

//Solution - Val
function wave(str) {
  let result = "";
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      continue;
    }
    result =
      str.substring(0, i) +
      str[i].toUpperCase() +
      str.substring(i + 1, str.length);
    arr.push(result);
  }
  return arr;
}
