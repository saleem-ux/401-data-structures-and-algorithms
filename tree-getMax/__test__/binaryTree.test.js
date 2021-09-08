'use strict';

const BinaryTree = require('../binaryTree');
const Node = require('../node')

describe('test to find the maximum value', () => {
    it('return the maximum value', () => {
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);
        let seven = new Node(7);
        let eight = new Node(8);
        let nine = new Node(9);

        one.left = two;
        one.right = three;
        three.left = four;
        three.right = five;
        two.left = six;
        six.right = seven;
        seven.left = eight;
        seven.right = nine;

        let tree = new BinaryTree(one);

        expect(tree.findMaximumValue()).toEqual(9);
    });

    it('check if the tree is empty', () => {
        let tree = new BinaryTree();
        expect(tree.findMaximumValue()).toEqual('tree empty');
    });
});