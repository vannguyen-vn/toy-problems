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
    // call hashing function with key and storage limit parameters to get index

    // check if the bucket already exists in storage array
      // if not, create a bucket that will eventually hold tuples and add it to storage array at the index from earlier

    // look at what is in the bucket
      // if the key is already in the bucket
        // update its value

      // otherwise create a new tuple with the key, value pair and add it to the bucket

  };

  result.retrieve = function(key) {
    // call hashing function with key and storage limit parameters to get index

    // check if the bucket already exists in storage array
      // if not: return that the bucket is empty

    // look at what is in the bucket
      // if the key is already in the bucket
        // return the key/value pair (tuple)

      // otherwise return key was not found
  };

  result.remove = function(key) {
    // call hashing function with key and storage limit parameters to get index

    // check if the bucket already exists in storage array
      // if not: return that the bucket is empty

    // look at what is in the bucket
      // if the key is already in the bucket
        // remove that key/value pair (tuple)

      // otherwise return key was not found
  };

  return result;
};
