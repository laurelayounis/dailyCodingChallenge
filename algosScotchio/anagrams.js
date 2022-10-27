/*

What is an Anagram?

A word is said to be an anagram of another when it can be formed by rearranging the letters of the other word using each letter just once. E.g listen is an anagram of silent

Given two strings, write an algorithm to check if they are anagrams of each other. Return true if they pass the test and false if they don't. E.g

isAnagram('silent', 'listen') // should return true


Within the function, we compare both words to see if they contain the same characters used the same number of times. To avoid errors, we sanitize the string thus getting rid of unwanted characters and spaces since these are not letters of the alphabet.

We also convert all characters to a common letter case before carrying out any comparisons to avoid errors due to varying capitalization. Checking that both words are of the same length is also very important as this is a primary factor for a valid comparison.

Let's do this.

*/


function isAnagram(stringA, stringB) {

    function createCharMap(text) {
        let charMap = {}

        for (let char of text) {
            if (charMap.hasOwnProperty(char)) {
                charMap[char]++
            } else {
                charMap[char] = 1
            }
        }

        return charMap
    }

    if (stringA.length === stringB.length) {
        let stringAMap = createCharMap(stringA)
        let stringBMap = createCharMap(stringB)
        for (let char in stringAMap) {
            if (stringAMap[char] !== stringBMap[char]) {
                return false
            }
        }
        return true
    } else {
        return false
    }
}




//alternative ways of solving
function checkStringsAnagram(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if(len1 !== len2){
       console.log('Invalid Input');
       return
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if(str1 === str2){
       console.log("True");
    } else { 
       console.log("False");
    }
 }
 checkStringsAnagram("indian","ndiani")