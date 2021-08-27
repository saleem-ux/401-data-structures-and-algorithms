const BinarySearch = require('./Array-Binary-Search');


describe('Test challenge 03', () => {
    test('BinarySearch', () => {
        let test = BinarySearch([1, 2, 5, 4, 8], 5);
        expect(test).toEqual(2);
    });
});