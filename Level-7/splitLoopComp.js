
// function fakeBin(x){
//  let final = [] 
//  let arr = x.split('')
//  for(let i=0; i<arr.length; i++){
//    if( arr[i] < 5){
//        final.push(0);
//     } else {
//       final.push(1);
//     }
//  }
//   return final.join('')
//   }

function fakeBin(x){
    let final = [];
    x.split('')
    for(let i=0; i < x.length; i++){
      if(x[i] < 5){
        final.push(0)
      } else{
        final.push(1)
      }
    }
    return final.join('')
  }
  //string of numbers, (all numbers), all positive, replace the digits
  //return '0' for digits below 5 or '1' above 5 and above
  //'12349657670'  '00001111110'
  //split to array, loop through the array, compare the values with a conditional, add to the end of new array
  //setup a new array, join together as a string with no spaces