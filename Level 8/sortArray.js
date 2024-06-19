//Find and return the smallest integer

function findSmallestInt(arr) {
    arr.sort((a,b) => (a-b));
    return arr[0];
  }