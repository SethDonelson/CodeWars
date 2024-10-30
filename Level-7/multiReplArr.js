//using loop and pushing index to new array

function nerdify(txt){
    let arr =[]
    txt.split('')
    for(let i =0; i < txt.length; i++){
      if(txt[i] == 'a' || txt[i] == 'A' ){
       arr.push(4)
      }else if(txt[i] == 'e' || txt[i] == 'E'){
        arr.push(3)
      }else if(txt[i] == 'l'){
        arr.push(1)
      }else{
        arr.push(txt[i]) 
      }
    }
     return arr.join('')
  }

  //using map and changing array
  function nerdify(txt){
  
    let arr = txt.split('').map((x) => {
     if(x == 'a' || x == 'A') return 4;
     if(x == 'e' || x == 'E') return 3;
     if(x == 'l') return 1;
     return x 
   })
   .join('')
   return arr
   }
  
 
  
  //give a string, no array, no numbers
  //returning the string with a/A as 4, e/E as 3, l as 1
  //fundamental = fund4m3nt41s
  //look at each letter, do a comparison, and replace if applicable, put back together in a string
  //split('')  for loop txt.length, if([i] == 'a' || 'A'){return 4}
  //split   txt.map((letter) =>