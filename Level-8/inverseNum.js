function opposite(number) {
    if(number == +number){
      return -number
    } else{
      return +number
    }
  }

  //easier solutions
  let opposite = (number) => -number

  function opposite(number){
    return -number
  }
  
  //number can integer, decimal  (no string), pos and negative
  //the opposite of value give
  //1: -1,   -2: 2
  //take in the number and determine, determine if it's negative or positve, return the opposite
  //may a conditional    if number == +number, return +number,   else return -number