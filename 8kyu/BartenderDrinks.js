/*

Complete the function that receives as input a string, and produces outputs according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"

*/

function getDrinkByProfession(param){
    2
    let arr =[["Jabroni", "Patron Tequila"],
    3
             ["School Counselor", "Anything with Alcohol"],
    4
             ["Programmer", "Hipster Craft Beer"],
    5
             ["Bike Gang Member", "Moonshine"],
    6
             ["Politician", "Your tax dollars"],
    7
             ["Rapper",   "Cristal"]];
    8
    let s='Beer'
    9
    arr.map(el=> {
    10
      if (param.toLowerCase()===el[0].toLowerCase()) s=el[1];
    11
    })
    12
      return s;
    13
    }




    //alt solution

    function getDrinkByProfession(param) {
        param = param.toLowerCase();
        
        switch(param) {
          case "jabroni": return "Patron Tequila";
          case "school counselor": return "Anything with Alcohol";
          case "programmer": return "Hipster Craft Beer";
          case "bike gang member": return "Moonshine";
          case "politician": return "Your tax dollars";
          case "rapper": return "Cristal";
          default: return "Beer";
        }
      }