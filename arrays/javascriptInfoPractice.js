/*
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.
*/

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

function camelize(str){
    return str
        .split('-')  //splits 'my-long-word' into an array ['my', 'long', 'word]
        .map(
            //captalizes the first letters of all array items except the first one
            //converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
            //concats them together (the uppercased index 0 + the slice of the rest of the arr starting from index 1)
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        //joins ['my', 'Long', 'Word'] into 'myLongWord'
        .join('')
}


//without the comments

function camelize(str){
    return str
        .split('-')
        .map((word, index) => index == 0 ? word: word[0].toUpperCase() + word.slice(1))
        .join('')
}


/*
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.

*/
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)

function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      // remove if outside of the interval
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
  }
  
  
  /*
  Sort in decreasing order
importance: 4
let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order

alert( arr ); // 8, 5, 2, 1, -10
*/

