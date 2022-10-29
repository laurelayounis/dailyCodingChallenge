/*
Write a function that checks if a given string (case insensitive) is a palindrome.
first need to normalize string by lowercasing it
then need to create a new string to compoare it to

*/

const isPalindrome = (x) => x.toLowerCase() === x.split("").reverse().join("").toLowerCase()