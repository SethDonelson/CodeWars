
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
  