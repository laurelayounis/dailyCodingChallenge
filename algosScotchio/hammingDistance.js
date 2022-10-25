/*

The hamming distance between two strings of equal length is the number of positions at which these strings vary.
 In more technical terms, it is a measure of the minimum number of changes required to turn one string into another.


 As clearly stipulated in the challenge statement, our function would receive two string arguments of equal length.

The strings received must be of equal length, hence it is reasonable for us to check that the strings passed in as arguments meet this requirement before any comparison occurs.

Next, We would need to compare every character in the first string with the character holding their
 corresponding position in the second string. This helps us identify the points where differences 
 exist as it is the total count of these instances that gives us the hamming distance.

Bear in mind that lowercase a will differ from it's uppercase character A, hence all our comparisons must be done in a common case.

*/
/*

Hamming Distance
The Hamming distance between two strings of equal length is the number of positions at which the corresponding symbols are different.

For example, consider the following strings −

const str1 = 'delhi';
const str2 = 'delph';
The Hamming Distance of these strings is 2 because the fourth and the fifth characters of the strings are different. And obviously in order to calculate the Hamming Distance we need to have two strings of equal lengths.

Therefore, we are required to write a JavaScript function that takes in two strings, let’s say str1 and str2, and returns their hamming distance.

*/


const str1 = 'delhi';
const str2 = 'delph';
const hammingDistance = (str1 = '', str2 = '') => {
   if (str1.length !== str2.length) {
      return 0;
   }
   let dist = 0;


   //additional solution 

function hammingDistance(stringA, stringB) {
    let result = 0

    if (stringA.length == stringB.length) {

        for (let i = 0; i < stringA.length; i++) {
            if (stringA++[++i].toLowerCase() != stringB++[++i].toLowerCase()) {
                result++
            }
        }

        return result

    } else {
        throw new Error('Strings do not have equal length')
    }
}
