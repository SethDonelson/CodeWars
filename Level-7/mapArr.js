
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

var number = function(array) {
    return array.map(function (line, index) {
      return (index + 1) + ": " + line;
    });
  }




//refer to pseudo code example below

   //better solution
function isolateIt(arr){
  var array = arr.map(function(item){
    var itemLength = item.length;
  
    if(itemLength % 2 === 0) {
     return item.slice(0,itemLength/2) + "|" + item.slice(itemLength/2);
    } else {
      return item.slice(0,itemLength/2) + "|" + item.slice(itemLength/2 +1);
    } 

  });
  return array;
}



  function isolateIt(arr){
    let splitArr = arr.map((item) => {
      const length = item.length/2;
      
      if(length%2 == 0){
       item = item.split('');
       item.splice(length, 0, '|');
       return item.join('');
      } else{
        item = item.split('');
        item.splice(length, 1, '|');
        return item.join('');
      }
      });
    return splitArr;
  }
        
  //p = given string, letters or numbers
  //r = insert | in middle of 4, replace middle letter if odd
  //e =  (['abcd', 'efghi'])  returns  ['ab|cd', 'ef|hi']
  //p =  split arr and get the length, if even then insert '|', if odd then replace middle with '|'