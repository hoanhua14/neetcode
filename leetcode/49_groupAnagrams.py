def groupAnagrams(list):
    res = defaultdict(list)
    for str in strs:
        print(str)
        count = [0] * 26
        for c in str:
            count[ord(c) - ord("a")] += 1
        res[tuple(count)].append(s)

    return res.values()



groupAnagrams(["ant", "tan", "tea", "eat"])
