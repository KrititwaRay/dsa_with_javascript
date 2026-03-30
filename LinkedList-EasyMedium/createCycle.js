class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}


class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addToTail(val) {
        if (!this.head) {
            this.head = new Node(val);
            this.size++
            return
        }

        let current = this.head;
        let newNode = new Node(val)

        while (current.next != null) {
            current = current.next
        }

        current.next = newNode
        this.size++
    }

    createCycle(position) {
        if (!this.head || position <= 0 || position > this.size) {
            console.log("Invalid position");
            return null;
        }

        let positionNode = this.head;
        let current = this.head;

        // move to position node
        for (let i = 1; i < position; i++) {
            positionNode = positionNode.next;
        }

        // go to last node
        while (current.next) {
            current = current.next;
        }

        current.next = positionNode;

        return this.head;
    }
    cycleLength() {

        let slow = head;
        let fast = head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow === fast) {
                let count = 1;
                fast = fast.next;

                while (slow !== fast) {
                    fast = fast.next;
                    count++;
                }

                return count;
            }
        }

        return 0;
    }
}


function toArray(head, limit) {

    let arr = [];
    let count = 0;
    let current = head;

    while (current) {
        if (limit === count) break
        arr.push(current.val)
        current = current.next
        count++
    }

    console.log(arr);


}

let list = new linkedList();
list.addToTail(10);
list.addToTail(20);
list.addToTail(30);
list.addToTail(40);
list.addToTail(50);
let head = list.createCycle(2)
// toArray(head, 6)
list.cycleLength();

// console.log(JSON.stringify(list, null, 2));


 