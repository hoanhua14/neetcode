var containsNearbyDuplicate = function(nums, k) {
    const indexMap = {};
    for (let i = 0; i<nums.length; i++) {
        let num = nums[i];
        if (num in indexMap && i - indexMap[num]<=k) {
            return true;
        }
        indexMap[num] = i;
    }
    return false;
};
