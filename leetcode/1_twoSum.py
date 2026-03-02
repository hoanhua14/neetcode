class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(0,len(nums)-1):
            for i2 in range(i+1, len(nums)):
                if nums[i]+nums[i2] == target:
                    return [i, i2]
