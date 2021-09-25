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

// input: two linkedLists
// output: returns the value at the node where they intersect
// edge cases: if they don't intersect return null
// constraints: N/A
function linkedListIntersection(list1, list2) {
  //  for each node of linked list 1

}

// Example:
var listA = const list = {
  head: {
      value: 6
      next: {
          value: 10
          next: {
              value: 12
              next: {
                  value: 3
                  next: null
                  }
              }
          }
      }
  }

  var listB = const list = {
    head: {
        value: 7
        next: {
            value: 9
            next: {
                value: 12
                next: {
                    value: 2
                    next: null
                    }
                }
            }
        }
    }

console.log(linkedListIntersection(listA, listB) )
// console.log(linkedListIntersection(list1, list2) )