/*
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument 
and return the two highest numbers within the array. The returned value should be an array in the format
 [second oldest age,  oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

For example (Input --> Output):

[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]

P an array (of positive nums) in any order, min number of elements in the array is 2
R an array with the 2 highest nums (positive num) in the format [second oldest age, oldest age]
E 

[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]


P 
//go through the array and organize it from lowest to highest using sort()
//grab the last 2 indexes off of the array 
//return the last 2 indexes off the array as a new array

*/



function twoOldestAges(ages){

    const sortedArr = ages.sort((a, b) => b - a)
     return [sortedArr[1], sortedArr[0]]
    
   }


twoOldest([1, 5, 87, 45, 8, 8]) //[45, 87]
twoOldest(1, 3, 10, 0) //[3, 10]


//refactored with slice

function twoOldestAges(ages){
    //use .slice(-2) to slice backwards and grab the last and second to last neg index 
    return ages.sort(function(a,b){return a-b;}).slice(-2);
  }


 