/*

Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

P : array of strings 
R : an array of strings thats sorted ordered from shortest string length to longest string length
E: ["Telescopes", "Glasses", "Eyes", "Monocles"]   => ["Eyes", "Glasses", "Monocles", "Telescopes"]
P: 
need to take in the array 
need to  sort the items in the array by each item length from smallest length to longest length
add items back into a new array that are sorted
need to return the new sorted array

*/



function sortedArrsShortestToLongest(arr){
//need to take in the array 
//need to  sort the items in the array by each item length from smallest length to longest length
//add items back into a new array that are sorted
//need to return the new sorted array

return arr.sort((a, b) => a.length - b.length)
}

