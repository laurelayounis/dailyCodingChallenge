/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

*/

function reverseWords(str) {
  
    let newStr= str.split('').reverse().join('') //gets the letters in the words reversed but wrong order
    // god yzal eht revo spmuj xof nword kciuq ehT
    .split(' ')
    //words are split into words again
    .reverse()
    //position of words are fixed now
    .join(' ')
    //joined back into strings answer is now correct
    return newStr
  
  }

  //alt solution

  function reverseWords(str) {
    return str.split(' ').map( str => str.split('').reverse().join('') ).join(' ');
  }