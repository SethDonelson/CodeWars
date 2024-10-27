function contamination(text, char){
    //   let length = text.length
    //   return char.repeat(length)
      
      let arr = text.split('')
       let mutant = arr.map((text) => text = char)
      return mutant.join('')
      
    }
    
    //original text, a character,   possibly empty string, lowercase, 
    //the string as the given character, length needs to match,  return empty string if it's empty
    //'abc'  character 'z',  return 'zzz'
    //replace all letters with the char,    loop through and replace,   
    // length of the text and then repeat the char that many times and set it to a new variable