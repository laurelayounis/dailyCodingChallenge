/*

Given a string of text, return true or false indicating whether or not the text is a palindrome. e.g


*/

function isPalindrome(text){
    return text.split('').reverse().join === text ? true : false
}




function palindromeChecker(text) {

    var reversedText = text.toLowerCase()
        .split('').reverse().join('')

    return text === reversedText
}

