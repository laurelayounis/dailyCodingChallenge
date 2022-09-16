/*

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

P: a single string, string might have duplicate characters in it
R: ( for each character thats only in the string once,   or ) for each character that's in the string more than once
E: assert.strictEqual(duplicateEncode("din"),"(((");    "din" // (((   
    "ree" // ())
P: need to evaluate each character in the string (loop through the string)
   determine how many times the character 
   exists in the string :how many instances of each character exists if its greater than 1 need to return ")"  or if its less than 1 need
   to return "(" 
   if we're splitting the string up to evaluate the characters in it will need to join the string back together and return the new str

   https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

*/


function duplicateEncode(word){
    let chars=[...word.toLowerCase()];
    let duplicateList = chars.filter((char,index,chars)=>chars.indexOf(char)!==index);
    let duplicateSet = new Set(duplicateList); 
    let uniqueDuplicateList = [...duplicateSet];
    //console.log(uniqueDuplicateList);
    let resultString = "";
    for (let i=0, n=chars.length; i < n; ++i ) {
      if(uniqueDuplicateList.includes(chars[i])) {
        resultString += ")";
      } else {
        resultString += "(";
      }
    }
    return resultString;
}
//.join('')


//alt solution
function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }