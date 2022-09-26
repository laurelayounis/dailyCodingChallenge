/*

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

P
R
E  
  assert.strictEqual(descendingOrder(1), 1)
    assert.strictEqual(descendingOrder(111), 111)
    assert.strictEqual(descendingOrder(15), 51)
    assert.strictEqual(descendingOrder(1021), 2110)
P

*/

function descendingOrder(n){
    return Number(String(n).split('').sort((a,b) => b - a).join(''))
  }


  //alt solution

  function descendingOrder(n){
  
    n = [...n.toString()];
    
    return Number(
              n
              .sort()
              .reverse()
              .join('')
            );
  }