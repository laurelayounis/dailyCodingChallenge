/*
Write a function that checks if a given string (case insensitive) is a palindrome.

first need to normalize string by lowercasing it
then need to create a new string to compare it to
on the new string need to first lowercase it
then split to turn it into an array so can use array methods on it

*/

const isPalindrome = (x) => x.toLowerCase() === x.split("").reverse().join("").toLowerCase()