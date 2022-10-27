
/*

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/


function duplicateEncode(word){
  //if char appears only once = )
  //if char appears more than once= (
  let newWord= word.toLowerCase().split('')

  let wordArr= newWord.map((e,i,a) => a.indexOf(e) === a.lastIndexOf(e) ? '(' : ')')
  return wordArr.join('')
}


//looks better
function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}


//above solutions are quadratic time so need to refactor using an obj map & saying if char count is greater than 1 return else return