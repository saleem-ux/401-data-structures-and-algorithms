'use strict'

const LinkedList = require('../palindrome');

describe('linkedList Test', () => {

    it('the constructor initial values', () => {
        let testList = new LinkedList();
        expect(testList.head).toBeNull();
        expect(testList.tail).toBeNull();
        expect(testList.length).toBe(0);
    })

    it('test insert first node', () => {
        let testList = new LinkedList();
        testList.insert(12);
        expect(testList.head.value).toBe(12);
        expect(testList.head.next).toBeNull()
    })

    it('test insert multiple nodes', () => {
        let testList = new LinkedList();
        testList.insert(12);
        testList.append(14);
        expect(testList.head.value).toBe(12);
        expect(testList.head.next.value).toBe(14);
    })

    it('test append', () => {
        let testList = new LinkedList();
        let value1 = 1
        testList.append(value1)
        expect(testList.head.value).toBe(value1)

        let value2 = 2
        testList.append(value2)
        expect(testList.head.next.value).toBe(value2);
        expect(testList.head.next.next).toBeNull();
        expect(testList.head.value).toBe(value1);

    })

    it('test insertBefore', () => {
        let testList = new LinkedList();
        testList.insert(1);
        testList.append(3);
        testList.append(2);
        testList.insertBefore(3, 5);
        expect(testList.head.value).toBe(1);
        expect(testList.head.next.value).toBe(5);
    });

    it('test insertAfter', () => {
        let testList = new LinkedList();
        testList.insert(1);
        testList.append(3);
        testList.append(2);
        testList.insertAfter(1, 5);
        expect(testList.head.value).toBe(1);
        expect(testList.head.next.value).toBe(5);
    })

    it('check the value is include to be true', () => {
        let testList = new LinkedList;
        testList.insert(12);
        testList.append(14);
        expect(testList.includes(14)).toBe(true);
    });

    it('check the value is include to be false', () => {
        let testList = new LinkedList;
        testList.insert(12);
        testList.append(14);
        expect(testList.includes(16)).toBe(false);
    });

    it('Returns a string representing all the values in the Linked List', () => {
        let testList = new LinkedList;
        testList.insert(12);
        testList.append(14);
        expect(testList.toString()).toBe('{12} ->{14} ->NULL');
    });

    it('it check if there is no linked list', () => {
        let testList = new LinkedList;
        testList.toString()
        expect(testList.head).toBe(null);
    });

    it('Where k is greater than the length of the linked list', () => {
        let testList = new LinkedList();
        testList.insert(1);
        testList.append(3);
        testList.append(8);
        testList.append(2);
        expect(testList.kthFromEnd(6)).toBe('Exception');
    });

    it('Where k and the length of the list are the same', () => {
        let testList = new LinkedList();
        testList.insert(1);
        testList.append(3);
        testList.append(8);
        testList.append(2);
        expect(testList.kthFromEnd(4)).toBe('Exception');
    });

    it('Where k is not a positive integer', () => {
        let testList = new LinkedList();
        testList.insert(1);
        testList.append(3);
        testList.append(8);
        testList.append(2);
        expect(testList.kthFromEnd(-2)).toBe('Exception');
    });

    it('Where the linked list is of a size 1', () => {
        let testList = new LinkedList();
        testList.insert(1);
        expect(testList.kthFromEnd(0)).toBe(1);
    });

    it('Happy Path where k is not at the end, but somewhere in the middle of the linked list', () => {
        let testList = new LinkedList();
        testList.insert(1);
        testList.append(3);
        testList.append(8);
        testList.append(2);
        expect(testList.kthFromEnd(2)).toBe(3);
    });

    it('test linkedListZip when the list1 and list2 the same length', () => {
        let testList = new LinkedList();
        let testList1 = new LinkedList();
        testList1.insert(1);
        testList1.append(3);
        testList1.append(2);

        let testList2 = new LinkedList();
        testList2.insert(5);
        testList2.append(9);
        testList2.append(4);

        expect(testList.zipLists(testList1, testList2).toString()).toBe('{1} ->{5} ->{3} ->{9} ->{2} ->{4} ->NULL')
    });

    it("test zipLists when the list1 and list2 not the same length", () => {
        let testList = new LinkedList();
        let testList1 = new LinkedList();
        testList1.insert(1);
        testList1.append(3);
        testList1.append(2);

        let testList2 = new LinkedList();
        testList2.insert(5);
        testList2.append(9);

        expect(testList.zipLists(testList1, testList2).toString()).toBe('{1} ->{5} ->{3} ->{9} ->{2} ->NULL');
    });

    it("test zipLists when the list1 or list2 empty", () => {
        let testList = new LinkedList();
        let testList1 = new LinkedList();
        testList1.insert(1);
        testList1.append(3);
        testList1.append(2);

        let testList2 = new LinkedList();

        expect(testList.zipLists(testList1, testList2).toString()).toBe('{1} ->{3} ->{2} ->NULL');
    });
    it("test Linked list is palindrome", () => {
        let testList = new LinkedList();
        testList.insert("h");
        testList.append("o");
        testList.append("u");
        testList.append("s");
        testList.append("e");

        expect(testList.palindrome().toString()).toBe("false");
    });

});