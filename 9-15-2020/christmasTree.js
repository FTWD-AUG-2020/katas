// Create a function christmasTree(height) or christmas_tree(height) (in Ruby) that returns a christmas tree of the correct height

// christmasTree(5) || christmas_tree(height) should return:

//     *
//    ***
//   *****
//  *******
// *********
// Height passed is always an integer between 0 and 100.

// Use \n for newlines between each line.

// Pad with spaces so each line is the same length. The last line having only stars, no spaces.

//https://www.codewars.com/kata/52755006cc238fcae70000ed/train/javascript

//Solution
function christmasTree(height) {
  let tree = "";
  let baseLen = height * 2 - 1;
  let starLen;
  let spaceLen;
  for (let i = 1; i <= height; i++) {
    starLen = i * 2 - 1;
    spaceLen = baseLen - starLen;
    tree +=
      " ".repeat(spaceLen / 2) + "*".repeat(starLen) + " ".repeat(spaceLen / 2);
    if (i != height) {
      tree += "\n";
    }
  }
  return tree;
}
