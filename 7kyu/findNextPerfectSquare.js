/*

You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.

Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square

P num 
R return the square root of the original num + 1 (only if this ends up being a perfect square) else we're returning -1
E    Test.assertEquals(findNextSquare(121), 144, "Wrong output for 121");   
    Test.assertEquals(findNextSquare(625), 676, "Wrong output for 625");
P 
first step is to determine is the number coming in is a square root, 
if it is we then need to incremenet the nummber by 1 (newNum)
we then need to return the square root of this new number

if the number coming into the function (the parameter) is not a perfect square (sqaure root % 1 === 0)
then we return -1


*/


function findNextSquare(sq) {
    //declare vars up here due to scope so both functions have access to them (scoping)
    let num
    let newNum
    //check to see if the param is a perfect square root by % 1 
    if(Math.sqrt(sq) % 1 === 0) {
        //if its true aka is a perfect square root then assign num & newNum to the math we want to perform next
      num= Math.sqrt(sq)
      newNum= num + 1
      //if its not true return -1
    }else{
      return -1
    }
        //return the square root of the newNum (which is the original number incremented by 1)
      return newNum * newNum
    }