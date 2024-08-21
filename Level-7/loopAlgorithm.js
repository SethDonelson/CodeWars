
//create a sequence given 3 numbers   i.e -   2, 3, 6    where 2 * 3  is multiplied by 3, 6 times 

function GeometricSequenceSum(a, r, n) {
    let sum = 0;
    let count = 1;
  
    while (count <= n) {
      sum += a * r ** (count - 1);
      ++count;
    }
    return sum
    }
  



//find number of years for principal to pass desired, taxes applied to (principal * interest) only
    function calculateYears(principal, interest, tax, desired) {
      let years = 0
      while ( principal < desired) {
         principal += (principal * interest) * (1 - tax);
         years++;
       } 
      return years
    }
    