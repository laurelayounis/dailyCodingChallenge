/*

Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"

*/

var greet = function(name) {
    let firstIntial = name.charAt(0).toUpperCase()
    //console.log(firstIntial)
      let scoop= name.slice(1, name.length -1 + 1).toLowerCase()
    //console.log(scoop)
    let fullName= firstIntial.split('')
    let fullLast= scoop.split('')
    let fullNameDone= fullName.concat(fullLast).join('')
    //console.log(fullNameDone)
     return `Hello ${fullNameDone}!` 
    
    
    };

    //optimized
    var greet = function(name) {
        return "Hello " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!";
      };


      