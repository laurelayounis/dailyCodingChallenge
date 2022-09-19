/*

You will be given an array and a limit value. 
You must check that all values in the array are below or equal to the limit value. 
If they are, return true. Else, return false.

You can assume all values in the array are numbers.

P 2 parameters: an array which contains whole positive number(s), a positive number that we are comparing our elements in our array to (which we are assigning to the var limit)
R returning either true or retuning false
E    assert.strictEqual(smallEnough([66, 101], 200), true);
    assert.strictEqual(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
P 
iterate through the elements of the array
do a comparison check to whether all the values in the array are less than or equal the (limit value aka num) we are passing in
return true if all array elements are less than or equal to the limit
return false if all array elements are not less than or equal to the limit


*/

function smallEnough(a, limit){
    for(let i = 0; i < a.length; i++){
      if(a[i] > limit){
        return false
      }
    }
      return true
    }



    //alt solution
    function smallEnough(array, limit){
        return array.filter( (value) => value > limit ).length > 0 ? false : true;
    }

//
const smallEnough = ($, limit) => $.every(el => el <= limit)

//

function smallEnough(a, limit){
    return a.every(x => x <= limit);
  }

  //
  smallEnough = (a, l) => a.every(e => e <= l)

  //

  function smallEnough(a, limit){
    return Math.max(...a) <= limit
  }