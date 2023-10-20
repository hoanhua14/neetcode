import math
def productExceptSelf(nums):
    res = []
    prod = math.prod(nums)
    for num in nums:
        res.append(prod/num)
    print(res)
    return res

productExceptSelf([1,2,3,4])
