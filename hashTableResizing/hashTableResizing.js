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

  result.insert = function(key, value
) {
    // Get hashed key
    var hashedKey = getIndexBelowMaxForKey(key, storageLimit);

    // Create tuple with original key/value pair to insert
    var tuple = [key, value];

    // Check if the index at the hashed key is already populated
    // If not populated, create a new bucket which holds the tuple, and insert it at the index, upping the size
    var foundBucket = storage[hashedKey];

    if (foundBucket === undefined) {
      var bucket = [];
      bucket.push(tuple);
      storage[hashedKey] = bucket;
      size++;
    } else {
      // If already populated...
        // If key already exists at the hashed key, just update the existing value, but don't up the size
      for (var tuple = 0; tuple < foundBucket.length; tuple++) {
        var currentTuple = foundBucket[tuple];
        if (currentTuple[0] === key) {
          currentTuple[1] = value;
          return;
        }
      }
      // Otherwise just insert the tuple in the existing bucket, and up the size
      foundBucket.push(tuple);
      size++;
    }

    // If size is now too big, we need to resize
    if (size >= storageLimit * 0.75) {
      // Create a copy of the old storage, and refresh the current storage/size to a clean slate
      var oldStorage = storage.slice();
      storage = [];
      size = 0;
      // Double the storage limit
      storageLimit *= 2;
      // For each item in our original storage
      for (var bucket = 0; bucket < oldStorage.length; bucket++) {
        var currentBucket = oldStorage[bucket];
        if (Array.isArray(currentBucket)) {
          for (var tuple = 0; tuple < currentBucket.length; tuple++) {
            var currentTuple = currentBucket[tuple];
            var currentKey = currentTuple[0];
            var currentValue = currentTuple[1];
            result.insert(currentKey, currentValue);
          }
        }
      }
    }
  };

  result.retrieve = function(key
) {
    // Get hashed key
    var hashedKey = getIndexBelowMaxForKey(key, storageLimit);

    // Get the bucket at the hashed key
    var foundBucket = storage[hashedKey];

    // Iterate over each tuple in the bucket
    if (Array.isArray(foundBucket)) {
      for (var tuple = 0; tuple < foundBucket.length; tuple++) {
        var currentTuple = foundBucket[tuple];
        // If we found a match (first element of the tuple is equal to the original key), return the value stored in the second element
        if (currentTuple[0] === key) {
          return currentTuple[1];
        }
      }
    }
  };

  result.remove = function(key
) {
    // Get hashed key
    var hashedKey = getIndexBelowMaxForKey(key, storageLimit);

    // Get the bucket at the hashed key
    var foundBucket = storage[hashedKey];

    // Iterate over each tuple in the bucket
    if (Array.isArray(foundBucket)) {
      for (var tuple = 0; tuple < foundBucket.length; tuple++) {
        var currentTuple = foundBucket[tuple];
        // If we found a match, remove the entire tuple from the bucket using splice, and decrease the size
        if (currentTuple[0] === key) {
          foundBucket.splice(tuple, 1);
          size--;
          // If size is now too small, we need to resize
          if (size <= storageLimit * 0.25) {
            // Create a copy of the old storage, and refresh the current storage/size to a clean slate
            var oldStorage = storage.slice();
            storage = [];
            size = 0;
            // Halve the storage limit
            storageLimit /= 2;
            // For each item in our original storage
            for (var bucket = 0; bucket < oldStorage.length; bucket++) {
              var currentBucket = oldStorage[bucket];
              if (Array.isArray(currentBucket)) {
                for (var tuple = 0; tuple < currentBucket.length; tuple++) {
                  var currentTuple = currentBucket[tuple];
                  var currentKey = currentTuple[0];
                  var currentValue = currentTuple[1];
                  result.insert(currentKey, currentValue);
                }
              }
            }
          }
          return;
        }
      }
    }
  };

  return result;
};


// // tests
// // debugger;
// var newHashTable = makeHashTable();

// // test 1: Correctly inserts and retrieves a single value
// newHashTable.insert('a', 'one');
// console.log(newHashTable.retrieve('a'));

// // test 2: Correctly grabs the later of two values when they have the same key
// newHashTable.insert('a', 'one');
// newHashTable.insert('a', 'two');
// console.log(newHashTable.retrieve('a'));

// // test 3: Correctly deletes values
// newHashTable.insert('a', 'one');
// newHashTable.remove('a');
// // console.log(newHashTable.retrieve('a'));


// // test 4: Correctly resizes
// var newHashTable = makeHashTable();
// debugger;
// newHashTable.insert('a', 'one');
// newHashTable.insert('b', 'two');
// newHashTable.insert('c', 'three');
// newHashTable.insert('d', 'four');
// newHashTable.insert('e', 'five');
// newHashTable.insert('f', 'six');
// newHashTable.insert('g', 'seven');
// newHashTable.insert('h', 'eight');

// console.log(newHashTable.retrieve('a'));
// console.log(newHashTable.retrieve('b'));
// console.log(newHashTable.retrieve('c'));
// console.log(newHashTable.retrieve('d'));
// console.log(newHashTable.retrieve('e'));
// console.log(newHashTable.retrieve('f'));
// console.log(newHashTable.retrieve('g'));
// console.log(newHashTable.retrieve('h'));
// debugger;

// newHashTable.remove('a');
// newHashTable.remove('b');
// newHashTable.remove('c');
// newHashTable.remove('d');
// newHashTable.remove('e');
// newHashTable.remove('f');
// debugger;
// console.log(newHashTable.retrieve('g'));
// console.log(newHashTable.retrieve('h'));



// // Working basic implementation of hash table - needs to be able to resize next.
// var makeHashTable = function() {
//   var result = {};
//   var storage = [];
//   var storageLimit = 4;
//   var size = 0;

//   result.insert = function(key, value
// ) {
//     // Get hashed key
//     var hashedKey = getIndexBelowMaxForKey(key, storageLimit);

//     // Create tuple with original key/value pair to insert
//     var tuple = [key, value];

//     // Check if the index at the hashed key is already populated
//     // If not populated, create a new bucket which holds the tuple, and insert it at the index
//     var foundBucket = storage[hashedKey];

//     if (foundBucket === undefined) {
//       var bucket = [];
//       bucket.push(tuple);
//       storage[hashedKey] = bucket;
//     } else {
//       // If already populated...
//         // If key already exists at the hashed key, just update the existing value
//       for (var tuple = 0; tuple < foundBucket.length; tuple++) {
//         var currentTuple = foundBucket[tuple];
//         if (currentTuple[0] === key) {
//           currentTuple[1] = value;
//           return;
//         }
//       }
//       // Otherwise just insert the tuple in the existing bucket
//       foundBucket.push(tuple);
//     }

//   };

//   result.retrieve = function(key
// ) {
//     // Get hashed key
//     var hashedKey = getIndexBelowMaxForKey(key, storageLimit);

//     // Get the bucket at the hashed key
//     var foundBucket = storage[hashedKey];

//     // Iterate over each tuple in the bucket
//     if (Array.isArray(foundBucket)) {
//       for (var tuple = 0; tuple < foundBucket.length; tuple++) {
//         var currentTuple = foundBucket[tuple];
//         // If we found a match (first element of the tuple is equal to the original key), return the value stored in the second element
//         if (currentTuple[0] === key) {
//           return currentTuple[1];
//         }
//       }
//     }
//   };

//   result.remove = function(key
// ) {
//     // Get hashed key
//     var hashedKey = getIndexBelowMaxForKey(key, storageLimit);

//     // Get the bucket at the hashed key
//     var foundBucket = storage[hashedKey];

//     // Iterate over each tuple in the bucket
//     if (Array.isArray(foundBucket)) {
//       for (var tuple = 0; tuple < foundBucket.length; tuple++) {
//         var currentTuple = foundBucket[tuple];
//         // If we found a match, remove the entire tuple from the bucket using splice
//         if (currentTuple[0] === key) {
//           foundBucket.splice(tuple, 1);
//           return;
//         }
//       }
//     }
//   };

//   return result;
// };