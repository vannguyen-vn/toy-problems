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

var makeHashTable = function() { //functional

  console.log('------_A_NEW_DAY_--------------------------------------------------')

  var result = {};
  result.storage = [];
  result.storageLimit = 4;
  result.size = 0;

  while (result.storage.length < result.storageLimit) {
    result.storage.push([]);
  }

  result._resize = function(increaseOrDecrease, oldLimit) {
    console.log(`resizig with ${increaseOrDecrease}!`)
    var oldLimit = oldLimit;
    var oldStorage = result.storage;

    //determines if increasing
    if (increaseOrDecrease === 'increase') {
      result.storageLimit = oldLimit * 2;
    } else if (increaseOrDecrease === 'decrease') {
      result.storageLimit = oldLimit * 0.5;
    }

    console.log('BEFORE REASSIGN', result.storage)
    result.storage = [];
    result.size = 0;
    while(result.storage.length < result.storageLimit) {
      result.storage.push([])
    }
    console.log('EMPTY RESIZE', result.storage)

    for (var i = 0; i < oldStorage.length; i++) {
      for (var j = 0; j < oldStorage[i].length; j++) { //skip if empty?

        var tuple = oldStorage[i][j]
        var key = tuple[0];
        var value = tuple[1];

        result.insert(key, value, 'resize');
      }
    }
  }

  result.insert = function(key, value, _resize) {



    var index = getIndexBelowMaxForKey(key, result.storageLimit);
    result.storage[index].push([key, value]);
    result.size ++;


    if ((!_resize) && result.size > result.storageLimit*0.75) {
      result._resize('increase', result.storageLimit)
    }
  };

  result.retrieve = function(key) {

    var index = getIndexBelowMaxForKey(key, result.storageLimit)

    for (var i = 0; i < result.storage[index].length; i++) {
      var storedKey = result.storage[index][i][0]
      if (storedKey === key) {
        return result.storage[index][i][1] //value
      }
    }
    return 'Key undefined' //return this string if key is not found

  };

  result.remove = function(key) {
    var index = getIndexBelowMaxForKey(key, result.storageLimit)

      for (var i = 0; i < result.storage[index].length; i++) {
         var storedKey = result.storage[index][i][0]
            if (storedKey === key) {
              result.storage[index].splice(i, 1) //value

              if (result.size < (result.storageLimit*0.25)) {
                result._resize('decrease', result.storageLimit)
              }

            }
        }
      return 'Key undefined' //if the key is not found in the table, return this string
  };
  return result;
};

var test = makeHashTable();
// console.log('emptyTest:', test);
test.insert('1', 1)
test.insert('2', 2)
test.insert('3', 3)
test.insert('4', 4)

// console.log('End of First Rebalance', test.storage)
test.insert('5', 5)

// console.log('After adding fifth element', test.storage)
test.insert('6', 6)
// console.log('After adding sixth element', test.storage)
test.insert('7', 7)
// console.log('After adding seventh element', test.storage)
test.remove('7')
// console.log('After removing seventh element', test.storage)
test.remove('6')
// console.log('After removing sixth element', test.storage)
test.remove('5')
test.remove('4')
console.log('After removing fourth element', test.storage)