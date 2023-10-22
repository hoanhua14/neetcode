var isAnagram = function(s, t) {
    for (let i of s) {
        if (!t.includes(i)) {
            return false;
        } else {
            s = s.replace(i, "");
            t = t.replace(i, "");
        }
    }
    if (s=="" & t=="") {
        return true;
    }
};
/*
O: bool (true if valid, false if not)
I: 2 strings (s and t)
C: s and t consist of lowercase English letters
E: numbers, special char, space?
*/
