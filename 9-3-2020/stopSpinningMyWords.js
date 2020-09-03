// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

//solution 1

function spinWords(words) {
    let str = words.split(” “);
    let sentence = “”;
    for (let i = 0; i < str.length; i++) {
      if (str[i].length < 5) {
        sentence += str[i] + ” “;
      } else {
        sentence += str[i].split(“”).reverse().join(“”) + ” “;
      }
    }
    return sentence.trim(” “);
  }

//solution 2

function spinWords(words){
    let splitWords = words.split(' ')
    let result = []
    for(let word of splitWords){
      if(word.length >= 5){
        result.push(word.split('').reverse().join(''))
      } else {
        result.push(word)
      }
    }
    return result.join(' ')
  }

  // solution 3

  function spinWords(words){
  
    return words.split(' ').map(word => {
                                if(word.length >= 5){
                                  return word.split('').reverse().join('')
                                }
                                else{
                                  return word
                                }
                                }).join(' ')
  }

  //solution 4

  function spinWords(words){
  
    return words.split(' ').map(word => word.length >= 5 ? word.split('').reverse().join('') : word).join(' ')
    
  }