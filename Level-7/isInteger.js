//take in a number and determine if it has a whole square root

var isSquare = function(n){
    return Number.isInteger(Math.sqrt(n))
    
  }
  
  //whole numbers#, negatives, any strings -no
  //return - printed, returned
  //example - 0 false, -3 false, 4 true
  //       Number.isInteger(num)   and Math.sqrt(num) 
