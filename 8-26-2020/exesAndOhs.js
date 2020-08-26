// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// https://www.codewars.com/kata/55908aad6620c066bc00002a

//solution 1
function XO(str) {
    let xCount = 0
    let oCount = 0
    
    str=str.toLowerCase()
  
    for (let i = 0; i<str.length; i++){
        if(str[i]==='x'){
        xCount++
    }
  
        if(str[i]==='o'){
        oCount+=1
        }
    }
  return xCount === oCount
}

//solution 2
function XO(str) {
let xArray = str.toLowerCase().split('').filter(char => char==='x')
let oArray = str.toLowerCase().split('').filter(char => char==='o')

return xArray.length === oArray.length
}

//solution 3
function XO(str) {
return str.toLowerCase().split('').filter(char => char==='x').length === str.toLowerCase().split('').filter(char => char==='o').length
}
