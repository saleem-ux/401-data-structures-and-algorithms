'use strict';

const Node = require('./node')

class BinaryTree {
    constructor(root) {
        this.root = root;
    }

    preOrder() {
        let result = [];

        let recursive = (node) => {
            result.push(node.value);
            if (node.left) {
                recursive(node.left);
            }

            if (node.right) {
                recursive(node.right);
            }
        }

        recursive(this.root);

        return result;
    }

    inOrder() {
        let result = [];

        let recursive = (node) => {
            if (node.left) {
                recursive(node.left);
            }
            result.push(node.value);

            if (node.right) {
                recursive(node.right);
            }
        }

        recursive(this.root);

        return result;
    }

    postOrder() {
        let result = [];

        let recursive = (node) => {
            if (node.left) {
                recursive(node.left);
            }
            if (node.right) {
                recursive(node.right);
            }
            result.push(node.value);
        }

        recursive(this.root);

        return result;
    }

    breadthFirst(tree) {
        if (!this.root) {
            return 'tree empty';
        }
        let array = [tree];
        let result = [];
        while (array.length > 0) {
            let current = array.shift();
            result.push(current.value);
            if (current.left == null && current.right == null) {
                continue;
            }
            if (current.left != null) {
                array.push(current.left);
            }
            if (current.right != null) {
                array.push(current.right);
            }
        }
        return result;
    }

}

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

console.log(tree.breadthFirst(one));

module.exports = BinaryTree;