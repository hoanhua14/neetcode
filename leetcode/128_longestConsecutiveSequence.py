#O: length of the longest consecutive elements
#I: a list of integers
#C: O(n) time comp
#E:


def longestConsecutive(nums: list[int]) -> int:
    numSet = set(nums)
    longest = 0
    for num in nums:
        if (num-1) not in nums:
            length = 0
            while (num + length) in nums:
                length += 1
            longest = max(longest, length)
    return longest



longestConsecutive([0,3,7,2,5,8,4,6,0,1])
#expeceted output: 9
