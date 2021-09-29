//complete: Sep 27

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
}



function linkedListIntersection(list1, list2) {
  // TODO: Implement this function!

  // convert list2 to an object
  var objList = {};
  var convertToObject = function(list) {
    objList[list.value] = list.value;
    if (list.next === null) {
      return;
    } else {
      convertToObject(list.next);
    }
  }

  convertToObject(list2);

  var findIntersect = function(list) {
    if (objList.hasOwnProperty(list.value)) {
      console.log(`1: ${JSON.stringify(Node(list.value))}`);
      return list;
    } else if ( list.next === null ) {
      console.log(`2: ${list.value}`);
      return null;
    } else {
      console.log(`3: ${list.value} ${list.next}`);
      return findIntersect(list.next);
    }
  }

  return findIntersect(list1);

}
/*

const ls1 = {value: 'A', next: {value: 'B', next: {value: 'C', next: {value: 'D', next: {value: 'E', next:{value: 'F', next: null}}}}}};
const ls2 = {value: 'X', next: {value: 'Y', next: {value: 'D', next: {value: 'E', next: {value: 'F', next: null}}}}};
console.log(`ls1 & ls2: ${JSON.stringify(linkedListIntersection(ls1, ls2))}`);
*/

