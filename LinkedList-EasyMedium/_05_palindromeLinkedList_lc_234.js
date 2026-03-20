/* 234. Palindrome Linked List */

/*

Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Example 1:
Input: head = [1,2,2,1]
Output: true

Example 2:
Input: head = [1,2]
Output: false


Constraints:
The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9

*/
 


class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(2)
head.next.next.next.next = new Node(1)


const isPalindrome_01 = function (head) {
  

  let arr = [];
  let current = head

  while (current != null) {
    arr.push(current.val)
    current = current.next
  }

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    if (arr[start] != arr[end]) return false
    start++
    end--

  }

  return true

  /* 
  
  Time complexity: O(n) 
  Space complexity: O(n)
  
  */


}
let result_01 = isPalindrome_01(head)
// console.log(result_01)



const isPalindrome_02 = function (head) {
 
  // Find middle of linked list
  let fast = slow = head
  while (fast && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }

  // Reverse the second haf of the linked list

  let previous = null;
  let current = slow;

  while (current != null) {
    let temp = current.next
    current.next = previous
    previous = current
    current = temp
  }

  // Check palindrome
  let firstList = head
  let secondList = previous

  while (secondList != null) {

    if (firstList.val !== secondList.val) return false

    firstList = firstList.next
    secondList = secondList.next

  }

  return true

  /* 
    Time Complexity: O(n)
    Space Complexity: O(1)
  
  */


}

let result_02 = isPalindrome_02(head)
// console.log(result_02)