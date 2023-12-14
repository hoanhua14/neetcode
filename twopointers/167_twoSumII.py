def twoSum(self, numbers: List[int], target: int) -> List[int]:
    l = 0
    r = len(numbers)-1
    for num in numbers:
        while num + numbers[r] > target:
            r -= 1
        if num + numbers[r] == target:
            return [numbers.index(num)+1, r+1]
