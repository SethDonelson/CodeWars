
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
















function sumTwoSmallestNumbers(numbers) {  
    let sortedArr = numbers.sort((a,b) => (a - b))
    return (sortedArr[0] + sortedArr[1])
  }
  
  // P - whole numbers, no floats or negative, 
  // R - return sum of 2 lowest numbers
  // E - [10, 15, 3, 1] = 4
  // P - arr.sort(numbers) => (a,b)    sum sortedArr[0] + [1]