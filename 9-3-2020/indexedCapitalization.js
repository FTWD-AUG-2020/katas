// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// For example:

// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
// The input will be a lowercase string with no spaces and an array of digits.

// Good luck!

// https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1

//solution 1

function capitalize(s,arr){
    let result = ''
    for (let i = 0; i<s.length; i++){
      if(arr.includes(i)){
        result += s[i].toUpperCase()
      }
      else{
        result += s[i]
      }
    }
     return result
   };

//solution 2

function capitalize(s,arr){

return s.split('').map((char, i)=> arr.includes(i) ? char.toUpperCase() : char).join('')
}