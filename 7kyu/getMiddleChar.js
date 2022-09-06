/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.

*/

/*
working through it

let str='abcde'
str.length // 5
Math.floor(5/2) //2
str[2]  //c
str += 'f' //'abcdef'
//test it again for odds

*/


function getMiddle(s){
    let length= s.length
    let middle= Math.floor(length / 2) //need to use Math.floor() to deal with odd nums
    
    if(length % 2 === 0){
      //str is even return this
      return s[middle - 1] + s[middle]
      return length
    }else{
      //str is odd return this
      return s[middle]
    }
  }

  // alt solution

  function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}