/*
Given a string of text containing 0 or more vowels, count the number of vowels that can be found within the text. 
vowelsCounter('anehizxcv') // will return 3

*/


/*
 An iterative approach to counting the number of vowels in a string of text.

 First, we declared a constant "Vowels" which contained an array of the five English vowels.
Next, we make use of a for…of loop to iterate through each letter of the text. If you're not conversant with this, a for…of loop basically creates a loop iterating over iterable objects. Iterable objects could be strings, arrays, maps, sets etc. You can learn more here.
Notice how we convert all letters of the text to lowercase within the loop. This is because, we don't want to miss the instances of uppercase vowels within the passed text .
Next within the loop, we use an if statement to check if the selected letter is included in the array of vowels we defined earlier. Fittingly, we call the includes() method on the array of vowels to determine whether the array includes the selected letter, returning true or false as appropriate. Learn more about how includes() works here.
If the condition evaluates to true, we increment the counter.
After looping through we return the counter which is equivalent to the number of vowels found.
 */

 const Vowels = ["a", "e", "i", "o", "u"]

 function vowelsCounter(text) {
     // Initialize counter
     let counter = 0;
 
     // Loop through text to test if each character is a vowel
     for (let letter of text.toLowerCase()) {
         if (vowels.includes(letter)) {
             counter++
         }
     }
 
     // Return number of vowels
     return counter
 }



 