//given arr
[1, 2, 3, 3, 3, 4, 5];

//filter into this:
[1, 2, 3, 4, 5];

//Solution 1 - Rabiul's
function unique(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i + 1]) newArr.push(arr[i]);
  }
  return newArr;
}

//Solution 2 -
function solve(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) res.push(arr[i]);
  }
  return res;
}

//Solution 3 - Matt's
function solve(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) === -1) {
      res.push(arr[i]);
    }
  }
  return res;
}

//Solution 4
function uniquify(arr) {
  return arr.filter((num, i) => i === arr.indexOf(num));
}

//Solution 5 - Fabian's
function removeDuplicates(array) {
  let result = [];
  array.map((x) => {
    if (!result.includes(x)) {
      result.push(x);
    }
  });
  return result;
}
