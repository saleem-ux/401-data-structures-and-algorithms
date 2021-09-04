'use strict';

const Queue = require('../queue')


describe('Stack Test', () => {

    it('Can successfully enqueue into a queue', () => {
        let queue = new Queue();
        queue.enqueue(9);

        expect(queue.peek()).toBe(9);
        expect(queue.front.value).toBe(9);
    });

    it('Can successfully enqueue multiple values into a queue', () => {
        let queue = new Queue();
        queue.enqueue(9);
        queue.enqueue(7);
        queue.enqueue(5);
        queue.enqueue(3);

        expect(queue.peek()).toBe(9);
        expect(queue.front.value).toBe(9);
        expect(queue.back.value).toBe(3);
    });

    it('Can successfully dequeue out of a queue the expected value', () => {
        let queue = new Queue();
        queue.enqueue(9);
        queue.enqueue(7);
        queue.enqueue(5);
        queue.enqueue(3);

        expect(queue.peek()).toBe(9);

        expect(queue.dequeue()).toBe(9);

        expect(queue.front.value).toBe(7);
        expect(queue.back.value).toBe(3);
        expect(queue.dequeue()).toBe(7);
        expect(queue.peek()).toBe(5);
    });

    it('Can successfully peek into a queue, seeing the expected value', () => {
        let queue = new Queue();
        queue.enqueue(9);
        queue.enqueue(7);
        queue.enqueue(5);
        queue.enqueue(3);

        expect(queue.peek()).toBe(9);
        expect(queue.front.value).toBe(9);
        expect(queue.back.value).toBe(3);
    });

    it('Can successfully peek into a queue, seeing the expected value', () => {
        let queue = new Queue();
        queue.enqueue(9);
        queue.enqueue(7);
        queue.enqueue(5);
        queue.enqueue(3);

        expect(queue.dequeue()).toBe(9);
        expect(queue.dequeue()).toBe(7);
        expect(queue.dequeue()).toBe(5);
        expect(queue.dequeue()).toBe(3);
        expect(queue.dequeue()).toBe('empty queue');

    });

    it('Can successfully instantiate an empty queue', () => {
        let queue = new Queue();

        expect(queue).toBeInstanceOf(Queue);
    });

    it('Can successfully instantiate an empty queue', () => {
        let queue = new Queue();

        expect(queue.dequeue()).toBe('empty queue');
        expect(queue.peek()).toBe('empty queue');
    });

});