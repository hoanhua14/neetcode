/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let arr = nums.sort();
    let minOp = 0;
    let numMap = new Map();
    let freq = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i+1]) {
            freq += 1;
            numMap.set(arr[i], freq);
            freq = 0;
            continue;
        } else if (arr[i] == arr[i+1]) {
            freq += 1;
        };
    };
    for (let [key, value] of numMap) {
        if (value === 1) {
            return (-1);
        } else if (value % 3 == 0) {
            minOp += (value/3);
        } else if (value % 3 !== 0) {
            while (value % 3 !== 0) {
                value -= 2;
                minOp += 1;
            };
            if (value % 3 == 0) {
                minOp += (value / 3)
            }
        }
    }

    return minOp;
};
