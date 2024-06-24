// You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

// Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

// Examples
// ["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
// ["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]


//take in array
//turn into a string     array1.toString()
//split at the colon   string.slice(':')     or maybe string.split(':')
//switch value of array 1 with array 2        replace (x, with Y) maybe let str1 = array 1 split, then assign str1 to str2 position with join
//combine at the colon    join and put back into array


  function tailSwap(arr) {
    let newArr = arr
    .map(string => string.split(':'))
    return [newArr[0][0]+':'+newArr[1][1], newArr[1][0]+':'+newArr[0][1]];
  }