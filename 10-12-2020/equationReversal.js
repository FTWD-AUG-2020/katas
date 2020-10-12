// Given a mathematical equation that has *,+,-,/, reverse it as follows:

// solve("100*b/y") = "y/b*100"
// solve("a+b-c/d*30") = "30*d/c-b+a"

//https://www.codewars.com/kata/5aa3af22ba1bb5209f000037

//Solution 1 - Sebastian
function solve(eq) {
  let operators = eq
    .replace(/[^*+-/]/gi, "")
    .split("")
    .reverse();
  let args = eq.split(/[*+-/]/gi).reverse();
  let result = "";
  for (let i = 0; i < args.length; i++) {
    if (operators[i] !== undefined) {
      result += args[i] + operators[i];
    } else {
      result += args[i];
    }
  }
  return result;
}

//Solution 2 - Fabian
function solve(eq) {
  return eq
    .split("")
    .reverse()
    .join("")
    .replace(/(\d+)/gi, (result) => {
      return result.split("").reverse().join("");
    });
}

//Solution - Rebecca
function solve(eq) {
  return eq
    .split(/([*+-/])/)
    .reverse()
    .join("");
}
