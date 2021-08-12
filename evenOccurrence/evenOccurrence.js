/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {

  //I: array of Numbers
  //O: the first num Value, that has occured an even number of times (two)
  //make an object that holds all values of the array; for loop
  let arrayValueObj = {};
  for (var i = 0; i < arr.length; i++) {
    var currentValue = arr[i];
    if (arrayValueObj[currentValue] === undefined) {
      arrayValueObj[currentValue] = 1;
    } else {
      arrayValueObj[currentValue]++;
    }
  }
    //i believe each value in the array is converted into a string once added to the object;
  //now we have the object with the desired keys;
  //iterate through the array and if that value in the array matches the object and if its undefined add 1 else +1;
  if (Object.values(arrayValueObj) === 2) {
    return getKeyByTheValue(arrayValueObj, 2)
  }

  if (Object.values(arrayValueObj) !== 2) {
    return null;
  }


  //once thats done, we want to grab all the value of the object that are === 2,
  //lets find the indexOf those keys and see which index comes first,
    //if found, return the value of the num that comes first
    //else return null;

};

var getKeyByTheValue = function(object, value) {
  return Object.keys(object).find(key => object[key] === value)
}
