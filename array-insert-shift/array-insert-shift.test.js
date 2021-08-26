const insertShiftArray=require('./array-insert-shift');

describe('Testing code challenge 2', () => {
  it('insertShiftArray', () => {
   let test= insertShiftArray( [2,4,6,-8], 5 );
    expect(test).toEqual([2, 4, 5, 6, -8]);
  });
});