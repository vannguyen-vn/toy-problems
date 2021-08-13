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
    // TODO: implement `insert`
    //add the key and value as a nested array in the bucket (also an array, the value of a given key)
    var bucketIndex = getIndexBelowMaxForKey(key, storageLimit);
    if (result[bucketIndex]) {
      console.log(bucketIndex);
      storage[bucketIndex].push([key, value]);
    } else {
      storage[bucketIndex] = [[key, value]];
    }
    this.checkStorageAndResize();
  };

  result.retrieve = function(key) {
    // TODO: implement `retrieve`
    // given a key, convert the key to an index and then search the array at that index for the key/value pair
    var bucketIndex = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[bucketIndex];
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
  };

  result.remove = function(key) {
    // TODO: implement `remove`
    // retrieve the key-value pair [or retrieve the whole bucket?]
    var bucketIndex = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[bucketIndex];
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
      }
    }
    console.log('bucket after remove', bucket)
    storage[bucketIndex] = bucket;
    // change it or delete [I DON'T REMEMBER HOW ANY OF THIS WORKS]
    // [replace the whole bucket?]
  };

  result.checkStorageAndResize = function() {
    var slots = storage.length;
    console.log('slots in storage:', slots);
    var storedItems = 0;
    // iterate across storage
    for (var i = 0; i < storage.length; i++) {
    //  count the nested arrays in each bucket (use .length)
    //  add to total items storedItems variable
      storedItems += storage[i].length;
    }
    console.log('stored items:', storedItems);
    if (storedItems > (0.75 * slots)) {
      storageLimit *= 2;
    }
    if (storedItems < (0.25 * slots)) {
      storageLimit /= 2;
    }

  }

  return result;
};
