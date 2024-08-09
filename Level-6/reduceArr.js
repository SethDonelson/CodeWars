

//given fighter values for good and evil side, see who wins based on the number of each type of fighter in string format of good and evil,  sample '1 2 1', '2 0 0'



function goodVsEvil(good, evil){
  
    let goodArr= [1, 2, 3, 3, 4, 10]
    let evilArr= [1, 2, 2, 2, 3, 5, 10]
    
    //reduce => sum + currentValue * index value
    var good = good.split(' ').reduce((s,v,i) => s + goodArr[i] * v, 0);
    var evil = evil.split(' ').reduce((s,v,i) => s + evilArr[i] * v, 0);
  
   if(good > evil){
    return "Battle Result: Good triumphs over Evil"
  } else if(evil > good){
    return "Battle Result: Evil eradicates all trace of Good"
  } else { return "Battle Result: No victor on this battle field"}
  
  }
  
