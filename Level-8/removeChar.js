//remove the first and last letter of the word 

function removeChar(str){
 
    let arr = str.split('')
    arr.shift()
    arr.pop()
    return arr.join('')
  
  };
  

  //or 

  function removeChar(str) {
    return str.slice(1, -1);
  }