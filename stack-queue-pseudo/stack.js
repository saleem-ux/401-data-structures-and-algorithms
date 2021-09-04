'use strict';

const Node = require('./node')

class Stack {
    constructor() {
        this.top = null;
        this.stackSize = 0;
    }

    push(value) {

        if (this.top === null) {
            this.top = new Node(value);
        } else {
            const newNode = new Node(value);
            newNode.next = this.top
            this.top = newNode
        }
        this.stackSize++;
    }
    peek() {
        if (this.top !== null) {
            return this.top.value;
        }
        return ('the stack is empty')
    }

    pop() {
        if (this.top !== null) {
            const result = this.top;
            let popItem = this.top.value;
            this.top = result.next;
            this.stackSize--;

            return popItem;
        }
        return ('stack is empty')
    }

    isEmpty() {
        return this.stackSize === 0;
    }
}

module.exports = Stack;