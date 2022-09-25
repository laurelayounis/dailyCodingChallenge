/*

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

Use every() function on the arr and includes() on the str; Every will return true if the passed function is true for all it's items.

*/

function isPangram(string){

    let stringCheck= ['a','b','c','d','e',
                      'f','g','h','i','j','k',
                      'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    //need to santize the string to lowercase so can do the check
    string= string.toLowerCase()
    //                             .every() will return true if .includes() is true for all of its letters  then use ? to return either true or false
    let hasEveryLetter= stringCheck.every(letter => string.includes(letter))? true : false
    return hasEveryLetter
    
    }
      