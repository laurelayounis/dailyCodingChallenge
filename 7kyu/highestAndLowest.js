
/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

P a string of numbers (can be positie or negative)
R a string of numbers the first num in in the string is the lowest number the second num in the string is the highest num
E
assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9")
P

need to split the string so we can use the numerical values of sort (transform strings to nums) make sure to split(' ') with a space so we get the
sign of the num as well

sort them from lowest to highest
join then back together
return string

*/



  function highAndLow(numbers){
  
    //                 .split(" ") takes the string of numbers & splits it into an arr
    //                  .map(Number) takes each arr item and turns it into a Number
    //                  .sort((a, b) => b - a) sorts the numbers from highest to lowest  
    const arr= numbers.split(" ").map(Number).sort((a,b) => b - a)
    // returns         arr[0] first item of the arr (highest) + " " string conversion + arr[arr.length - 1] grabs the last num of the index (the lowest)
   return arr[0] + " " + arr[arr.length - 1]
   
  
  }


  //alt solution

  function highAndLow(numbers){
    numbers = numbers.split(' ').sort((a, b)=> Number(a)-Number(b))
    return [numbers[numbers.length-1], numbers[0]].join(' ')
  }

  