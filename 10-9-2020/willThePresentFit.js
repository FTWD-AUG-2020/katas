// Santa's elves are boxing presents, and they need your help! Write a function that takes two sequences of dimensions of the present and the box, respectively, and returns a Boolean based on whether or not the present will fit in the box provided. The box's walls are one unit thick, so be sure to take that in to account.

// Examples: Present and box respectively

// [10, 7, 16], [13, 32, 10] --> true, box is bigger than present
// [5, 7, 9], [9, 5, 7]      --> false, present and box are same size
// [17, 22, 10], [5, 5, 10]) --> false, box is too small

//https://www.codewars.com/kata/52b23340c65ea422b1000045

//Solution 1 with for loop
function willFit(present, box) {
  box.sort((a, b) => a - b);
  present.sort((a, b) => a - b);
  for (let i = 0; i < box.length; i++) {
    if (box[i] - 1 <= present[i]) return false;
  }
  return true;
}

//Solution 2 with filter()
function willFit(present, box) {
  present.sort((a, b) => a - b);
  box.sort((a, b) => a - b);
  return present.filter((x, i) => x < box[i] - 1).length === 3 ? true : false;
}

//Solution 3 with every() - Jada/Fabian
function willFit(present, box) {
  present.sort((a, b) => a - b);
  box.sort((a, b) => a - b);
  return box.every((v, i) => v >= present[i] + 2); //+2 extra inches of a box
}
