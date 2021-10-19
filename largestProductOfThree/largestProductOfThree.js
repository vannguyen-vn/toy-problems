/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

const getProduct = (objOrArr) => {
  if(!Array.isArray(objOrArr)){
    return  Object.values(objOrArr).reduce((previous, current) => {return previous*current})
  } else {
    console.log(objOrArr)
    return objOrArr.reduce((previous, current) => { return previous*current})
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
  console.log('resultObj', result)
  return getProduct(Object.values(result))
};


// console.log(largestProductOfThree([2,1,3,7])) // 42

let oneA = largestProductOfThree([2, 3, -11, 7, 5, -13]) // 1001;
let oneB = largestProductOfThree([2, 3, 11, 7, 5, 13]) // 1001;
let two = largestProductOfThree([-31, 41, 34, -37, -17, 29]) // 47027;
let twoB = largestProductOfThree([31, 41, 34, 37, 17, 29]) // 47027;
let three = largestProductOfThree([-1, -2, -3, -4, -5, -6]) //-6
let threeB = largestProductOfThree([1, 2, 3, 4, 5, 6]) //-6
let threeC = largestProductOfThree([1, 2]) //2

console.log( oneA, two, three )
console.log( oneB, twoB, threeB, threeC)
console.log(Math.max(1*2*3, 2*2*2))