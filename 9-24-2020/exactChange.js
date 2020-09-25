// Write a function that takes 1 number (1-100) and returns the smallest combination of coins that equal that number
// for example exactChange(77)
// would return [25, 25, 25, 1, 1]
// so 25 cents, another 25 cents, another 25 cents, 1 penny and 1 penny
// exactChange(12) would return [10, 1, 1]
// 10 cents, 1 penny, 1 penny
// if u return [5, 5, 1, 1] that would be incorrect because [10, 1, 1] uses fewer coins

//Solution 1
function makeChange(num) {
  let coins = [25, 10, 5, 1];
  let result = [];
  let money = num;
  for (let i = 0; i < coins.length; i++) {
    let multiples = parseInt(money / coins[i]);
    for (let j = 0; j < multiples; j++) {
      result.push(coins[i]);
    }
    let remainder = money % coins[i];
    money = remainder;
  }
  return result;
}

//Solution 2 - Sebastion's
const exactChange = (x) => {
  let cents = [25, 10, 5, 1],
    change = x,
    result = [];
  for (let coin of cents) {
    while (change >= coin) {
      change -= coin;
      result.push(coin);
    }
  }
  return result;
};

//Solution 3 - Rabiul's
function changeGenerator(num) {
  let quarter = 25;
  let dime = 10;
  let nickel = 5;
  let penny = 1;
  let arr = [];
  let newNum = num;
  while (newNum > 0) {
    if (newNum > quarter) {
      newNum -= quarter;
      arr.push(quarter);
    } else if (newNum > dime) {
      newNum -= dime;
      arr.push(dime);
    } else if (newNum > nickel) {
      newNum -= nickel;
      arr.push(nikel);
    } else if (newNum >= penny) {
      newNum -= penny;
      arr.push(penny);
    }
  }
}
