
/*

Given a number as an input, print out every integer from 1 to that number. 
However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”;
 when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

*/


function isFizzBuzz(n){
    for(let i= 0 ; i <= n ; i++){
      if(i % 15 === 0){
        console.log( 'FizzBuzz')
      }else if(i % 3 === 0){
        console.log('Fizz')
      }else if (i % 5 === 0){
        console.log('Buzz')
      }else{
      console.log(i)
      }
    }
      
    }
    
    isFizzBuzz(15) //FizzBuzz
    //isFizzBuzz(2)// 1 2
    //isFizzBuzz(3) // Fizz
    //isFizzBuzz(5) //Buzz