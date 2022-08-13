
/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

*/


function doubleChar(str) {
    str = str.split('');
    let i = 0;

    while (i < str.length) {
        str.splice(i, 0, str[i]);
        i += 2;
    }

    return str.join('');
}
