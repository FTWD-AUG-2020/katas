// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]

//https://www.codewars.com/kata/571d42206414b103dc0006a1

//Solution 1 with for loop
const arr = (n) => {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(i);
  }
  return result;
};

//Solution 2 with Array.from
//note: look at tests for including _
const arr = (n) => Array.from({ length: n }, (_, i) => i);

//Solution 3 with Array.keys
//note: spread operator for making new array
const arr = (N) => [...Array(N || 0).keys()];
