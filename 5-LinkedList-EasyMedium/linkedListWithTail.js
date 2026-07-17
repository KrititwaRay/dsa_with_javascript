class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    // O(1)
    addToHead(val) {

        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.size++

    }

    // O(1)
    addToTail(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++
    }
}

let list = new LinkedList();

list.addToHead(20)
list.addToHead(10)
list.addToTail(555)

console.log(JSON.stringify(list, null, 2))