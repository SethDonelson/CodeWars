
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//split the string at the spaces (' ')
        //map through each word and split each letter (''), reverse order, join each letter ('')
//then join the words together with a space (' ')

function reverseWords(str) {
 
    return str.split(' ').map( word => word.split('').reverse().join('')).join(' ')
  
  }



  //reverse 'world' into 'dlrow'

  function solution(str){
        return str.split('').reverse().join('')
      }


//reverse 'hello world' into 'world hello'    ()

function reverse(string){
  return string.split(' ').reverse().join(' ')
}
