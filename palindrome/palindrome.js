'use strict'

const Node = require('./node')

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
            this.tail = this.head
        } else {
            this.tail = newNode;
            this.tail.next = newNode;
        }
        this.length++
        return this.head;
    }

    append(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
    }

    insertBefore(value, newValue) {
        let newNode = new Node(newValue);
        let current = this.head

        if (current.value === value) {
            newNode.next = current;
            this.head = newNode;
        }
        while (current.next) {
            if (current.next.value === value) {
                newNode.next = current.next
                current.next = newNode
                break;
            }
            current = current.next;
        }
    }

    insertAfter(value, newValue) {
        let newNode = new Node(newValue);
        let current = this.head;

        while (current) {
            if (current.value === value) {
                newNode.next = current.next;
                current.next = newNode;
                break;
            }
            current = current.next;
        }
    }

    includes(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                console.log(`${value} already in list`)
                return true
            }
            current = current.next;
        }
        console.log(`${value} not in list`);
        return false
    }

    kthFromEnd(k) {

        let newLL = [];
        let current = this.head;
        while (current) {
            newLL.push(current.value);
            current = current.next;
        }
        newLL.reverse();
        if (k >= newLL.length) {
            return 'Exception';
        } else if (k < 0) {
            return 'Exception';
        } else {
            return newLL[k]
        }
    }

    zipLists(list1, list2) {
        let zipLists = new LinkedList();
        if (!list1.head) {
            return list2;
        }
        if (!list2.head) {
            return list1;
        }
        zipLists.insert(list1.head.value);
        zipLists.append(list2.head.value);

        let currentList1 = list1.head;
        let currentList2 = list2.head;

        while (currentList1.next || currentList2.next) {
            if (currentList1.next) {
                zipLists.append(currentList1.next.value);
                currentList1 = currentList1.next;
            }
            if (currentList2.next) {
                zipLists.append(currentList2.next.value);
                currentList2 = currentList2.next;
            }
        }
        return zipLists;
    }

    palindrome() {
        let face1 = this.head;
        let face2 = this.head;
        let newArray = [];

        if (!face1) {
            return false;
        }

        while (face2.next != null && face2.next.next != null) {
            face2 = face2.next.next;
            newArray.push(face1.value);
            face1 = face1.next;
        }
        if (face2.next != null) {
            newArray.push(face1.value);
        }

        while (face1.next) {
            face1 = face1.next;
            if (newArray.pop() !== face1.value) {
                return false;
            }
        }
        return true;
    }

    toString() {
        let current = this.head;
        if (!current) {
            console.error('there is no linked list')
        }

        let listFormat = ''
        while (current) {
            listFormat = listFormat + `{${current.value}} ->`
            current = current.next
        }
        return (listFormat = listFormat + 'NULL')
    }

}

let list = new LinkedList();
list.insert(1);
list.append(3);
list.append(8);
list.append(2);

list.insertBefore(3, 5)
list.insertAfter(3, 5)
list.kthFromEnd(5)

let list1 = new LinkedList();
list1.insert(1);
list1.append(3);
list1.append(2);

let list2 = new LinkedList();
list2.insert(5);
list2.append(9);
list2.append(4);

let list3 = new LinkedList();
list.insert("h");
list.append("o");
list.append("u");
list.append("s");
list.append("e");

let list4 = new LinkedList();
list2.insert("m");
list2.append("o");
list2.append("o");
list2.append("m");

let list5 = new LinkedList();
list3.insert("t");
list3.append("a");
list3.append("c");
list3.append("o");
list3.append("c");
list3.append("a");
list3.append("t");

console.log(list3.palindrome());
console.log(list4.palindrome());
console.log(list5.palindrome());

let zipLists = list.zipLists(list1, list2)


console.log(zipLists.toString());


module.exports = LinkedList