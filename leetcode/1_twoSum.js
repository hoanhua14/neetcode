/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let i2 = i + 1; i2 < nums.length; i2++) {
      if (nums[i] + nums[i2] == target) {
        return [i, i2];
      }
    }
  }
};
var twoSum = function (nums, target) {
  const myMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (myMap.has(diff)) {
      return [i, myMap.get(diff)];
    } else {
      myMap.set(nums[i], i);
    }
  }
};
