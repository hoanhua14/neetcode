var lengthOfLIS = function(nums) {
    let res = new Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                res[i] = Math.max(res[i], res[j]+1);
            };
        };
        console.log(res);
    };
    return Math.max(...res);
};
