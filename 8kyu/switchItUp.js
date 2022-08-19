/*
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".
*/

function switchItUp(number){
    //Write your own Code!
      if(number === 1){
        return 'One'
      }else if(number === 2){
        return 'Two'
      }else if (number === 3){
        return 'Three'
      }else if (number === 4){
        return 'Four'
      }else if (number === 5){
        return 'Five'
      }else if (number === 6 ){
        return 'Six'
      }else if (number === 7){
        return 'Seven'
      }else if (number === 8){
        return 'Eight'
      }else if(number === 9){
        return 'Nine'
      }else{
        return 'Zero'
      }


      /* terinary solution */

      (function (module) {
        function switchItUp(number) {
          return number === 0
            ? 'Zero'
              : number === 1
                ? 'One'
                  : number === 2
                    ? 'Two'
                      : number === 3
                        ? 'Three'
                          : number === 4
                            ? 'Four'
                              : number === 5
                                ? 'Five'
                                  : number === 6
                                    ? 'Six'
                                      : number === 7
                                        ? 'Seven'
                                          : number === 8
                                            ? 'Eight'
                                              : 'Nine';
        }



        