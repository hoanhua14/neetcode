class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        k = 0
        prefix = ''
        ref = strs[0]
        min_length = min(len(s) for s in strs)
        ran = 0
        for k in range(min_length):
            for string in strs:
                ran +=1
                if (ref[k] == string[k]):
                    if (strs.index(string) == len(strs)-1 or ran == len(strs)):
                        prefix += ref[k]
                        ran = 0
                    else:
                        continue
                elif (ref[k] != string[k]):
                    if (len(prefix) == 0):
                        return ""
                    else:
                        return prefix


        return prefix
