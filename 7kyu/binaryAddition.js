/*


Binary Addition

Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

//input / params are going to be 2 nums 2 inputs
// always whole positive nums
//return the 2 params added together which is their sum, the sum is converted into binary needs to be returned as a string 
//start out by adding the inputs togther to get the sum, 
//take the sum convert it to string
//use the callback in the toString(2) to convert it to binary
//return the string


solution:
//sum inputs together 
//use toString() // (2) in the toString() callback to get the radix which converts it to binary


*/

function addBinary(a,b) {
    return (a + b).toString(2)
    }


console.log(addBinary(1, 1)) //2 => 10
console.log(addBinary(5, 9 )) //14 => 1110