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


# Different approach:
        # i, j = 0, 0
        # while (i < len(s) and j < len(t)):
        #     if (s[i] == t[j]):
        #         i+=1
        #         j+=1
        #     else:
        #         j+=1
        # if (i < len(s)):
        #     return False
        # else:
        #     return True
