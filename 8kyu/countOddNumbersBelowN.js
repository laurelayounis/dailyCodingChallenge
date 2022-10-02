/*

Given a number n, return the number of positive odd numbers below n, EASY!

Examples (Input -> Output)
7  -> 3 (because odd numbers below 7 are [1, 3, 5])
15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
Expect large Inputs!

*/
function oddCount(n){
  return Math.floor(n/2);
}


///the above does the same thing as this but its too ineffective algo wise and times
//out so you have to use return Math.floor(n/2)
function oddCount(n){
    //need to iterate through 
    let arr=[]
    for(let i= 0 ; i < n ; i++){
      //console.log(i)
      if(i % 2 !== 0 ){
        arr.push(i)
      // console.log(arr)
  
      }
    }
    return arr.length
  }