// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

// solution 1

function arrayPlusArray(arr1, arr2) {
  
    let total = 0
    
    for (let i =0; i < arr1.length; i++){
      total += arr1[i] + arr2[i]
    }
    return total
    }

 // soultion 2
 
 function arrayPlusArray(arr1, arr2) {
  
    let arr1Sum = arr1.reduce((acc, val)=>{return acc + val},0)
    let arr2Sum = arr2.reduce((acc, val)=>{return acc + val},0)
    
    return arr1Sum + arr2Sum
    
   }


// solution 3

function arrayPlusArray(arr1, arr2) {
  
    return arr1.reduce((acc, val)=>{return acc + val},0) + arr2.reduce((acc, val)=>{return acc + val},0)
    
   }

// solution 4

function arrayPlusArray(arr1, arr2) {
  
    return arr1.reduce((acc, val) => acc + val) + arr2.reduce((acc, val) => acc + val)
    
   }