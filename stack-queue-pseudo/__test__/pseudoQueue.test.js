'use strict';

const PseudoQueue = require('../pseudoQueue')


describe('PseudoQueue', () => {

    it('Can successfully enqueue into a PseudoQueue', () => {
        let pseudoQueue = new PseudoQueue();
        pseudoQueue.enqueue(9);

        expect(pseudoQueue.stack1.top.value).toBe(9);
    });

    it('Can successfully enqueue multiple values into a PseudoQueue', () => {
        let pseudoQueue = new PseudoQueue();
        pseudoQueue.enqueue(9);
        pseudoQueue.enqueue(7);
        pseudoQueue.enqueue(5);
        pseudoQueue.enqueue(3);

        expect(pseudoQueue.stack1.top.value).toBe(3);
        expect(pseudoQueue.stack1.isEmpty()).toBe(false);
    });

    it('Can successfully dequeue out of a PseudoQueue the expected value', () => {
        let pseudoQueue = new PseudoQueue();

        pseudoQueue.enqueue(9);
        pseudoQueue.enqueue(7);
        pseudoQueue.enqueue(5);
        pseudoQueue.enqueue(3);

  
        expect(pseudoQueue.dequeue()).toBe(9);
        expect(pseudoQueue.dequeue()).toBe(7);
        expect(pseudoQueue.dequeue()).toBe(5);
        expect(pseudoQueue.dequeue()).toBe(3);
        expect(pseudoQueue.dequeue()).toBe('stack is empty');

    });


    it('Calling dequeue on empty stack return exception', () => {
        let pseudoQueue = new PseudoQueue();
        expect(pseudoQueue.dequeue()).toBe('stack is empty');
      });

});