// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]



function minMax(arr){
  
    return [Math.min(...arr), Math.max(...arr)]
   }

      (...arr  copies the object you have listed without needing additional assigning )
   
   // P - given array, all positive or neg, decimals, not ordered
   // R - return min and max of array
   // E - [1,4,6,8,9] -  return [1,9]
   // P - sort the array, return [0] and [last] using unshift and pop