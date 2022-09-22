/*

In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, 
for the sake of simplicity, 
are named with letters from a to m.

The colors used by the printer are recorded in a control string. 
For example a "good" control string would be aaabbbbhaijjjm 
meaning that the printer used three times color a, four times color b, 
one time color h then one time color a...

Sometimes there are problems: 
lack of colors, technical malfunction 
and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm 
**with letters not from a to m.

You have to write a function printer_error which 
given a string will return the error rate of the printer 
as a string representing a rational whose numerator
 is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"

P string : length greater or equal to one, only contains letters from a to z
R string thats the number of errors / and the length of the control string 
E
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"    // 0 is the num of errors 14 is the string length
P

what are the errrors?
the printer labels can only use letters from a to m.
aaaxbbbbyyhwawiwjjjwwm"
aaa  x  bbbb  yy  h   w  a  w    i   w  jjj    ww       m"      this has 8 errors in it the errors are all of the letters that arent from a to m

we need to loop through the string
find letters that aren't in the alaphabet range from a-m
we need a way of counting those up
- could add the count to a variable name so its easy to access call it stringErrors
we need to also get the length of the original string and assign it to a variable  printerString

then we need to return the variables stringErrors / printerString in the format asked for
we can use a template literal to do this `${stringErrors} / ${printerString}
*/

function printerError(s) {
    let result= 0
    for(let index in s){
      if(s[index] > 'm'){
        result ++
      }
    }
    return `${result}/${s.length}`
  }