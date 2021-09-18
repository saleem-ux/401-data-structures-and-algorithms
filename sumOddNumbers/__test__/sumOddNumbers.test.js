'use strict';

const BinarySearchTree = require('../binarySearchTree');

let myBinarySearchTree;

beforeEach(() => {
  myBinarySearchTree = new BinarySearchTree();
});
describe('Binary Search Tree Working', () => {
  it('successfully instantiate an empty tree', () => {
    expect(myBinarySearchTree.root).toBeNull();
  });
  it('successfully instantiate a tree with a single root node', () => {
    myBinarySearchTree.addValue(10);
    expect(myBinarySearchTree.root.value).toEqual(10);
    expect(myBinarySearchTree.left).toBeFalsy();
    expect(myBinarySearchTree.right).toBeFalsy();
  });
  it('successfully add a left child and right child to a single root node', () => {
    myBinarySearchTree.addValue(10);
    myBinarySearchTree.addValue(5);
    myBinarySearchTree.addValue(15);
    expect(myBinarySearchTree.root.value).toEqual(10);
    expect(myBinarySearchTree.root.left.value).toEqual(5);
    expect(myBinarySearchTree.root.right.value).toEqual(15);
  });
  it('successfully add a left child and right child to a single root node', () => {
    myBinarySearchTree.addValue(10);
    myBinarySearchTree.addValue(5);
    myBinarySearchTree.addValue(15);
    expect(myBinarySearchTree.contains(5)).toBe(true);
    expect(myBinarySearchTree.contains(3)).toBe(false);
  });
 //test for sum odd numbers
  it('successfully return the sum of odd numbers', () => {
    myBinarySearchTree.addValue(10);
    myBinarySearchTree.addValue(5);
    myBinarySearchTree.addValue(15);
    myBinarySearchTree.addValue(9);
    expect(myBinarySearchTree.sumOddNumbers()).toBe(29);
  });

});