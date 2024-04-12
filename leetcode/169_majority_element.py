class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        nums_dict = dict()
        for num in nums:
            if num not in nums_dict:
                nums_dict[num] = 1
            elif num in nums_dict:
                nums_dict[num] += 1
        maj = 0
        key_of_maj = 0
        for key, val in nums_dict.items():
            if val >= maj:
                maj = val
                key_of_maj = key
        return key_of_maj
