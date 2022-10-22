/*

Given a string of text, find and return the most recurring character. e.g
maxRecurringChar('aabacada') // will return 'a'

Our intention is to map characters to the number of times they exist as shown below. If we had a string of text ‘aaabbbcdcb’, we would have:

a= 3
b=4
c=2
d=1
To implement this, an object comes in very handy. We loop through the text received and add each character to a character map object as a key and the number of times it exists as a value. 
The object would look like this:
let charMap = {
    a:3,
    b:4,
    c:2,
    d:1
}

Here's how we create such an object from a string of **text**:
let charMap = {};

for (let char of text) {
    if (charMap.hasOwnProperty(char)) {
        charMap[char]++
    } else {
        charMap[char] = 1;
    }
}

Having initialized charMap to an empty object, we use a for…of loop to iterate through the string of text. 
For every character, we check if it has been mapped already(is a property of the charMap object)
 by calling the .hasOwnProperty() method on the object. If it is, we increment its value, otherwise it is 
 added as a property and its value is set to 1.

Having created our character map, we can now focus on actually solving the problem. We need to return the character that is most recurring. 

An iterable object is basically a collection of consistently formatted data. Examples include strings, arrays, array-like objects etc. 
The for…in statement iterates over all non-Symbol, enumerable properties of an object.

*/

function maxRecurringChar(text) {
    let charMap = {}
    let maxCharValue = 0
    let maxChar = ''

    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    for (let char in charMap) {
        if (charMap[char] > maxCharValue) {
            maxCharValue = charMap[char]
            maxChar = char
        }
    }

    return maxChar
}