/*

    ACCESSING CHARACTERS

*/

//To get a character at position, pos use square brackets [pos] 
//OR
//call the method str.charAt(pos)      the first character starts from the 0 position



// ACCESS THE FIRST CHARACTER IN THE STRING:

let str= 'Hello'

alert(str[0]) //H
alert(str.charAt(0)) //H


//ACCESS THE LAST CHARACTER IN THE STRING:

let newStr= 'New Hello'
alert( str[str.length - 1] ) //o


//differences between using [] vs charAt(); when no character is found, [] returns undefinded & charAt()
//returns an empty string

let newStr2= 'Hello'
alert( str[1000] )// undefined
alert( str.charAt(1000) ) // ''




//ITERATING OVER CHARACTERS OF A STRING
//we can iterate over characters using for..of:

for(let char of "Hello"){
    alert(char) 
}

//will alert "H" "e" "l" "l" "o"  (char becomes "H" then "e" etc)


//In JS strings are immutable which means they cannot be changed, you also cant change a single char
//the workaround is to create a whole new string & assign it....

let wholeNewStr= 'Hi'
wholeNewStr= 'h' + wholeNewStr[1] //replace the string
alert( wholeNewStr ) // hi


//CHANGING CASE

alert('Interface'.toUpperCase() ) // INTERFACE
alert('Interface'.toLowerCase() ) //interface

//CHANGING THE CASE OF A SINGLE CHARACTER; you can use the index to target the char you want to change

alert('Interface'[0].toLowerCase()) // i



//SEARCHING FOR A SUBSTRING
//there are multiple ways to look for a substring within a string


//indexOf()
//looks for the substr in str, starting from the given position pos and returns the posiiton where the
//match was foudn or -1 if nothing can be found

let searchingThestr= 'Widget with id'
alert( searchingThestr.indexOf('Widget') ) // 0    because 'Widget' is found starting at index 0
alert( searchingThestr.indexOf('widget') ) //-1    returns -1 because widget is not found (search is case sensitive)

alert( searchingThestr.indexOf('id') ) // 1     'id' is found at position 1 (.idget with id)

//the optional second paramater allows us to start the search from a given position
//for instance the first occurence of 'id' is at position 1, to look for the next occurence, start the
//search from position 2

alert( searchingThestr.indexOf('id', 2)) //12

//if you want all of the occurences run the indexOf in a loop. Every new callis made with the position after
//the previous match:

let str= 'As sly as a fox, as strong as an ox'
let target= 'as' //looking for as

let pos=0
while(true){
    let foundPos= str.indexOf(target, pos)
    if(foundPos == -1 ) break;

    alert( ` Found at ${foundPos}` )
    pos= foundPos + 1 //continues the search from the next position
}

//same algo refactored

let str= 'As sly as a fox, as strong as an ox'
let target= 'as'
let pos= -1
while(pos= str.indexOf(target, pos + 1)) != -1{
 alert(pos)
}

//alerts 7, 17, 27

//in order to use indexOf() in an if/else statement you have to use ! -1 

let str= 'Widget with id'
if(str.indexOf('Widget') != -1){
    alert('We found it')
}


//MORE MODERN METHOD OF FIDING SUB STR 
/*

.includes()

*/

//str.includes(substr, pos) returns true / false depending on whether str contains a substr within it
//its the right choice if we need to test for a match but dont need its position

alert( 'Widget with id'.includes('Widget')) //true
alert('Hello'.includes('Bye')) //false

//the optional second argument of str.includes() is the position to start searching from:

alert('Widget'.includes('id')) //true
alert('Widget'.includes('id', 3)) // false :from position 3 there is no 'id'

//the methods:    str.startsWith()    str.endsWith()
//do exactly what they say

alert('Widget'.startsWith('Wid')) // true: 'Widget' starts with 'Wid'
alert('Widget'.endsWith('get')) //true  :'Widget' ends with get


/*
THERE'S 3 METHODS IN JS TO GET A SUBSTRING: subtring()  substr()   slice()

*/

//slice(start[,end])   returns the part of the string from the start to (but not including) the end

let str='stringify'
alert( str.slice(0, 5) ) //'strin'  the substring from 0 to 5 not including 5
alert( str.slice(0, 1) ) // 's'  from 0 to 1 but not including 1 (only returns character at index 0)

//if there's no seconds argument provided slice() goes until the end of the string

let str= 'stringify'
alert( str.slice(2) ) //'ringify'   slices from the 2nd position until the end

//negative values for start / end are also possible. They mean the position is counted from the string end

let str= 'stringify'
//start at the 4th position from the right, end at the 1st from the right
alert( str.slice(-4, -1 ) ) //  'gif'


/*

substring(start,[, end])

returns the part of the string between start and end
*almost the same as slice but allows start to be greater than the end
*does not support neg index arguments

*/

//source https://javascript.info/string
