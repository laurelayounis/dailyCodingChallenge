/*

Given a sentence, return the longest word in the string. E.g
*/


function longestWord(text) {
    let wordArray = text.split(' ')
    let maxLength = 0
    let result = ''

    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > maxLength) {
            maxLength = wordArray[i].length
            result = wordArray[i]
        }
    }

    return result
}

//using sort most optimal
/*

Notice that within our compare function, we subtract the length of the second word from that to the first. This gives us a positive, negative or 0 value that determines which word is longer and by extension which should come before the other.

On completion of the sorting process, we now have a sortedArray with the words arranged in descending order according to their length. We return the word(element) occupying the first position in this array as this is the longest word.
*/

function longestWord(text) {
    var sortedArray = text.split(' ')
                          .sort((wordA, wordB) => wordB.length - wordA.length)
    return sortedArray[0]
}


