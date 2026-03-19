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
console.log(result_01)