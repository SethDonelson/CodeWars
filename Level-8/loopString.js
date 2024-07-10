//count sheep given a random number, print on the same line

var countSheep = function (num){
    let sheepCount = ''
    for(let i=1; i <= num; i++){
      sheepCount += (`${i} sheep...`) //need to concatenate it using variable += printout
    }
    return sheepCount
  }