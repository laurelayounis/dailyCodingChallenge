/*
If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"

*/

function oddOrEven(array){
    if(array.length == 0){
      return 'even'
    }else{
      let sum= array.reduce((acc, c) => {return acc + c})
      return (sum % 2 == 0) ? 'even':'odd'
    }
  }


  //alt solution 

  
  function oddOrEven(arr){
    return arr.reduce((a,b) => a + b, 0) % 2 ? 'odd': 'even'
  }