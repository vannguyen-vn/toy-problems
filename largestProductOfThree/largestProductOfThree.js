/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

const getProduct = (objOrArr) => {
  if(typeof objOrArr === 'object'){
    let arr = Object.values(objOrArr);
    let product = arr.reduce((previous, current) => {return previous*current})
    return product;
  } else {
    arr.reduce((previous, current) => { return previous*current})
  }
}

var largestProductOfThree = function(array) {
  // TODO: everything
  // i - array
  // o - an integer
  // c -
  // e -
  let result = {
    greatest: 0, middle: 0, least: 0,
  };
  if(array.length <= 3 ){
    getProduct(array)
  }
  for(let i = 0; i < array.length; i++){
    let current = array[i];
    if(typeof current === 'string'){
      continue;
    }
    if(i === array.length){
      return getProduct(result)
    }
    if (current >= result.greatest){
      result.least = result.middle;
      result.middle = result.greatest;
      result.greatest = current;
    } else if (current > result.middle ){
      result.least = result.middle;
      result.middle = current;
    } else if (current > result.least){
      result.least = current
    }
  }
  return getProduct(Object.values(result))
};


// console.log(largestProductOfThree([2,1,3,7])) // 42