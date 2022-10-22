/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).


an array of integers, always whole nums,  positive & negative nums, always be at least one num in the arr
return the num that appears odd num of times...always only be one num thats repeated odd num of times, 
returned just the num thats repeated odd num of times % 3 === 0

*/

function findOddInt(A){

//setup obj to track frequency
let frequencyObj= {}
//for every value in the arr 
for(let i=0 ; i < A.length; i++ ){
    //add to obj & set count to 1
    if(frequencyObj[A[i]]){
        //if the key on the freq obj exists increment count by 1
        frequencyObj[A[i]]+= 1
        //if the key doesnt exist add it to the freq obj and set the count to 1
    }else{
        frequencyObj[A[i]]= 1
    }
}

//loop through obj check for odd key and return that value 
for(let key in frequencyObj){
    if(frequencyObj[key] % 2 == 1)
    //keys are alwayas returned as strings so need to return Number(key)
    return Number(key)
}

}

console.log(findOddInt([11,2,3,4,4,4,5]), 4)  
console.log(findOddInt([0,1,1,1,5]), 1)
console.log(findOddInt([1,5,5,5,5,5,7]), 5)


//alt solution using methods

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);