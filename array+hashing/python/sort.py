from typing import List


def sort_words(words: List[str]) -> List[str]:

    return sorted(words)


def sort_numbers(numbers: List[int]) -> List[int]:
    numbers.sort()
    return numbers

def sort_decimals(numbers: List[float]) -> List[float]:
    numbers.sort()
    return numbers



# do not modify below this line
print(sort_words(["cherry", "apple", "blueberry", "banana", "watermelon", "zucchini", "kiwi", "pear"]))

print(sort_numbers([1, 5, 3, 2, 4, 11, 19, 9, 2, 5, 6, 7, 4, 2, 6]))

print(sort_decimals([3.14, 2.82, 6.433, 7.9, 21.555, 21.554]))
# .sort() : works on list of strings and numbers, sort in place, return None by default
# sorted(*optional: reverse=True, key=len or a func to execute to decide the order*): return a sorted list, does not work if list contains both num and char
