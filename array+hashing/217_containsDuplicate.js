/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const checked = [];
    for (let i of nums) {
        if (checked.includes(i)) {
            return true;
        } else {
            checked.push(i);
        }
    }
    return false;
};
 