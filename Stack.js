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
    // push() method
    push(value) {
        // create new node
        const newNode = new Node(value);
        // handle case if stack is empty
        if (this.length === 0 ) {
            this.top = newNode;
        } else {
            this.next = newNode
        }
        this.length++;
        return this;

    }
    // pop() method
    pop(value) {
        // edge cases for stack is empty
        if (this.length === 0) return false
        let temp = this.top;
        this.top = this.top.next
        temp.next = null
        this.length--
        return temp;

    }
}
let myStack = new Stack(11)

myStack.push(3)
myStack.push(4)
myStack.pop()
myStack