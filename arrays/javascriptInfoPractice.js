/*
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.
*/

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

function camelize(str){
    return str
        .split('-')  //splits 'my-long-word' into an array ['my', 'long', 'word]
        .map(
            //captalizes the first letters of all array items except the first one
            //converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
            //concats them together (the uppercased index 0 + the slice of the rest of the arr starting from index 1)
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        //joins ['my', 'Long', 'Word'] into 'myLongWord'
        .join('')
}


//without the comments

function camelize(str){
    return str
        .split('-')
        .map((word, index) => index == 0 ? word: word[0].toUpperCase() + word.slice(1))
        .join('')
}