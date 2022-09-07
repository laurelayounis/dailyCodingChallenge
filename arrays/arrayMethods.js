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