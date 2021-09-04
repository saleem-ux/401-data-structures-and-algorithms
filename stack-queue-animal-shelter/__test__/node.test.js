'use strict';

const Node = require('../node');

describe('Node Module test', () => {

    it('test the constructor()', () => {
        let value = 2
        let newNode = new Node(value);
        expect(newNode.value).toBe(value);
        expect(newNode.next).toBeNull();
    })
})