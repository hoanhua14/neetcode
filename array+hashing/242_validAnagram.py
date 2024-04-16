class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        sMap= dict()
        for char in s:
            sMap[char] = sMap.get(char, 0) +1
        tMap= dict()
        for char in t:
            tMap[char] = tMap.get(char, 0) +1
        return sMap==tMap
