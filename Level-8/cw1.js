
// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

//level 8



const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
      if ((distanceToPump / mpg) <= fuelLeft){
      return true
    } else {return false
  }
  }



  // In this Kata we are passing a number (n) into a function.

  // Your code will determine if the number passed is even (or not).
  
  // The function needs to return either a true or false.
  
  // Numbers may be positive or negative, integers or floats.
  
  // Floats with decimal part non equal to zero are considered UNeven for this kata.
  
  function evenTrue(n){
   return n % 2 === 0 ? true : false;
  }

  //return number of liter drank given the hours, drinks 0.5L and hour, round down
  function litres(time) {
    return Math.floor(time * 0.5)
  }


  //make a string upper case

  function makeUpperCase(str) {
    return str.toUpperCase()
  }


  //return the argument squared

  function square(n){
    return Number(n**2)
  }


  //return response with a name added
  function greet(name){
    return `Hello, ${name} how are you doing today?`
  }

  //return hello world
  function greet(){
    return "hello world!"
  }


  //multiply by 2 
  function doubleInteger(i) {
    return i*2
  }

  //is base divisible by factor
  function checkForFactor (base, factor) {
    return base % factor == 0 ? true : false ;
  }