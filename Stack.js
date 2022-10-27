// Stack run time is O(1)

// Implementation of Stack

// Each node in stack contains a value of next = null

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor(value) {
        const newNode = new Node(value);
        // implement stack from top to bottom
        this.top = newNode
        this.length = 1;
    }
}
