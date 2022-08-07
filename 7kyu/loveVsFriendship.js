/*

If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice stronger than love :-)

The input will always be in lowercase and never be empty.

*/

//split will split it up into individual letters in the arr
//.map() creates new arr 
// e => e.charCodeAt() - 96 maps all the letters in the arr to the alphabetic mathmatical value
//.reduce((a,b) => a = b) sums up the num value to give the ending num value of the string


let wordsToMarks = s => s.split('').map( e => e.charCodeAt()- 96).reduce((a,b) => a + b)