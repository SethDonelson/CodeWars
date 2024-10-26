const number = function (array){
  return array.map((element, index) => `${index + 1}: ${element}`)
}

const number = array => array.map((element, index) => `${index + 1}: ${element}`)


//nums starting at 1, a list of strings,   any neg, empty array is empty
//n: string   all within an array
// ["a", "b"]     ['1: a', '2:b']
//loop through each value and add the index +1, split array   