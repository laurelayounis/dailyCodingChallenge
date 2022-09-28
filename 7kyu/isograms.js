/*

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

P a string of letters or an empty string
R true or false 
E
assert.strictEqual( isIsogram("Dermatoglyphics"), true );
assert.strictEqual( isIsogram("isogram"), true );
note: its not considered an isogram if the letters repeat but are a different case
P
need to be able to compare whether the string that's coming into the function has characters that have been repeated (not considered
    a repeat if the letters are a dif casing)

    need to be able to iterate through the string
    need to be able to compare each string character to each other
    then return true or false

    take in the string iterate through it
    push characters into a new array if they're not the same characters (use new set)
    then compare the new arr to the original arr if they arent equal return false if they are return true
    an isogram has no repeating letters (return true)
    else return false

*/

function isIsogram(str){
    let arr= str.split('')
    console.log(arr)
    let set = new Set(arr)
    let gotRidofDuplicates= [...set]
     if( arr.length === gotRidofDuplicates.size || str === ''){
       return true
     }else{
       return false
     }
    }