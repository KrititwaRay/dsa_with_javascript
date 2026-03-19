/* 141. Linked List Cycle */

/* 

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.


Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).


Example 2:
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node


Example 3:
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.

*/


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


let head = new Node(1);
let second = new Node(2);
let third = new Node(3);
let fourth = new Node(4);


head.next = second;
second.next = third;
third.next = fourth;

// create cycle
fourth.next = second;




const hasCycle_01 = function(head) {
  let presentNodes = new Set()
  let current = head;
  
  while(current != null){
    if(presentNodes.has(current)) {
      return true
    }else{
      presentNodes.add(current)
    }
    current = current.next
  }

  return false


  /* 
  
  Time Complexity: O(n)
  Space Complexity: O(n)
  
  */

    
};


let result_01 = hasCycle_01(head);
// console.log(result_01)