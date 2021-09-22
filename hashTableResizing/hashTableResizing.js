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

var makeHashTable = function() {
  var result = {};
  result.storage = [];
  result.storageLimit = 4;
  result.size = 0;

  while (result.storage.length < result.storageLimit) {
    result.storage.push([]);
  }

  result._resize = function(increaseOrDecrease, oldLimit) {
    var oldLimit = oldLimit;
    var oldStorage = result.storage;

    //determines if increasing or decreasing size
    if (increaseOrDecrease === 'increase') {
      result.storageLimit = oldLimit * 2;
    } else if (increaseOrDecrease === 'decrease') {
      result.storageLimit = oldLimit * 0.5;
    }

    //recreates table of appropriate size
    result.storage = [];
    result.size = 0;
    while(result.storage.length < result.storageLimit) {
      result.storage.push([])
    }

    //transfers values
    for (var i = 0; i < oldStorage.length; i++) {
      for (var j = 0; j < oldStorage[i].length; j++) {
        var tuple = oldStorage[i][j]
        var key = tuple[0];
        var value = tuple[1];

        result.insert(key, value, 'resize');
      }
    }
  }

  result.insert = function(key, value, _resize) {

    //generates index for top-level storage
    var index = getIndexBelowMaxForKey(key, result.storageLimit);

    //pushes tuple into correct storage array and increments table size
    result.storage[index].push([key, value]);
    result.size ++;

    //checks to confirm size of table is within bounds
    if ((!_resize) && result.size > result.storageLimit*0.75) {
      result._resize('increase', result.storageLimit)
    }
  };

  result.retrieve = function(key) {

    //generates index for top-level storage
    var index = getIndexBelowMaxForKey(key, result.storageLimit)

    //iterates over tuples at appropriate index
    for (var i = 0; i < result.storage[index].length; i++) {
      var storedKey = result.storage[index][i][0]
      if (storedKey === key) {
        return result.storage[index][i][1] //returns value associated with key
      }
    }
    return 'Key undefined' //return this string if key is not found
  };

  result.remove = function(key) {

    //generates top-storage index
    var index = getIndexBelowMaxForKey(key, result.storageLimit)

    //iterates over array at apropriate index
      for (var i = 0; i < result.storage[index].length; i++) {
         var storedKey = result.storage[index][i][0]
            if (storedKey === key) {
              //removes tuple from array and decrments size
              result.storage[index].splice(i, 1)
              result.size --;

              if (result.size < (result.storageLimit*0.25)) {
                result._resize('decrease', result.storageLimit)
              }
            }
        }
      return 'Key undefined' //if the key is not found in the table, return this string
  };

  return result; //instance of hash table
};

//For Tests
var test = makeHashTable();
test.insert('1', 1)
test.insert('2', 2)
test.insert('3', 3)
test.insert('4', 4)
console.log('After adding fourth element', test.storage)
test.remove('4')
test.remove('3', 3)
test.remove('2', 2)
console.log('After removing second element', test.storage)