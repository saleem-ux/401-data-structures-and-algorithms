'use strict';

const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail = newNode;
            this.tail.next = newNode;
        }
        this.length++;
        return this.head;
    }

    append(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
    }

    includes(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            }
            current = currentNode.next;
        }
        return false;
    }

    toString() {
        let currentNode = this.head;
        if (!currentNode) {
            throw new Error('Linked list not exist');
        }
        let form = "";
        while (currentNode) {
            form = form + `{${currentNode.value}}--->`;
            currentNode = currentNode.next;
        }
        return (form = form + 'null')
    }
}

let firstList = new LinkedList();
firstList.insert(1);
firstList.append(2);

console.log(firstList.toString());
console.log(firstList.includes(2));

module.exports = LinkedList
