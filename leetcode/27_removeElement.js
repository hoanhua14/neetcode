// input: an integer array nums, an integer val. Remove all occurences of val in nums in place
// output: return the number of ele in nums which are not equal to val
var removeElement = function(nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};
