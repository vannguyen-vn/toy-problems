/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */


var quicksort = function(array) {

  //Base Case:
  //if the array length is 1
  //return the array

  //Recursive Case
  //for each array in the arguments object

    //store the first element in it's own array as the pivot point

    //create a slice of the input array starting with index 1

    //create a less than array
    //create a greater than array

    //for each element in the array copy
      //if the value is less than or equal to the pivot value
        //place it in the less than array
      //if the value is equal to the pivot value
        //place it in the greater than array

    //return smallerArray.concat(pivotPointArray, greaterThanArray)
};


/*
I: array
O: sorted array (new)
C: must include numbers
E:
  - 1 numbers in the array
  - 2 numbers in the array
  - empty array
  - if one of the larger/smaller arrays is empty
  - Highest number at the end / lowest number at beginning

  **Process**
  -
  - Compare



  **Example Data**
SORT 1
samepleArray = [5,3,1,2,4,7,42,6]

Pivot: [0] -> 5

larger: [7, 42, 6]

Smaller: [3,1, 2, 4]

Answer: Smaller + Pivot + Larger
        1, 2, 3, 4   +    5    +  6, 7, 42
------------------------------------------------
SORT 2A
larger: [7, 42, 6]
Pivot - large: [0] -> 7

larger: [42, 6]

Smaller: []

SORT 2 A.a
//Only 1 value in each array//
Pivot - large - large: [0] -> 42
Pivot - large - small: [0] -> 6

Answer: Smaller + Pivot + Larger
          6         7      42
//-----------------------------------------------//
SORT 2 B
Smaller: [3, 1, 2, 4]
Pivot - Small: [0] -> 3

//Only 1 value in array
larger: [4]

Smaller: [1, 2]

Answer: Smaller + Pivot + Larger
          1, 2      3    +    4

SORT 2 B.b
[1, 2]
Pivot -smaller - small: [0] -> 1

larger: [2];

smaller: [];

Answer: Smaller + Pivot + Larger
                    1   +    2


//PSEUDOCODE

//Base Case:
//if the array length is 1
  //return the array

//Recursive Case
//for each array in the arguments object

  //store the first element in it's own array as the pivot point

  //create a slice of the input array starting with index 1

  //create a less than array
  //create a greater than array

  //for each element in the array copy
    //if the value is less than or equal to the pivot value
      //place it in the less than array
    //if the value is equal to the pivot value
      //place it in the greater than array

  return smallerArray.concat(pivotPointArray, greaterThanArray)


//OTHER TEST CASES
sampleLowestFirstArray = [1,3,5,2,4,7,42,6]
sampelRepeatArray = [5,3,1,2,4,7,42,6,3]





*/