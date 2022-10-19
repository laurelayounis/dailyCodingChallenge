/*

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


//input is going to be an array of non-negative ints(numbers) strings
//return a new array wiht the strings filtered out
//take in the array
//iterate through the array items 
//check to see if the array items are a num or a string 
//return a new array with just the nums in it

filtered_list([1,2,'a', 'b'] )  // [1, 2]
filtered_list([1, 'a','b', 0, 15]) // [0, 15]
filtered_list([1,2, 'aasf', '1', '123', 123]) //[1, 2, 123]



*/

function filter_list(arr){
 
}

function filter_list(l) {
    return l.filter(function(element){
      return typeof element === 'number'
    })
   }

filter_list([1,2,'a', 'b'] )  // [1, 2]
filter_list([1, 'a','b', 0, 15]) // [1, 0, 15]
filter_list([1,2, 'aasf', '1', '123', 123]) //[1, 2, 123]



