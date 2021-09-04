'use strict';

const Stack = require('../stack');

describe('Stack Test', () => {

    it('Can successfully push onto a stack', () => {
        let stack = new Stack();
        stack.push(9);
        expect(stack.peek()).toBe(9);
        expect(stack.top.value).toBe(9);
    })

    it('Can successfully push multiple values onto a stack', () => {
        let stack = new Stack();
        stack.push(9);
        stack.push(7);
        stack.push(5);
        stack.push(3);

        expect(stack.peek()).toBe(3);
        expect(stack.top.value).toBe(3);
    })

    it('Can successfully pop off the stack', () => {
        let stack = new Stack();
        stack.push(9);
        stack.push(7);
        stack.push(5);
        stack.push(3);

        expect(stack.peek()).toBe(3);

        stack.pop();

        expect(stack.peek()).toBe(5);
        expect(stack.top.value).toBe(5);
        expect(stack.pop()).toBe(5);
        expect(stack.pop()).toBe(7);
        expect(stack.peek()).toBe(9);
    })

    it('Can successfully empty a stack after multiple pops', () => {
        let stack = new Stack();
        stack.push(9);
        stack.push(7);
        stack.push(5);
        stack.push(3);

        expect(stack.pop()).toBe(3);
        expect(stack.pop()).toBe(5);
        expect(stack.pop()).toBe(7);
        expect(stack.pop()).toBe(9);
        expect(stack.pop()).toBe('stack is empty');
    })

    it('Can successfully peek the next item on the stack', () => {
        let stack = new Stack();
        stack.push(9);
        stack.push(7);
        stack.push(5);
        stack.push(3);

        expect(stack.peek()).toBe(3);
    })

    it('Can successfully instantiate an empty stack', () => {
        let stack = new Stack();

        expect(stack).toBeInstanceOf(Stack);
    })

    it('Calling pop or peek on empty stack raises exception', () => {
        let stack = new Stack();

        expect(stack.pop()).toBe('stack is empty');
        expect(stack.peek()).toBe('the stack is empty');
    })

});