/*

.charAt()


Returns a string representing the character at a given index

*/

const str= "Hello"
str.charAt(0) //"H"




/* .charCodeAt()

Returns a number representing the UTF-16 code unit value of the character at the given index
*/

const newStr= "Hello World"
newStr.charCodeAt(0)  //72



/*  .concat()
returns a new string containing the concatenation of the given strings
*/

const str1= "Hello"
const str2= "World"

str1.concat(str2) // "Hello World"


/* .includes()
Returns true if the string contains the given string otherwise returns false
*/

const hasWorld= "Hello World"
hasWorld.includes("World") //true


/* .indexOf()
Returns the index within the string of the first occurence of the specified value or -1 if not found
*/

const str= "Hello World"
str.indexOf("World") //6
str.indexOf("here") // -1  returns -1 because here is not in the string

/* .repeat()
returns a new string which contains the specified number of copies of the string
*/

const str= "Hello"
str.repeat(3) // HelloHelloHello

/*.replace()
returns a new string with some or all matches of a reg expression replaced by a replacement string
*/

const str= "Hello World"
str.replace('l', '*') // He*lo World

/* .replaceAll()
same as replace but replaces all instances
*/

const str= "Hello World"
str.replaceAll('l', '*') //"He**o Wor*d"


/* .slice()
returns a new string containing the characters of the string from the given index to the end of the string
*/

cons str= "Hello World"
str.slice(6) // "World"


/* .split()
returns an arr of strings split at a given index
*/
const str="Hello World"
str.split(" ") // ["Hello", "World"]


/* .substring()

substring() takes parameters as (from, to)
returns a new string containing the characters of teh string from the given index to the end of the new string
*/

const str= "Hello World"
str.substring(1, 2) //el    starting from index 1 (e) take 2 characters el





