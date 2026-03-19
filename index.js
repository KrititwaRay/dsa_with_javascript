class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Create nodes
let head = new Node(1);
let second = new Node(2);
let third = new Node(3);
let fourth = new Node(4);

// Link nodes
head.next = second;
second.next = third;
third.next = fourth;

// Create a cycle (fourth points back to second)
fourth.next = second;



const hasCycle_01 = function (head) {
  if (head === null) return false
  let presentNodes = new Set()
  let current = head;

  while (current != null) {
    if (presentNodes.has(current)) {
      return true
    } else {
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



/* Floyd's Algorithm */

const hasCycle_02 = function (head) {
  if (head === null) return false
  let fast = head
  let slow = head

  while (fast && fast.next != null) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) return true
  }

  return false

  /* 
  Time Complexity: O(n)
  Space Complexity: O(1)
  */

}
const result_02 = hasCycle_02(head)
// console.log(result_02)



const hasCycle_03 = function (head) {
  if (head === null) return false
  let fast = head.next
  let slow = head

  while (slow != fast) {
    if (fast == null || fast.next === null) return false
    slow = slow.next
    fast = fast.next.next
  }

  return true

  /* 
  Time Complexity: O(n)
  Space Complexity: O(1)
  */

}
const result_03 = hasCycle_03(head)
// console.log(result_03)
