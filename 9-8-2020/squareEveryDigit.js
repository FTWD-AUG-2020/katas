// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

//https://www.codewars.com/kata/546e2562b03326a88e000020/javascript

//Solution 1 with Math.pow()
function squareDigits(num) {
  console.log(num.toString().split(""));
  let result = "";
  let number = num.toString().split("");
  for (let i = 0; i < number.length; i++) {
    result += Math.pow(number[i], 2);
  }
  return Number(result);
}

//Solution 2 (Fabian's Solution)
function squareDigits(num) {
  num = num.toString().split("");
  let result = [];
  for (let i = 0; i < num.length; i++) {
    result.push(Number(num[i]) * Number(num[i]));
  }
  return Number(result.join(""));
}

//Solution 3 with .map() (Mattheus Solution)
function squareDigits(num) {
  return +num
    .toString()
    .split("")
    .map((x) => x * x)
    .join("");
}
