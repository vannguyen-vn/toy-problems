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
  // Your code here.
  var counters = {};
  var itemsWithEvenCount = [];
  //iterate across array
  for (var i = 0; i < arr.length; i++) {
    var key = arr[i];
    if (counters[key] === undefined) {
      counters[key] = 1;
    } else {
      counters[key]++;
    }
  }
  for (var key in counters) {
    if (counters[key] % 2 === 0){
      var keyIndex = arr.indexOf(Number(key));
      console.log(keyIndex)
      itemsWithEvenCount.push(arr[keyIndex]);
    }
  }
  //  if it exists in the object
  //    update the count
  //  else
  //    create it in the object with value of 1
  //  if it's there an even number of times
  //    push into results array
  //return results[0]
  return itemsWithEvenCount[0];

};
