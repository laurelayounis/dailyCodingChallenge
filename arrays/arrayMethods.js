/*  FILTER

filter() 
doesn't mutate orig array
returns items that meet the condition declared inside the filter() method

all it does is return true or false, if its true its in the new arr if its false its not
*/


const items= [

    {name: 'Bike',  price: 100}
    {name: 'TV',  price: 200}
    {name: 'Album',  price: 10}
    {name: 'Book',  price: 5}
    {name: 'Phone',  price: 500}
    {name: 'Computer',  price: 1000}
    {name: 'Keyboard',  price: 25}
]

//Get all items in the list that are less than or equal to 100 in price

const filteredItems= items.filter((item) =>{
    return item.price <= 100
})

console.log(filteredItems) // will get back an array of items that are less than or equal to 100 








/*  MAP

.map()

takes an arr & converts it into a new arr

*/

const itemNames= items.map((item) =>{
    return item.name
})

console.log(itemNames) //just prints out the item names in a new arr ['Bike','TV', 'Album', 'Book', 'Phone' etc]


/* if we want item prices instead of names we would just change out the item.price to get an arr of the item prices instead of names */

const itemPrices= items.map((item) =>{
    return item.price
})

console.log(itemPrices)  // gives us a new arr of the item prices [100,200,10,5,500,1000,25]

//.map() is super convient when you want to take an obj & just get the names, or a single key, or take 
//on array & convert it into another arr  you'll often use this over using something like a nomral for loop









/*      FIND

.find()

allows you to find a single obj in an arr
true or false
returns the very first item in the arr that returns true for the statement that you pass into .find()
*/


const foundItem= items.find((item) =>{
    return item.name === 'Book'
})

console.log(foundItem) //{name: 'Book', price: 5}            returns the item where the statement is true








/*      FOREACH
.forEach()

unlike the other methods doesn't actually return anything
works similarly to a for loop
does whats inside of the .forEach() function for every single item (element) inside of the arr

makes working with arrs so much easier when u need to loop over them can use forEach() instead of for loop


*/


items.forEach((item) =>{
    console.log(item.name)
})

//'','','',''

items.forEach((item) =>{
    console.log(item.price)
})
//100 200 10 etc






/*  SOME


.some()

returns true or false
just checks our return value as soon as a single item returns true its going to return true for the entire thing

you can think of it like 'any' it checks to see if any item in the arr returns true & if it does the entire thing returns true
*/


const hasInexpensiveItems= items.some((item) =>{
    return item.price <= 100
})

console.log(hasInexpensiveItems)  //true


const hasFreeItems= items.some((item) =>{
    return item.price <= 0
})

console.log(hasFreeItems) //false








/*              EVERY
.every()

instead of checking for 'some' it checks to see if every single item returns true for our return statement

*/

const everyItemIsInexpensive= items.every((item) =>{
    return item.price <= 100
})

console.log(everyItemIsInexpensive) //false 


const everyItemUnderThousand= items.every((item) =>{
    return item.price <= 1000
})

console.log(everyItemUnderThousand) // true





/*              REDUCE
.reduce()

actually does an operation on the arr and returns a combo of those diff operations
it takes an item and a prop for what we want to reduce everything into

the curentTotal is the first param, the second para is the item which we are adding to the currentTotal

takes a 2nd para which is the starting pt, in the ex we are using 0 to start at 0
we take the item.price and add it to the currentTotal

useful for when you need to do some sort of operation cummulatively to all the items in an arr
*/

const total= items.reduce((currentTotal, item) =>{
    return item.price + currentTotal
}, 0)

console.log(total) //1840






/*                  INCLUDES
includes()

doesn't take a function just takes a single argument

checks if whatever we pass inside the includes() method is inside of our arr

convient for when you need to check if an arr has a certain value without needing to do a complex find()
*/


const newItems= [1, 2, 3, 4, 5]

const includesTwo= items.includes(2)
console.log(includesTwo) // true


const inlcudesSeven= items.includes(7)
console.log(inlcudesSeven) //false


//ADD OR REMOVE ITEMS

arr.push(...items) //adds items to the end
arr.pop() //extracts an item from the end
arr.shift()//extracts an item from the beginning
arr.unshift(...items)// adds items to the beginning

/*
.splice()

can do everything: insert, remove and replac elements


arr.splice(start[, deleteCount, elem1, ..., elemN])


it modifies arr starting from the index start: remove deleteCount elements and then inserts elem1, ...,elemN at their place
returns the array of removed elements

*/

//deletion using .splice()

let arr=["I", "study", "Javascript"]
arr.splice(1, 1) //startomg from index 1 remove 1 element
alert(arr) // ["I", "Javascript"]

//remove 3 elements from the arr & replace them with the other 2

let arr= ["I", "study", "Javascript", "right", "now"]
arr.splice(0, 3, "Let's", "dance") //starting at index 0 remove 3 items & replace them with "Lets" "dance"
alert(arr) // ["Let's", "dance", "right", "now"]

//return the array of removed items using .splice()
let arr= ["I", "study", "JavaScript", "right", "now"]
let removed= arr.splice(0, 2)
alert(removed) // "I", "study"

//use splice to insert elements without removing any
//you do this by setting the deleteCount to 0
let arr= ["I", "study", "JavaScript"]
//from index 2
//delete 0
//then insert "complex", "language"

arr.splice(2, 0, "complex", "language")
alert(arr)//"I", "study", "complex", "language", "JavaScript"

//.splice() allows negative indexes, they specify the position from the end of the arr

let arr= [1, 2, 5]
//from index -1 (one step from the end)
//delete 0 items
//insert 3, and 4
arr.splice(-1, 0, 3, 4)


/*
.slice()

arr.slice([start], [end])
returns a new array coping to it all items from start to end (not including end) Both start and end can be negative
in that case position from array end is assumed
its similar to the string method str.slice() BUT instead of making substrings it makes subarrays

you can also call slice() wihtout arguments to create a copy of teh array thats often used for further
transformations that dont affect the original arr

*/

let arr= ["t", "e", "s", "t"]
arr.slice(1, 3) //e,s (copy from 1 to 3)  starting from index 1, grab the elements to index 3 not incl 3
arr.slice(-2) // starting from index -2 copy from -2 until the end



/*
.concat()

creates a new array that includes values from other arrays and additional items
arr.concat(arg1, arg2)
accepts any number of arguments (either arrays or values)
the result is a new array containing items from arr, then arg1, arg2, etc
if argument argN is an array then all its elements are copied otherwise the argument itself is copied

*/

let arr= [1, 2]

//create an array from: arr and [3, 4]
arr.concat([3, 4]) //1, 2, 3, 4
//create an array from: arr and [3, 4] and [5, 6]
arr.concat([3, 4], [5, 6])  //1, 2, 3, 4, 5, 6
//create an array from: arr and [3, 4] then add values 5, 6

arr.concat([3, 4] 5, 6)  //1, 2, 3, 4, 5, 6


//normally it only copies elements from arrays, other objects even if they look like arrays are added as a whole

let arr= [1, 2]

let arrayLike= {
    0: "something",
    length: 1
}

arr.concat(arrayLike) // 1, 2, [ object Object]

//BUT if an array like obj has a special Symbol.isConcatSpreadable property then its treated as an array by conctact
// and its elements are added instead

let arr= [1, 2]

let arrayLike= {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2
}

arr.concat(arrayLike) //1, 2, something, else





/* Iterate

.forEach()

allows to run a function for every element of the array

arr.forEach(function(item, index, array){
    //...do something with item
})

*/

//call an alert for each element of the array

["Bilbo", "Gandalf", "Nazgul"].forEach(alert)

//more elaborate forEach() to show positions in the target arr
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) =>{
    alert(`${item} is at ${index} in ${array}`)
})

//the result of the function (if it returns any) is thrown away and ignored






/* SEARCHING IN AN ARRAY

.indexOf() & .includes have similar syntax & do essentialy the same at their string counterparts but
operate on items instead of characters:

indexOf()
the methods indexOf(item, from)
 - looks for item starting from index from, and returns the index where it was found 
otherwise if not found returns -1

.includes(item, from) l
-ooks for item starting from index from, returns true if found

usually these methods are used with only one argument: the item to search
By default the search is from the beginning

indexOf() uses strict equality === for comparison, so if we look for false it finds exactly false and not the zero

*if we want to check if item exists in the array & dont need the exact index then arr.includes() is preferred

.lastIndexOf() is the same as indexOf() but looks from left to right
*/

let arr= [1, 0, false]

alert( arr.indexOf(0) )// 1
alert( arr.indexOf(false) )//2
alert( arr.indexOf(null) )// -1   (returns -1 because null isnt in the arr)

arr.includes(1) //true
arr.includes(null)  //false

let fruits= ['Apple', 'Orange', 'Apple']

alert( fruits.indexOf('Apple') )// 0 (alerts the first instance of apple is index 0)
alert( fruits.lastIndexOf('Apple') ) // 2 (alerts the last instance of apple since it starts from left to right)

//includes() handles NaN correctly unlike indexOf() because includes() was added to JS later & uses comparison more correctly




/* How to find an object with a specific condition in an array

.find()
let result= arr.find(function(item, index, array)){
    //if true is returned, item is returned and iteration is stopped
    //for falsy scenario returns undefined
}

the function is called for elements of the array one after the other
-item: is the element
-index: is its index
-array: is the array itself

if it reutrns true the search is stopped, the item is returned, if nothing found undefined is returned


.findIndex() //similar syntax to .find() but returns the index where the element was found instead 
of the element itself
-1 is returned if nothing is found

.findLastIndex() is like findIndex() but searches from right to left like lastIndexOf()
*/

//we have an array of users, each with the fields id & name. Find the one with id ==1

let users= [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
]

let user= users.find(item => item.id == 1)
alert(user.name) // John


//Note: arrs of objs are common, so the find method is very useful
//in the ex we provide to find the function item=> item.id == 1  with one arg that's typical other args of find are rarely used


let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 4, name: "John"}
  ];

  //Find the index of the first John

  alert( users.findIndex(user => user.name == 'John')) //0
  alert( users.findLastIndex(user => user.name == "John")) //3


  /*
  .filter()

  .find() looks for a single(first) element that makes the function returnr true
  if there might be many we can ues .filter()
  the syntax is similar to find but filter returns an array of all matching elements
  */

  let results= arr.filter(function(item, index, array)){
    //if true item is pushed to results & the interation is continued
    //returns an empty array if nothing is found
  }

  let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];

  //return an array of the first 2 users

 let someUsers= users.filter(item => item.id < 3) 
 alert( someUsers.length) //2


 /*Transform an array

 .map()

 calls the function for each elemnent of the array & returns teh array of results

 */

 let result= arr.map(function(item, index, array) {
    //returns teh new value instead of item
 })

 //how to transform each element into its length:
 let lengths= ['Bilbo', 'Gandalf', 'Nazgul'].map(item => item.length)
 alert(lengths) //5, 6, 7


 /* .sort()
 sorts the array in place changing its element order
 returns the sorted array but the returned value is usualy ignoed as arr itself is modified
 */

 let arr= [1, 2, 15]
 arr.sort()
 alert(arr) // 1, 15, 2

 //the order isnt as expected because the items are sorted by strings as defaul (all elements are converted to strings for lexicographic comoparison)
 //to use our own sorting order, we need to supply a function as the argument 
 //the function should compare two arbitrary values & return

 function compare(a, b){
    if (a > b) return 1; //if the first value is greater than the 2nd
    if(a == b) return 0; // if the values are equal
    if(a < b) return -1; //if the firt value is less than the second
 }

 /* TO SORT AS NUMBERS */
function compareNumeric(a, b){
    if (a > b) return 1
    if (a == b) return 0
    if (a < b) return -1
}

let arr= [1, 2, 15]
arr.sort(compareNumeric)

alert(arr) // 1, 2, 15

// a comparison function is only required to return a positive num to say 'greateer' and a neg num to say 'less'
//that allows us to write shorter functions

let arr= [1, 2, 15]
arr.sort(function(a,b) {return a - b})
alert(arr) // 1, 2, 15

//use arrow functions for neater sorting
arr.sort((a, b) => a - b)



/*

use localeCompare() for strings
it compares letters by their codes by default
its better to use str.localeCompare() to correctly sort letters
*/

let countries= ['Österreich', 'Andorra', 'Vietnam'];
alert( countries.sort( (a, b) => a > b ? 1 : -1) ) // Andorra, Vietnam, Osterreich
alert( countries.sort( (a, b) => a.localeCompare(b) ) ) // Andorra, Osterreich, Vietnam


/* .reverse()

reverses the order of elements in an arr
*/
