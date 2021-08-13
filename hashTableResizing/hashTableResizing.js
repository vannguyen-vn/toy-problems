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
  var result = {};
  result.storage = []; //Add sub-arrays to this, equal to the storage limit
  result.storageLimit = 4;
  result.size = 0;

  while (result.storage.length < result.storageLimit) {
    result.storage.push([]);
  }


  console.log('result', result);

  result.insert = function(key, value) {
  // Check to make sure size is within bounds (implement this step later)

  // // Run the key through the hashing function.
  var index = getIndexBelowMaxForKey(key, result.storageLimit);
  // // Go to the index found at the key, access the level 1 (vertical) array
  // // Push a tupple containing key and value into vertical array
  result.storage[index].push([key, value]);

};

  result.retrieve = function(key) {
    //set var index equal to running key through hashing function
    var index = getIndexBelowMaxForKey(key, result.storageLimit)

    //Access the storageArray[index]==>result.storage[index]
      //iterate over each index in the level one (vertical array)
    for (var i = 0; i < result.storage[index].length; i++) {
      //check the value at index 0 (key) //if this matches the key for retrieval,
        var storedKey = result.storage[index][i][0]
        if (storedKey === key) {
          //Check to make sure size of table is within bounds (implement later)


          return result.storage[index][i][1] //value

        }



    }


        //end loop

        //return undefined if no value matches
  };

  result.remove = function(key) {
    //set var index equal to running key through hashing function
    //Access the storageArray[index]
      //iterate over each index in the level one (vertical array)
        //check the value at index 0 (key)
        //if this matches the key for retrieval,
          //delete the tuple
        //end loop

        //return undefined if no value matches
  };

  return result;
};

var test = makeHashTable();
console.log('emptyTest:', test);
test.insert('cat', 'dog')
test.insert('1', 2)
test.insert('true', false)
test.insert('3', 5)
test.insert('4', 6)
console.log(test.storage)
console.log('true buddy:', test.retrieve('true'))