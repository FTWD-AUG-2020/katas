// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

//https://www.codewars.com/kata/5526fc09a1bbd946250002dc

//Solution 1 with for loop - Sebastian's
function findOutlier(integers) {
  let sample = integers.slice(0, 3),
    evens = 0;
  for (let num of sample) if (num % 2 === 0) evens++;
  if (evens > 1) return integers.find((num) => num % 2 !== 0);
  return integers.find((num) => num % 2 === 0);
}

//Solution 2 with for loop - Rebecca, Jada, Matheus
function findOutlier(integers) {
  let evennum = [];
  let oddnum = [];
  for (number of integers) {
    if (number % 2 === 0) {
      evennum.push(number);
    } else {
      oddnum.push(number);
    }
    console.log(oddnum.length);
    //check the length of arrays and return the array value with the value of 1
  }
  if (evennum.length == 1) {
    return Number(evennum);
  } else {
    return Number(oddnum);
  }
}

//Solution 3 with filter - Fabian's
function findOutlier(integers) {
  let evenArr = integers.filter((num) => num % 2 === 0);
  let oddArr = integers.filter((num) => num % 2 !== 0);
  if (evenArr.length === 1) return evenArr[0];
  else return oddArr[0];
}
