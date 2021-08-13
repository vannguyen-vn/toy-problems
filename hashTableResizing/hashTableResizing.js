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
var getIndexBelowMaxForKey = function (str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function () {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  result.insert = function (key, value) {
    // TODO: implement `insert`
    size++ // increase table size
    var i = getIndexBelowMaxForKey(key, storageLimit); //declare index as the output of hashing fn
    // declare bucket
    var bucket = storage[i]
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        //  add value to bucket
        if (bucket[i][0] === key) {
          bucket[i][1] = value;
        }
      }
      // otherwise the value doesnt exists so add it to bucket
      bucket.push([key, value]);
    } else {
      storage[i] = [];
      storage[i].push([key, value]);
      // if greater than 75% , resize by half (multiple my two )
    } if (size / storageLimit >= 0.75) {
      result.resize(storageLimit * 2);
    }
  };


  result.retrieve = function (key) {
    var i = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[i]
    if (bucket) {
      // iterate over bucket
      for (var i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          // if the key exists in the bucket, return the value
          return bucket[i][1]
        }
      }
    }
    // otherwise return undefined
    return undefined;
    // TODO: implement `retrieve`
  };

  result.remove = function (key) {
    var i = getIndexBelowMaxForKey(key, storageLimit)

    var bucket = storage[i];
    if (bucket) {
      // iterate over bucket

      for (let i = 0; i < bucket.length; i++) {
        // if key exists
        if (bucket[i][0] === key) {
          // decrement size
          size--
          // remove
          bucket.splice(i, 1)
        }
      }
    }
    // if the size is used less than 25% , resize (divide by 2)
    if (size / storageLimit <= 0.25) {
      result.resize(storageLimit / 2);
    }
  }

  return result;
};

