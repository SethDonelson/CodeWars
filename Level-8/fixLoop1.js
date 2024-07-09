function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number; counter++){
      newArray.push(counter);
    }
    
    return newArray;
  }

  //loop was missing counter++ so I'm thinking it'd just repeat and never add up to the number entered