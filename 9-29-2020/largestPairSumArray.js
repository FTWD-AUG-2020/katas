// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

//https://www.codewars.com/kata/556196a6091a7e7f58000018

// Solution 1 using for loop - Sebastian's
function largestPairSum(numbers) {
  let largest = Math.min(...numbers);
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] > largest && i !== j) {
        console.log(
          `${numbers[i]} + ${numbers[j]}: ${numbers[i] + numbers[j]}`
        );
        largest = numbers[i] + numbers[j];
      }
    }
  }
  console.log(`Largest: ${largest}`);
  return largest;
}

// Solution 2 using sort method - Matt's
function largestPairSum(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] + numbers[1];
}

//Solution 2 refactored to one line
function largestPairSum(numbers) {
  return numbers.sort((a, b) => b - a)[0] + numbers[1];
}
