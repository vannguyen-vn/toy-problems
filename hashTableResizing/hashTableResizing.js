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

// var resize = function(oldSize, stoRage) {
//     var oldStorage = stoRage;
//     console.log(oldStorage);
//     var newResult = makeHashTable();
//     var newStorage = [];
//     var newStorageLimit = oldSize * 2;
//     var newSize = 0;
//     for (var i = 0; i < oldStorage.length; i++) {
//       var s = oldStorage[i];
//       if (s !== undefined) {
//         for (var j = 0; j < s.length; j++) {
//           var tuple = s[j];
//           newResult.insert(tuple[0]);
//         }
//       } else {
//         continue;
//       }
//     }
//     return newResult;
//   }


var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;


  result.insert = function(str) {
    var index = getIndexBelowMaxForKey(str, storageLimit);
    var currentBucket = storage[index];
    var tuple = [];
    tuple.push(str);
    //console.log(tuple);
    if (currentBucket === undefined) {
      var newBucket = [];
      newBucket.push(tuple);
      //console.log(newBucket);
      storage[index] = newBucket;
      //console.log(storage);
    } else {
      storage[index].push(tuple);
    }
    size += 1;
    console.log(storage);
    //console.log(size);
    //console.log(storageLimit * 0.75);
    // if (size > storageLimit * 0.75) {
    //   //console.log(size);
    //   var oldSize = size;
    //   //console.log(oldSize);
    //   //console.log(storage);
    //   resize(oldSize, storage);
    //   //console.log(result.retrieve('hahahah'))
    //   return;
    // }
  };

  result.retrieve = function(str) {
    var index = getIndexBelowMaxForKey(str, storageLimit);
    var bucket = storage[index];
    if (!bucket) {
      return undefined;
    } else {
      var ele;
      for (var i = 0; i < bucket.length; i++) {
        var currentTuple = bucket[i];
        if (currentTuple[0] === str) {
          ele = currentTuple[0];
        }
      }
    }
    return ele;
  };

  result.remove = function(str) {
    var index = getIndexBelowMaxForKey(str, storageLimit);
    var bucket = storage[index];
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === str) {
        var currIndex = i;
        bucket.splice(currIndex, 1);
        size -= 1;
        // if (size < storageLimit * 0.25) {
        //   var oldSize = size;
        //   result = result.resize(oldSize, result);
        //   return;
        // }
        console.log(size);
      }
    }
  };

  return result;
};
var newHashTab = makeHashTable();
newHashTab.insert('h', newHashTab);
newHashTab.insert('y', newHashTab);
newHashTab.insert('i', newHashTab);
newHashTab.insert('o', newHashTab);
newHashTab.remove('o');
console.log(newHashTab.retrieve('o'));