// Given an array of numbers, return an array of only numbers divisible by 3
// the catch is, you HAVE to use the .reduce method
// example input is [30,10,15]
// output will be [30, 15]

//Solution 1
const isDivisible = (arr) => {
  return arr.reduce((acc, val) => {
    if (val % 3 === 0) {
      acc.push(val);
      return acc;
    } else {
      return acc;
    }
  }, []);
};

//Solution 2 - Sebastian's
function isDivisible(arr) {
  let result = [];
  arr.reduce((total, cur) => {
    if (cur % 3 === 0) {
      result.push(cur);
    }
  }, 0);
  return result;
}
