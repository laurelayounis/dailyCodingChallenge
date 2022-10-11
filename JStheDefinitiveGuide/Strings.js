//methods to obtain PORTIONS of a string:

//substring()    
//slice()
//split()
//substr

//examples:

let ex= "Hello, World"
ex.substring(1,4) // 'ell'  the 2nd, 3rd, and 4th characters
ex.slice(1,4)//'ell'        same thing
ex.slice(-3) // rld         the last 3 characters
ex.split(", ") // ["Hello", "World"] splits at delimiter string

//methods to SEARCH a string:

let ex2= "Hello, World"
ex2.indexOf('l') // 2       the postion of the index of the first letter l
ex2.indexOf('l', 3)// 3     the position of the index of the first l at or after index 3
ex2.lastIndexOf('l')//10    the position of the index of the last letter l

//BOOLEAN searching functions that return true or false

let ex3= "Hello, World"
ex3.startsWith("Hell")//true    the string starts with these letters
ex3.endsWith('!')// false       the string does not end with that
ex3.includes('or')//true        the string includes the substring 'or'

//Create MODIFIED versions of a string
let ex4= "Hello, World"
ex4.replace("llo", "ya") // Heya, World     it replaced the substring we told it to replace in the first param with what we gave it for the seoncd para
ex4.toLowerCase() // hello, world
ex4.toUpperCase() // HELLO, WORLD

//access individual Chacters of a string

let ex5= "Hello, World"
ex5.charAt(0) //'H'
ex5.charAt(ex5.length -1) //'d'
ex5.charCodeAt(0) // 72: 16 bit number at the specified position


//Misc string methods
"Hello World".concat("!") // Hello World!
"H".repeat(5) // HHHHH

//NOTE: strings are immutable methods olike replace() & toUpperCase() return new strings; they dont modify the string on which they're invoked
        //strings can also be treated like read only arrays & you can access individual characters from a string using square brackets [] instead of charAt()
        let s= "Hello World"
        s[0] //'H'
        s[s.length - 1] //'d'
 










//*******    substring()
let s= "Hello World"

s.substring(1,4) //'ell' this gives us the 2nd, 3rd and 4th characters

let stringSub= 'Mozilla'
stringSub.substring(1,3) //oz
stringSub.substring(2) //zilla

//you can also use substring with the length property to extract the last characters of a string

const text = 'Mozilla'
text.substring(text.legth - 4) //illa
text.substring(text.length - 5 ) //zilla


//*** substr()     : almost idential to substring() except the 2nd parameters is the length aka the amount of characteres you're wanting to grab*/

const aString = 'Mozilla';

console.log(aString.substr(0, 1));   // 'M'
console.log(aString.substr(1, 0));   // ''
console.log(aString.substr(-1, 1));  // 'a'
console.log(aString.substr(1, -1));  // ''
console.log(aString.substr(-3));     // 'lla'
console.log(aString.substr(1));      // 'ozilla'
console.log(aString.substr(-20, 2)); // 'Mo'
console.log(aString.substr(20, 2));  // ''


const str = 'Mozilla';

console.log(str.substr(1, 2));
// expected output: "oz"

console.log(str.substr(2));
// expected output: "zilla"
