'use strict'

const Node = require('./node');
class LinkedList {
    constructor() {
        this.head = null
    }

    append(value) {
        // create a node for this value
        let newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            // reached the end of the linkedlist
            currentNode.next = newNode;
        }
    }


    kthFromEnd(k) {
        if (!this.head) {
            return 'there is no linked list'
        }

        let length = 0;
        let current = this.head;

        while (current.next) {
            length++;
            current = current.next;
        }
        if (k > length) {
            return 'the index require is not exist';
        }
        if (k < 0) {
            return "there is no linked list";
        }
        let require = length - k;
        let increment = 0;
        current = this.head
        while (current.next) {
            increment++;
            current = current.next;
            if (increment == require) {
                return current.value;
            }
        }
    }
}

module.exports = LinkedList;