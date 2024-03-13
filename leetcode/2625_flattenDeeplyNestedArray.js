var flat = function(arr, n) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && n > 0) {
            // Recursively flatten sub-array with reduced depth
            const flattenedSubArray = flat(arr[i], n - 1);
            for (let j = 0; j < flattenedSubArray.length; j++) {
                res.push(flattenedSubArray[j]);
            }
        } else {
            // If it's a number or depth is exhausted, push to result
            res.push(arr[i]);
        }
    }

    return res;
};
