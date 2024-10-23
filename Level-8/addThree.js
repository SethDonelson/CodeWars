
//add the total number of goals scored at each location
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
  }



  
  function makeNegative(num) {
    if(num <=0){
      return num
    }else {
     return (-num)
     }
    
  }
  
  //given any number, pos or neg, no strings,
  //return neg even if neg, 0 is 0
  //1 =-1, 0 = 0, -5 = -5
  //check if negative, return num if yes, if not then convert