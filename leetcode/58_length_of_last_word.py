class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        # arr = s.split()
        # return len(arr[-1])
        i, length = len(s)-1, 0
        while (s[i] == ' '):
            i-=1
        while (i>=0 and s[i]!= ' '):
            length +=1
            i-=1
        return length
