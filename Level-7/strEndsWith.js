
function solution(str, ending){
    return str.endsWith(ending);
  }

//couldn't rememeber ends with so I used the logic below
function solution(str, ending){
    let eEnd = ending.length   
   let stEnd = str.length   
  let bothEnd = stEnd - eEnd 
  let comp = str.slice(bothEnd, stEnd)
    
    if(comp === ending){
     return true
  } else{
    return false
  }
  }
  
  //given 2 strings, need to check if the first string has the second string as the ending
  //true if 1 ends with 2, false if 1 !==2
  //'abc', 'c'   true,   'd'=false
  //does the ending match str,   split the string into each character, compare each character
  //let eEnd = ending.length    =3
  //let stEnd = str.length    =7
  //let bothEnd = stEnd - eEnd  = 4
  //let comp = slice(bothEnd, stEnd)
  //if(comp === ending)