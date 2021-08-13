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
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  result.insert = function(key, value) {
    // Access hashing function via variable
    var index = getIndexBelowMaxForKey(key, storageLimit);
    // Create a bucket
    var bucket = storage[index];
    // If no bucket exists
    if (!bucket) {
      // Create a bucket
      bucket = [];
    }
    // Iterate over the bucket
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      // If our key exists in the bucket
      if (tuple[0] === key) {
        // Set the second position of the tuple equal to the value
        tuple[1] = value;
        // Break the if statement
        break;
      }
    }
    // If the tuple does not exist
    if (!tuple) {
      // Push the tuple in to the bucket
      bucket.push([key, value]);
    }
    // Handle resizing
    //
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
