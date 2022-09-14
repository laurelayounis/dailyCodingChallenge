/*
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

P list of strings (an array of strings)

R returns each line prepended by the correct number (returns positive number that starts at 1)
with the format n: string  (need to use template literal & have space in-between n: string)
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
E
assert.deepEqual(number([]), [], 'Empty array should return empty array');
    assert.deepEqual(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"], 'Return the correct line numbers');             
P need to map the array so we can perform the operations on this : make into template literal, grab the index + 1 & return the value
*/

var num= function(arr){
    var number=function(array){
        return array.map((line, index) =>{
          return `${index + 1}: ${line}`
        })
        }
}
//alt solution
var number = function(arr) {
    var newArr = [];
      if (arr.length === 0) {
        return [];
      } else {
        for (var i = 0, len = arr.length; i < len; i += 1) {
          newArr.push((i + 1) + ': ' + arr[i]);
        }
      }
      return newArr;
    }