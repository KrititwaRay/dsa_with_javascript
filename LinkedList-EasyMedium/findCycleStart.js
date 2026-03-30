class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

let head = null;

head = new Node(10)
let first = new Node(20)
let second = new Node(30)
let third = new Node(40)
let firth = new Node(50)

head.next = first;
first.next = second;
second.next = third;
third.next = firth;
firth.next = first;



function findCycleStart(head) {
    if (!head) return null;

    let slow = head;
    let fast = head;

    while(fast && fast.next){

        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast) {

            let part1 = head;
            let part2 = slow;

            while(part1 != part2){
                part1 = part1.next;
                part2 = part2.next;
            }

            return part1.val

        }
    }

  return null


  /* 
  
  Time Complexity: O(n)
  Space Complexity: O(1)
  
  */

}


let result = findCycleStart(head);
console.log("result ", result);