/*


Stop gninnipS My sdroW!


Write a function that takes in a string of one or more words, 
and returns the same string, 
but with all five or more letter words reversed 
(Just like the name of this Kata). Strings passed in will consist of only letters and spaces. 
Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"

P  a string of one or multiple words is being passed in, strings with multiple words will have spaces in between them
R  returning the same string that came in but with reversed words for words that have 5 or more characters
E   assert.strictEqual(spinWords("Welcome"), "emocleW");
    assert.strictEqual(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
    assert.strictEqual(spinWords("This is a test"), "This is a test");
P

need to determine the length of each word coming in,
*this is going to require me to use .split(' ') *split on the word   **note: split(' ') is going to turn the string into an array
need to then iterate through the words in the array to determine the length of each word
then do conditional 
if the word is less than 5 characters the word remains unchanged
if the word is 5 or more characters the word needs to be reversed
then need to turn the array back into a string using join()

*/

function spinWords(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }


//alt solution 

function spinWords(sentence){
    const sentenceArray = sentence.split(' ');
    let result = '';
    sentenceArray.map((str, i) => {
      if (str.length >= 5){
        sentenceArray[i] = str.split('').reverse().join('');
      } else {
        sentenceArray[i] = str;
      }
    result = sentenceArray.join(' ');
    });
  return result;
  }