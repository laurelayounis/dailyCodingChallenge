/*
Given the triangle of consecutive odd numbers:

             1                  =1
          3     5               =8     =2^3
       7     9    11            =27    =3^3
   13    15    17    19         =64     =4^3
21    23    25    27    29      =125    =5^3
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8

Parameters: input is the row number, where n starts at 1 (a triangle of consecutive odd numbers with n rows)
Results: sum of the nums in row n
Examples:
 assert.strictEqual(rowSumOddNumbers(1), 1);
    assert.strictEqual(rowSumOddNumbers(42), 74088);
Psuedocode:

the row number to the 3rd power
//

*/
function rowSumOddNumbers(n) {
	return Math.pow(n, 3)
}

//alt solution
function rowSumOddNums(n){
return (n*n*n)
}


//alt solution
let rowSumOddNumbers = n => n ** 3;