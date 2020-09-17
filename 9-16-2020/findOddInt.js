// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

//https://www.codewars.com/kata/54da5a58ea159efa38000836

//Solution 1
function findOdd(A) {
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      if (A[i] == A[j]) {
        count++;
      }
    }
    if (count % 2 != 0) {
      return A[i];
    }
  }
}

//Solution 2 - Sebastian
function findOdd(A) {
  let counter = {};
  const countNum = (num) => {
    if (counter[num] === undefined) counter[num] = 0;
    counter[num] = counter[num] + 1;
  };
  for (let num of A) countNum(num);
  for (let key in counter) if (counter[key] % 2 != 0) return Number(key);
}

//Solution 3 - Matteus
function findOdd(A) {
  return A.reduce((a, b) => a ^ b);
}
