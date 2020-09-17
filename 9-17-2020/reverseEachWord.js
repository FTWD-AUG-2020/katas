// Given a string, like “Hi my name is Sam”, return “iH ym eman si maS“

//Common interview question - In-class live coding mock interview

let str = "Hi my name is Sam";

//Solution 1
function reverseEach(str) {
  let arr = str.split(" ");
  console.log(arr);
  let newStr = "";
  for (let i = 0; i < arr.length; i++) {
    newStr +=
      i === arr.length - 1
        ? `${arr[i].split("").reverse().join("")}`
        : `${arr[i].split("").reverse().join("")} `;
  }
  return newStr;
}

//Solution 2 - Fabian/Sam/Class help
function reverseEach(str) {
  let newStr = str.split(" ");
  let result = [];
  for (let i = 0; i < newStr.length; i++) {
    result.push(newStr[i].split("").reverse().join(""));
  }
  return result.join(" ");
}
