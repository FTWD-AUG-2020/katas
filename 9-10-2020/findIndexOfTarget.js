// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You may assume no duplicates in the array.
// Example 1:
// Input: [1,3,5,6], 5 Output: 2
// Example 2:
// Input: [1,3,5,6], 2 Output: 1
// Example 3:
// Input: [1,3,5,6], 7 Output: 4
// first argument of function should be the array and the second argument is the target.  So in the first example, the target is 5.  so 5 is found in the 2nd index, so the output is 2
// 2nd example, target is 2, but there is no 2 in the array.   So the 2 should be inserted in 1st index position, so the output of the function should be 1

//Solution 1 with for loop
function targetIndx(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (target <= i) return i;
  }
  return arr.length;
}

//Solution 2 with array methods
function targetIndx(arr, target) {
  if (arr.includes(target)) return arr.indexOf(target);
  else arr.push(target);
  return arr.sort((a, b) => a - b).indexOf(target);
}
