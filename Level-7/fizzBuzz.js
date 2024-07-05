//PREP parameter, return, example, pseudo-code
//take a number, print 1 to number, if divisible by 3 fizz, if 5 buzz, 3&5 fizzbuzz

//1 to num, 3 fizz, 5 buzz, 3&5 fizzbuzz
//Parameter - will it always be a number, will it be whole or float value, will it be pos/ neg, anything to get passed in that I haven't covered
//Return:   print to console, just return, can type out expected return in test cases






function runFizzBuzz(x){
    for( let i =1; i <= x; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log("fizzbuzz")
        } else if(i % 3 == 0 && i % 5 !== 0){
            console.log("fizz")
        } else if(i % 5 == 0 && i % 3 !== 0) {
            console.log("buzz")
        } else{
            console.log(i)
        }
    }
    }

function runFizzBuzz(x){
    //loop 
    for( let i = 1; i <=x ; i++){
        if(i % 3 ===0 && i %5 === 0){
            console.log("fizzbuzz")
        } else if (i % 3 ===0){
            console.log("fizz")
        } else if (i %5 == 0){
            console.log("buzz")
        } else{
            console.log(i)
        }
    }
    //conditionals %3&&5,  %3, %5
    //console.log num or fizz, buzz, fizzBuzz

}

//test cases
runFizzBuzz(5) //1,2, fizz, 4, buzz
runFizzBuzz(3) //1,2,fizz
runFizzBuzz(15) //1,2,fizz, 4, buzz, fizz, 7,8,fizz, buzz,11, fizz, 13, 14, fizzbuzz