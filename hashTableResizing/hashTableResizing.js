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
   var index = getIndexBelowMaxForKey(key, storageLimit);

   var bucket = storage[index];

   if (!bucket) {
     bucket = []
     storage[index] = bucket
   }

   var found = false;

   for (var i = 0; i < bucket.length; i++) {
     var tuple = bucket[i];
     if (tuple[0] === key) {
       tuple[1] = value;
       found = true;
       break;
     }
   }

   if (!found) {
     bucket.push([key, value])

     size++;
     if (size > storageLimit * 0.75) {
       result.resize(storageLimit * 2);
     };
   };
 };

  result.retrieve = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);

    var bucket = storage[index];

    if (!bucket) {
        return;
    }

    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === key) {
        return tuple[1]
      }
    }
  };

  result.remove = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);

    var bucket = storage[index];


    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === k) {
        bucket.splice(i, 1);

        size--;
        if (size < storageLimit * 0.25) {
          result.resize(storageLimit / 2);
        }
        return tuple[1];
      }
    }
  };

  result.resize = function(limit) {
    var savedData = storage;

    storageLimit = limit;
    storage = [];
    size = 0;

    for (var i = 0; i < savedData.length; i++) {
      var bucket = savedData[i];
      if (bucket === undefined) {
        continue;
      }
      for (var j = 0; j < bucket.length; j++) {
        var tuple = bucket[j];
        result.insert(tuple[0], tuple[1]);
      }
    }
  }

  return result;
};