
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
    numbers = numbers.split(' ')
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`
  }

function highAndLow(numbers){
  let arr = numbers.split(' ').sort((a,b) => a-b)
  return `${arr[arr.length -1]} ${arr[0]}`
}


// write the function isAnagram , if it matches then true, else is false
var isAnagram = function(test, original) {
  var t = test.toLowerCase().split('').sort().join('');
  var o = original.toLowerCase().split('').sort().join('');
  return (t==o)?true:false;
};
  
//p 2 strings test and original, do they contain the same letters, case doesn't matter
//r return true or false
//e    'foefet'  'toffee'  true,   'Bucket' - 'tebUck' is true
//split the string, toLowercase, contains all , may need to loop through each letter and check the comparison
//may write        function isAnagram(test, original){}




//sort the array and return lowest and highest number
function minMax(arr){
   let sorted = arr.sort((a,b) => a-b)
  return [sorted[0], sorted[arr.length-1]]
}

function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)]
}