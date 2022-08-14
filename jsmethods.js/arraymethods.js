pop() 
//removes the last element from the end of an array.
let fish = [ "piranha", "barracuda", "koi", "eel" ];

fish.pop(); //[ 'piranha', 'barracuda', 'koi' ]


shift() 
//removes the first element from the beginning of an array.
let fish = [ "piranha", "barracuda", "koi", "eel" ];

[ 'barracuda', 'koi', 'eel' ]


push() 
//adds a new element or elements to the end of an array.

let fish = [ "piranha", "barracuda", "koi", "eel" ];
fish.push("swordfish");   //[ 'piranha', 'barracuda', 'koi', 'eel', 'swordfish' ]


unshift() 
//adds a new element or elements to the beginning of an array.

fish.unshift("shark"); // [ 'shark', 'piranha', 'barracuda', 'koi', 'eel' ]


splice()
/*
can add or remove an item from any position in an array. A mutator method, splice() can either add or remove, or add and remove simultaneously.

splice() takes three parameters — the index number to start at, the number of items to remove, and items to add (optional).

splice(index number, number of items to remove, items to add)
splice(0, 0, "new") would add the string "new" to the beginning of an array, and delete nothing.  */




/* Add / remove items */

arr.push() // adds items to the end
arr.pop() //  extracts an item from the end
arr.shift() // extracts an item from the beginning 
arr.unshift() // adds an item to the beginning




/* insert, remove, replace elements */


.splice() 

/* it modifies an arr starting from the index start: removes deleteCount elements & then inserts elem1, ..., elemnN at their place. Returns the 
array of removed elements */

/*syntax */

arr.splice(start[ deleteCount, elem1, ...fish, elemN])

let arr = ['I', 'study', 'JavaScript']

arr.splice(1, 1) //from index 1 remove 1 element
alert(arr) // ['I','JavaScript']


//remove 3 elements and replace them with the other 2

let arr = ['I','study','Javasript','right', 'now']

arr.splice(0, 3, "let/'s", "dance")  //starting from index 0 remove 3 elements, replacing them with 'lets' 'dance'

alert(arr) // ['lets', 'dance', 'right', 'now']


/*splice() can also return the arr of removed elements */

let arr= ['I', 'study', 'JavaScript', 'right', 'now']

//remove 2 first elements

let removedArr= arr.splice(0, 2)  //starting at index 0 remove 2 elements

alert(removedArr) // ['I', 'study']       //printed out arr of removed elements

/* splice is also able to insert the elements without any removals, for that we set the deleteCount to 0 */


let arr= ['I', 'study', 'JavaScript']

arr.splice(2, 0, 'complex', 'language') // starting from index 2, delete 0, insert 'complex', 'language' starting at index 2

alert(arr) // ['I', 'study', 'complex', 'language', JavaScript]


//splice can use negative indexes 

let arr= [1, 2, 5]

arr.splice(-1, 0, 3, 4)

alert(arr) // [1, 2, 3, 4, 5]   starting at index -1 (the end of the arr), remove zero items, insert 3, then insert 4






