'use strict';


function insertShiftArray(arr, value) {
    // declare empty array
    let newArr = [];
    // declare variable that takes the middle index of the array
    // separate the array index into half and give the value of it to the variable 
    // use ceil cause if the array index is odd num
    let midArr = Math.round(arr.length / 2);
    arr.forEach((item, idx) => {
        if (idx !== midArr) {
            newArr.push(item)
        } else {
            newArr.push(value)
            newArr.push(item)
        }
    })
    return newArr
}
let array = [2, 4, 6, -8];
let array2 = [42, 8, 15, 23, 42];

console.log(insertShiftArray(array, 5));
console.log(insertShiftArray(array2, 16));

module.exports = insertShiftArray;