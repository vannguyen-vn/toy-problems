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

  // instantiation to store value, index and occurence
  var makeNewElement = function(index) {
    var newElement = {};

    newElement.index = index;
    newElement.occurrence = 1;

    return newElement;
  }

  var occurrenceStorage = {};

  // create new instance for each element in input array
  for (var i = 0; i < arr.length; i++) {
    if ( arr[i] in occurrenceStorage ) {
      occurrenceStorage[arr[i]].occurrence += 1;
    } else {
      occurrenceStorage[arr[i]] = makeNewElement(i);
    }
  }

  var firstIndex = null;

  // iterate over output storage
  // filter elements of even occurence
  for (var j in occurrenceStorage) {
    if (occurrenceStorage[j].occurrence % 2 === 0) {
      // update first even occurrence value OR
      // if an earlier element is found
      if (firstIndex === null || occurrenceStorage[j].index < firstIndex) {
        firstIndex = occurrenceStorage[j].index;
    }
  }
}
  return firstIndex === null ? null :arr[firstIndex];
};
