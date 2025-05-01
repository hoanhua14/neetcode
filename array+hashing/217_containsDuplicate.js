/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let newSet = new Set(nums);
  if (newSet.size == nums.length) {
    return false;
  } else {
    return true;
  }
};

// input: an array of intergers nums
// output: true if there's dup, false if distinct
// pseudocode:
// - create a holder array called checked
// - loop thru nums
//  + if the ele is not in checked
//      + add ele to checked
//  + else
//      + return false

const solution2 = function (nums) {
  let checked = [];
  for (let i = 0; i < nums.length; i++) {
    if (!checked.has(nums[i])) {
      checked.push(nums[i]);
    } else {
      return false;
    }
  }
  return true;
};
class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    let checked = [];
    for (let num of nums) {
      if (checked.includes(num)) {
        return true;
        break;
      } else {
        checked.push(num);
      }
    }
    return false;
  }
}
class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    return new Set(nums).size !== nums.length;
  }
}
