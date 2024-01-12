var reduce = function(nums, fn, init) {
    if (nums.length === 0) {
        return init;
    } else {
        let count = init;
        for (let num of nums) {
            count = fn(count, num);
            // count += fn(count, nums[i]);
            console.log(count);
        };
        return count;
    }
};
