'use strict';

function insertionSort(arr) {

    if (arr.length === 0) {
        return `Empty Array`;
    }

    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let temValue = arr[i];

        while ((j >= 0) && (temValue < arr[j])) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temValue;
    }
    return arr;
}

module.exports = insertionSort;