

/*
Accessing Characters of strings
*/


charAt()

let greeting=  "How are you?"

greeting.charAt(5)  // r




//Return the index of the character in the string using 

indexOf()


let greeting=  "How are you?"
greeting.indexOf(H) // 0        note: if a character appears multiple times in a string this will return the index of the first time the char appears




//Return the last index that a charcter appears in a string

lastIndexOf() is used to find the last instance.

let greeting= "How are you?"

greeting.lastIndexOf("o") // 9



slice()
//The slice() method, on the other hand, returns the characters between two index numbers, not including the last index. 
//The first parameter will be the starting index number, and the second parameter will be the index number where it should end.
//If a second parameter is not included, slice() will return everything from the parameter to the end of the string.



let newGreeting= "How are you?"

newGreeting.slice(8,11) //you  (returns characters between index 8 - 10)


newGreeting.slice(8) // you ?



.length()
//finds the length of the String

newGreeting.length //12

.toUpperCase()
//makes everythign uppercase

newGreeting.toUpperCase()  //   HOW ARE YOU?

.toLowerCase()
//makes everything lower case

newGreeting.toLowerCase() //how are you ?


split()
//splitting a string by a character and 
//creating a new array out of the sections. We will use the split() method to separate the array by a whitespace character, 
//represented by " ".
//If an empty parameter is given, 
//split() will create a comma-separated array with each character in the string.

By splitting strings you can determine how many words are in a sentence, and use the method as a way to determine people’s first names and last names, for example.

const originalString = "How are you?";

// Split string by whitespace character
const splitString = originalString.split(" ");

console.log(splitString); [ 'How', 'are', 'you?' ]


 trim() 

 //removes white space from both ends of a string, but not anywhere in between. Whitespace can be tabs or spaces.

const tooMuchWhitespace = "     How are you?     ";

const trimmed = tooMuchWhitespace.trim();

console.log(trimmed);
Output
How are you?



/*
Finding and Replacing String Values
*/

.replace()

const originalString = "How are you?"

// Replace the first instance of "How" with "Where"
const newString = originalString.replace("How", "Where");

console.log(newString);
Output
Where are you?














