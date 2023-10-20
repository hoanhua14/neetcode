def removeDuplicates(nums):
    unique = []
    u, n = 0, 0
    for num in range(0, len(nums)-1):
        if nums[n] == unique[u]:
            print(nums[n])
            n += 1
        else:
            unique.append(nums[n])
            u += 1
            n += 1
    return unique

removeDuplicates([0, 1, 2, 3, 3, 4, 4, 5, 5, 5, 5])
