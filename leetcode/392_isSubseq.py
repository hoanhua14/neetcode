class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        k = 0
        last_index = len(s) -1
        if (len(s) == 0):
            return True
        for char in t:
            if (char == s[k]):
                if (k == last_index):
                    return True
                elif k < last_index:
                    k+=1
        return False
