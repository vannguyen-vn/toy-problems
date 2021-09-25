/*
*
* Linked List Intersection
*
* Write a function linkedListIntersection that returns the node
* at which the intersection of two linked lists begins,
* or null if there is no such intersection.
*
* Example:
*
* Given the following two linked lists list1 and list2,
* linkedListIntersection(list1,list2) should return D
* as the node of intersection.
*
*    A → B → C
*             ↘
*               D → E → F
*             ↗
*        X → Y
*
* Given the following two linked lists list1 and list2,
* linkedListIntersection(list1,list2) should return NULL
* as there is no point of intersection.
*
*    A → B → C → D
*    X → Y → Z
*
*/

// Helper function (do not edit)
function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
};



function linkedListIntersection(list1, list2) {
  // TODO: Implement this function!
  // create values array for list1
  //   push one value at a time
  // create values array for list2
  //   push one value at a time
  // look for common values starting at end
  //   if last value is not common, return NULL
  //   if last is common, move to next-to-last
  //     keep moving left
  //     when a value isn't common, return the last (first, but started at end) common value

  var grabValues = (obj) => {
    let values = [];
    if (obj.value) {
      values.push(obj.value);
      if (obj.next) {
        grabValues(obj.next);
      }
    }
    return values;
  }

  var values1 = grabValues(list1);
  var values2 = grabValues(list2);

  var intersection = null;

  for (var i = values2.length; i >= 0;) {
    if (values1[i] === values2[i]) {
      intersection = values1[i];
      i--
    } else {
      return intersection;
    }
  }

};

// var testList1 = new Node (1);
// testList2.next = new Node (2);
// testList3.next.next = new Node (3);

// var testList2 = new Node (4);
// testList2.next = new Node (2);
// testList2.next = new Node (3);

// var testIntersection = linkedListIntersection(testList1, testList2);
// console.log(testIntersection);

