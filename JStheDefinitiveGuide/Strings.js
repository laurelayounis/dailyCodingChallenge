//methods to obtain PORTIONS of a string:

//substring()
//slice()
//split()
//substr

//examples:


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
