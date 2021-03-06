// You've been collecting change all day, and it's starting to pile up in your pocket, but you're too lazy to see how much you've found.

// Good thing you can code!

// Create change_count() to return a dollar amount of how much change you have!

// Valid types of change include:

// penny: 0.01
// nickel: 0.05
// dime: 0.10
// quarter: 0.25
// dollar: 1.00
// These amounts are already preloaded as floats into the CHANGE object for you to use!

// You should return the total in the format $x.xx.

// Examples:

// changeCount('nickel penny dime dollar') == '$1.16'
// changeCount('dollar dollar quarter dime dime') == '$2.45'
// changeCount('penny') == '$0.01'
// changeCount('dime') == '$0.10'
// Warning, some change may amount to over $10.00!

//https://www.codewars.com/kata/57e1857d333d8e0f76002169

//Solution 1
function changeCount(change) {
  var arr = change.split(" ");
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "penny") sum += 0.01;
    if (arr[i] == "nickel") sum += 0.05;
    if (arr[i] == "dime") sum += 0.1;
    if (arr[i] == "quarter") sum += 0.25;
    if (arr[i] == "dollar") sum += 1;
  }
  return "$" + sum.toFixed(2);
}

//Solution 2 - Matt
function changeCount(change) {
  switch (arr[i]) {
    case "penny":
      sum += 0.01;
      break;
    case "nickel":
      sum += 0.05;
      break;
    case "dime":
      sum += 0.1;
      break;
    case "quarter":
      sum += 0.25;
      break;
    case "dollar":
      sum += 1.0;
      break;
    default:
      sum += 0;
  }
  return "$" + sum.toFixed(2);
}

//Solution 3 - Rebecca/Sebastian
function changeCount(change) {
  let arr = change.split(" ");
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += CHANGE[arr[i]];
  }
  return `$${sum.toFixed(2)}`;
}
