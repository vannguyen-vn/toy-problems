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
    /*
    get index via hashing function
    update size
    get bucket
    if exists, override
      loop through storage and override with newly inputted key value pairs
    if does not exist
      create new bucket
      add value into newly created bucket

    check if need to resize
      adding to hash table
      double limit by calling resize when the total number of items stored is greater than 3/4th of the
      number of slots in the storage array.
    */

    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index];

    if (bucket) {
      for (var i = 0; i < bucket.size; i++) {
        if (storage[i][0] === key) {
          storage[i][1] = value;
        }
      }
    } else {
      storage[index] = [];
      storage[index].push([key, value]);
      size++;
    }

    if (size >= (0.75 * storageLimit)) {
      storage.resize(2 * storageLimit);
    }
  };

  result.retrieve = function (key) {
    /*
    get index via hash function
    get bucket corresponding to hashed index

    if bucket exists
      loop through bucket size
        check if the bucket key matches the input key
          if matched, return value

    return undefined
    */

    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index];

    if (bucket) {
      for (var i = 0; i < bucket.size; i++) {
        if (storage[i][0] === key) {
          return storage[i][1];
        }
      }
    }
    return undefined;
  };

  result.remove = function (key) {
    /*
    get hashed index via hashing function
    get bucket in storage

    if bucket exists
      loop through bucket
        check if key in bucket equals the input key
        if matched
          spice by one at the index
          decrement size

    check if need to resize
      half storage limit by calling resize by half whenever utilization drops below 1/4.
    */

    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index];

    if (bucket) {
      for (var i = 0; i < bucket.size; i++) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1);
          size--;
        }
      }
    }

    if (size < (0.25 * storageLimit)) {
      storage.resize(0.5 * storageLimit);
    }
  };


  result.resize = function (newLimit) {
    /*
    save reference to storage
    set storage limit to new limit
    empty storage array

    loop through old storage
      get old bucket
        loop through bucket
          get new hashed index using the new limit
          get bucket with hashed index from new storage
            if bucket exists
              push key value pair
            else
              create new array
              then push key value pair
    */


    var oldStorage = storage;
    storageLimit = newLimit;
    storage = [];

  }


  return result;
};
