"use strict";

const Node = require("../node");

describe("node module test", () => {
    it("creat a node with value and next", () => {
        const testVal = "test";
        const node = new Node(testVal);
        expect(node.value).toBe(testVal);
        expect(node.next).toBeNull();
    });
});