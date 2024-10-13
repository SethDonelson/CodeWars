function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number; counter++){
      newArray.push(counter);
    }
    
    return newArray;
  }

  //loop was missing counter++ so I'm thinking it'd just repeat and never add up to the number entered


  //return values from a to b in an array

  function between(a, b) {
    let array = []
    for(let i= a; i <=b; i++){
      array.push(i)
    }
    return array
  }
 
 //between a and b, positive, numbers
 //return array of integers betweeen a - b
 //   1,4  = [1, 2, 3, 4]
 //count from a to b with a loop, return all numbers in count
 //for ( let i = a; i <=b; i++){