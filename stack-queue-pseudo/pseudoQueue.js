'use strict';

const Node = require('./node')
const Stack = require('./stack')

class PseudoQueue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enqueue(value) {
        this.stack1.push(value);
    }

    dequeue() {

        if (this.stack2.top !== null) {
            return this.stack2.pop();
        }

        while (this.stack1.top !== null) {
            this.stack2.push(this.stack1.pop());
        }
        return this.stack2.pop();
    }

}



let pseudoQueue = new PseudoQueue();
pseudoQueue.enqueue(15);
pseudoQueue.enqueue(10);
pseudoQueue.enqueue(5);

console.log(pseudoQueue.dequeue());
console.log(pseudoQueue);

module.exports = PseudoQueue;