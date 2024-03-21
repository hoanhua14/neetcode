var singleNumber = function(nums) {
    let numMap = new Map();
    for (let num of nums) {
        if (numMap.has(num)) {
            numMap.set(num, numMap.get(num)+1)
        } else {
            numMap.set(num, 1)
        }
    }
    for (let [key, value] of numMap.entries()) {
        if (value == 1) {
            return key;
        }
    }

};
