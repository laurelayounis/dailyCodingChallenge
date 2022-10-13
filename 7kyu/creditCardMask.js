
/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"

*/


// return masked string
function maskify(cc) {
    //split it up to get each individual letter
    //use map to grab both the letter and the index because will be using both
    //check to see if the index is less than the length of cc 
    //if it is; return the letter as #
    //if its not return the letter
    //join('') the cc back together to return a string
  return cc.split('').map((letter, index) => index < cc.length - 4 ? '#' : letter).join('')
  }
  

  //alt solution

  // return masked string
function maskify(cc) {
    cc = cc.split("");
    for(var i = 0; i < cc.length - 4; i++){
      cc[i] = "#";
  }
  
  cc = cc.join("");
  return cc
  }