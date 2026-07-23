class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }



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

    removeHead() {
        if (!this.head) return null;

        const removeNode = this.head;

        this.head = this.head.next

        if (!this.head) {
            this.tail = null
        }
        this.size--

        return removeNode;
    }

    removetail() {
        if (!this.head) return null;

        if (this.head === this.tail) {
            const removeNode = this.tail;
            this.head = null;
            this.tail = null;
            this.size--
            return removeNode;

        }

        let current = this.head;

        while (current.next != this.tail) {
            current = current.next
        }
        let removeNode = current.next;

        current.next = null;
        this.tail = current

        this.size--

        return removeNode;
    }


    getIndex(index) {
        if (index < 0 || index >= this.size) return;

        let current = this.head;

        for (let i = 0; i < index; i++) {
            current = current.next
        }
        return current.val;
    }

    addToIndex(index, val) {
        if (index < 0 || index > this.size) return;

        let newNode = new Node(val);

        if (index === 0) {

            newNode.next = this.head;
            this.head = newNode;

            if (this.size === 0) {
                this.tail = newNode;
            }

            this.size++;
            return;
        }

        if (index === this.size) {

            this.tail.next = newNode;
            this.tail = newNode;

            this.size++;
            return;
        }

        let current = this.head;

        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        newNode.next = current.next;
        current.next = newNode;

        this.size++;
    }


    deleteAtIndex(index) {

        if (index < 0 || index >= this.size) return;

        if (index === 0) {

            if (this.head === this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
            }

            this.size--;
            return;
        }

        let current = this.head;

        if (index === this.size - 1) {

            while (current.next !== this.tail) {
                current = current.next;
            }

            current.next = null;
            this.tail = current;

            this.size--;
            return;
        }

        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        current.next = current.next.next;
        this.size--;
    }
}

let list = new LinkedList();

list.addToHead(20)
list.addToHead(10)
list.addToTail(30)
list.addToTail(40)
// list.removeHead()
// list.removeHead()
// list.removeHead()
// list.removeHead()
// list.removetail()

// console.log(list.getIndex(2))
list.addToIndex(2, 555)
list.deleteAtIndex(3)


console.log(JSON.stringify(list, null, 2))