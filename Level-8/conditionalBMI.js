
//return value based on bmi


function bmi(weight, height) {
  
    let bmiValue= (weight / (height**2))
    
    if(bmiValue <= 18.5){
      return 'Underweight'
    }else if(bmiValue <= 25.0){
      return 'Normal'
    }else if(bmiValue <= 30.0){
      return 'Overweight'
    }else {
      return 'Obese'
    } 
  }

//The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

  function setAlarm(employed, vacation){
    if (employed == true && vacation == false){
      return true
    } else{
      return false
    }
    
  }
  


//cap is total allowed on the bus, add on and wait, if enough space then return 0, otherwise return on + wait -cap
  function enough(cap, on, wait) {
    let pTotal = on + wait
    if(pTotal > cap){
      return pTotal - cap
    } else {
      return 0
    }
  }
  
  //cap is the total 
  //on and wait should add up to the cap
  //if on + wait is <= cap  return 0
  //else return cap  -  on + wait