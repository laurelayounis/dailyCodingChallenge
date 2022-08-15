



//named function with multiple params 
function sum(a, b){
    return a + b
}


/*   converted to arrow function
step 1: remove function keyword 
step 2: assign function to a var name :
(this is because a reg function assigns a var name after the keyword function but an arrow function does not so 
you need to assign it a var name)
step 3: add in the arrow after the params
step 4: remove return keyword
step 5: remove curly braces & put everything on one line (everything after the arrow is assumed to be returned from the function)

*/


let sum2= (a, b) => a + b


/************************************************************************************************************************************* */
//named function with one param

function isPositive(number){
    return number >= 0
}



//when we only have one parameter we can also remove the ( ) around the parameter & just have the name of the parameter

let isPositive2= number => number >= 0


/************************************************************************** */


//named function wtih no params

function randomNumber(){
    return Math.random 
}

//refactored with arrow function 

randomNumber2 = () => Math.random 

/******************************************************************************* */


//anoymous function (function with no name)


document.addEventListener('click', function() {
    console.log('Click')
})

//refactored with arrow

document.addEventListener('click', () => console.log('Click'))