// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( length 0 ).

// For example:

// solution("1", "22") // returns "1221"
// solution("22", "1") // returns "1221"

//https://www.codewars.com/kata/55eea63119278d571d00006a

//solution 1
function solution(a, b) {
  if (a.length > b.length) {
    return b + a + b;
  } else if (b.length > a.length) {
    return a + b + a;
  }
}

//solution 1 shorthand
const solution = (a, b) => (a.length < b.length ? a + b + a : b + a + b);
