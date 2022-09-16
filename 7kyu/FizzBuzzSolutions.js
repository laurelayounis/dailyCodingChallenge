
//Fizzbuzz

function fizzbuzz(n){
    let newArr= []
    for(let i= 1 ; i <= n ; i++){
      if(i % 3 === 0 && i % 5 === 0){
        newArr.push("FizzBuzz")
      }else if(i % 3 === 0){
        newArr.push("Fizz")
      }else if( i % 5 === 0){
        newArr.push("Buzz")
      }else{
        newArr.push(i)
      }
    }
     return newArr
   }


   // this solution returns the last results of i as a string instead of a number
const fizzBuzz = n => {
    let count = 1
    let results = []
    while(count <= n) {
        if(count % 3 === 0 && count % 5 === 0) {
            results.push("FizzBuzz")
        } else if(count % 3 === 0) {
            results.push("Fizz")
        } else if(count % 5 === 0) {
            results.push("Buzz")
        } else {
            results.push(count.toString())
        }
        count++
    }
    return results
};

