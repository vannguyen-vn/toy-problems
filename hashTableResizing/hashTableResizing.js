/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) { //return an index less than the length of the table at level 0
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
console.log('console')
var makeHashTable = function() { //functional
  var result = {};
  var storage = []; //Add sub-arrays to this, equal to the storage limit
  var storageLimit = 4;
  var size = 0;
  while (storage.length < storageLimit) {
    storage.push([]);
  }
  console.log(storage)



  result.insert = function(key, value) {
  // Check to make sure size is within bounds (implement this step later)

  // Run the key through the hashing function.
  // Go to the index found at the key
  // Access the level 1 (vertical) array
  // Push a tupple containing key and value into vertical array

};

  result.retrieve = function(/*...*/
) {
    // TODO: implement `retrieve`
  };

  result.remove = function(/*...*/
) {
    // TODO: implement `remove`
  };

  return result;
};

var test = makeHashTable();
console.log(test);