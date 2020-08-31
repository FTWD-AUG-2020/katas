// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

//https://www.codewars.com/kata/558fc85d8fd1938afb000014

//Solution 1 - with sorting in ascending order
function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}

//Solution 1 - shorthand
function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b)[0] + numbers[1];
}

//Solution 2 - by Sebastian
function sumTwoSmallestNumbers(numbers) {
  let numbersToAdd = [];
  while (numbersToAdd.length < 2) {
    numbersToAdd.push(
      Number(numbers.splice(numbers.indexOf(Math.min(...numbers)), 1))
    );
  }
  return numbersToAdd[0] + numbersToAdd[1];
}
