const fiboFunction = require('./Fibonacci-Sequence');
describe("test fiboFunction", () => {
    it('fiboFunction', () => {
        let test = fiboFunction(8)
        expect(test).toBe(21)
    });
});