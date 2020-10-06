// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.

// More examples in the test cases.

// Good luck!

//https://www.codewars.com/kata/59f11118a5e129e591000134

//Matheus solution
function repeats(arr) {
  let total = [];
  arr.sort((a, b) => {
    return a - b;
  });
  console.log(arr);
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] !== arr[i + 1]) {
      total.push(arr[i]);
      i--;
    }
  }
  return total[0] + total[1];
}

//Anthony's solution
function repeats(arr) {
  let sorted = arr.sort();
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] != arr[i + 1] ? (res += arr[i]) : i++;
  }
  return res;
}

//Fabian's solution
function repeats(arr) {
  arr.sort();
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    //     console.log(arr[i+1])
    if (arr[i + 1] !== arr[i]) {
      result.push(arr[i]);
    } else {
      i += 1;
    }
  }
  return result.reduce((sum, num) => sum + num);
}

//Sebastian's solution
function repeats(arr) {
  // Used to store non-duplicate numbers later
  let results = [];

  // Loop through every value of arr
  for (let num of arr) {
    // Ternary operator, check if num *isn't* in results array
    !results.includes(num)
      ? // Push num to results if first occurence
        results.push(num)
      : // Remove number from results if second occurence
        results.splice(results.indexOf(num), 1);
  }

  console.log(results);

  // Return sum of the two non-duplicate numbers
  return results[0] + results[1];
}

//Rabiul's Solution
function repeats(arr) {
  let result = [];
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result[0] + result[1];
}

//Matt's solution
function repeats(arr) {
  var res = arr.filter(function (v) {
    return arr.indexOf(v) == arr.lastIndexOf(v);
  });
  return res.reduce(function (a, b) {
    return a + b;
  }, 0);
}
