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

//[{1: }, {7: }, {2: }, {5: }...]

var evenOccurrence = function(arr) {
  //iterate over the array, and for each item, add it to a counter object with the value as the key, and the number of times it occurs as the value
  //check if the value % 2 is true, if so, return Number(key)
  var counterArrayofObjects = [];
  var numbersSeen = [];
  for (var i = 0; i < arr.length; i++) {  //O(n)
    var currentVal = arr[i];
    if (!numbersSeen.includes(currentVal)) { //solution becomes O(n^2) yuck
      numbersSeen.push(currentVal);
      var counterObj = {};
      counterObj[currentVal] = 1;
      counterArrayofObjects.push( counterObj );
    } else {
      var indexOfOccurance = numbersSeen.indexOf(currentVal);
      counterArrayofObjects[indexOfOccurance][currentVal] ++;
    }
  }
   for (var i = 0; i < counterArrayofObjects.length; i++) {   //2*O(n^2) --> solution still O(n^2)
    var currentCount = Number(Object.values(counterArrayofObjects[i]));
    if (currentCount % 2 === 0) {
      return Number(Object.keys(counterArrayofObjects[i]));
    }
  }
  return null;
};


//[{1: }, {7: }, {2: }, {5: }...]

  //iterate over the array, and for each item, add it to a counter object with the value as the key, and the number of times it occurs as the value
  //check if the value % 2 is true, if so, return Number(key)


//This one returns the first value to occur an even number of times....which is 6!!!!!

// var evenOccurrence = function(arr) {
//   //iterate over the array, and for each item, add it to a counter object with the value as the key, and the number of times it occurs as the value
//   //check if the value % 2 is true, if so, return Number(key)
//   var counterObj = {};
//   for (var i = 0; i < arr.length; i++) {
//     var currentVal = arr[i];
//     if (!counterObj[currentVal]) {
//       counterObj[currentVal] = 1;
//     } else {
//       counterObj[currentVal] ++;
//     }
//     console.log(counterObj)
// //     if ((counterObj[currentVal] % 2) === 0) {
// //       return Number(currentVal);
// //     }
//   }
// };