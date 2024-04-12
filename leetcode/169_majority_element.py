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

# optimized:
#         count = {}
#         res, maxCount = 0, 0
#         for num in nums:
#             count[num] = 1 + count.get(num, 0)
#             res = num if count[num] > maxCount else res
#             maxCount = max(count[num], maxCount)
#         return res


# Boyer Moore
# class Solution:
#     def majorityElement(self, nums: List[int]) -> int:
#         res, count = 0, 0
#         for num in nums:
#             if count == 0:
#                 res = num
#             count += (1 if num == res else -1)
#         return res
