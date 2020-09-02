// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).


// https://www.codewars.com/kata/554e4a2f232cdd87d9000038

//solution 1

function DNAStrand(dna){
   let returnStr=''
    for (const char of dna){
      if(char == 'A'){
        returnStr+='T'}
        else if(char == 'T'){
        returnStr+='A'}
        else if (char =='C'){
        returnStr +='G'}
        else{returnStr+='C'}
      }
      return returnStr
  }

// solution 2
function DNAStrand(dna){
  
    let compliments = {'A':'T', 'T':'A', 'G':'C', 'C':'G'}
    let result = ''
    
    for (let i =0; i<dna.length; i++){
      result += compliments[dna[i]]
    }
    
    return result
  }

//solution 3
function DNAStrand(dna){
  
  
    let compliments = {'A':'T', 'T':'A', 'G':'C', 'C':'G'}
    
    return dna.split('').map(char => compliments[char]).join('')
      
      }