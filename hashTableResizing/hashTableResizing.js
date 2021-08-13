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
  result.storage = [];
  result._storageLimit = 4;
  result._size = 0;

  result.insert = function(key, value) {
    //generate new index
    var index = getIndexBelowMaxForKey(key, result._storageLimit);

    //create the bucket and tuple
    var bucket = [];
    var tuple = [key, value];
    //push tuple into bucket

    //if the value at the index is undefined, then put the bucket there
    //if the index already exists, then push the tuple into the bucket
    if (!result.storage[index]) {
      bucket.push(tuple);
      result._size++;
      result.storage[index] = bucket;
    } else if (result.storage[index]) {
      if (result.storage[index][key] !== undefined) {
        //if the key already exists, replace the value at the key with the new one, no need to do size++
        result.storage[index][key] = value;
      } else {
        //else push the tuple into the bucket at that storage index, size++
        result.storage[index].push(tuple);
        result._size++;

      }
    }

    if ((result._size/result._storageLimit) > 0.75) {
      result.resize(result.storage, result._storageLimit*2);
    }
    // if the length of the storage array is 75% full of tuples (ie. size var), then expand the storageLimit by a factor of two
    //call resize function

  };

  result.retrieve = function(key) {
    //give a key, return a value
    var index = getIndexBelowMaxForKey(key, result._storageLimit);
    var bucket = result.storage[index];
    if (bucket) {
      for (var i = 0; i < result.storage[index].length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    } else {
      return null;
    }

    //check if that key is present
    //return a value if that key is present
  };

  result.remove = function(key) {
    //give a key, check if that key is present
    var index = getIndexBelowMaxForKey(key, result._storageLimit);
    var bucket = result.storage[index];
    if (bucket) {
      for (var i = 0; i < result.storage[index].length; i++) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1);
          result._size--;
        }
      }
    }
    //if size/storageLength is now below 25%, resize
    if ( (result._size/result._storageLimit) < 0.25) {
      result.resize(result.storage, result._storageLimit/2);
    }

    return null;

  };

  result.resize = function(storage, newLimit) {
    //double the size if tupleCount/storageLength is >75%, and redistribute values
    //half the size if tupleCount/storageLength is <25%, and redistribute values
    var oldStorage = result.storage;
    result.storage = [];
    result._storageLimit = newLimit;
    result._size = 0;

    oldStorage.forEach(function(bucket) {
      if (bucket === undefined) { return; }
      for (var i = 0; i < bucket.length; i++) {
        var key = bucket[i][0];
        var value = bucket[i][1];
        result.insert(key, value);
      }
    });


  };

  return result;
};
