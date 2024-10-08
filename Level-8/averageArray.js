
// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!



function betterThanAverage(classPoints, yourPoints) {
    //unknown array amount, get the average, compare to my score, true if above, else false
    let classAvg = classPoints.reduce((acc, c) => acc + c, 0)
    
    return yourPoints > classAvg / classPoints.length ? true : false 
  }
  


//find average of an array, empty array should return 0
  function findAverage(array) {
    if(array.length > 0){
      return array.reduce((acc, c) => acc + c) / array.length
    } else{
    return 0;
      }
  }
  