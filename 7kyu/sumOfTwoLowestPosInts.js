/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.


Parameters an array of positive integers, whole numbers greater than zero, the array has a min of 4 integers

Results:   the sum of the 2 lowest positive numbers in the array, the sum is going to return a number

Examples:
    assert.strictEqual(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13");
    assert.strictEqual(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6");
    assert.strictEqual(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 , "Sum should be 10");

Psuedocode:


function sumLowestPosNums(){

// need to sort the integers in the array (from lowest to highest)
//need to grab the first two indexes out of the array after sorted
//need to sum those 2 nums together
//return the sum

}



*/


function sumTwoSmallestNumbers(numbers){

// need to sort the integers in the array (from lowest to highest)
let newArr= numbers.sort((a, b) => a - b)
console.log(newArr)
//need to grab the first two indexes out of the array after sorted
let twoArr= [newArr[0], newArr[1]]
console.log(twoArr)
//need to sum those 2 nums together
let sum= twoArr.reduce((acc, c)=>(acc + c, 0))
console.log(sum)
//return the sum
return sum
}

sumTwoSmallestNumbers([5, 8, 12, 19, 22])


//refactored 
function sumTwoSmallestNumbers(numbers){  
    numbers = numbers.sort(function(a, b){return a - b; });
    return numbers[0] + numbers[1];
  };